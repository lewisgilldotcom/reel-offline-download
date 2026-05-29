import express from 'express';
import { YtDlp } from 'ytdlp-nodejs';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const downloadsDir = resolve(__dirname, '../downloads');

mkdirSync(downloadsDir, { recursive: true });

const app = express();
const ytdlp = new YtDlp();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const currentlyDownloading = new Set<string>();

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/download', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        res.status(400).json({ error: 'No URL provided' });
        return;
    }

    if (currentlyDownloading.has(url)) {
        res.json({ success: true, message: 'Already downloading' });
        return;
    }

    currentlyDownloading.add(url);

    try {
        await ytdlp
            .download(url)
            .cookiesFromBrowser('chromium')
            .filter('mergevideo')
            .setOutputTemplate(`${downloadsDir}/%(id)s.%(ext)s`)
            .addArgs('--no-part')
            .on('progress', (p) => console.log(`${p.percentage_str}`))
            .run();

        res.json({ success: true });
    } catch (error) {
        console.error('Download failed for URL:', url, error);
        res.status(500).json({ error: 'Download failed' });
    } finally {
        currentlyDownloading.delete(url);
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));