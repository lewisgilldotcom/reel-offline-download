import express from 'express';
import { YtDlp } from 'ytdlp-nodejs';

const app = express();
const ytdlp = new YtDlp();

app.use(express.json());

// Allow requests from the Chrome extension
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/download', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        res.status(400).json({ error: 'No URL provided' });
        return;
    }

    try {
        await ytdlp
            .download(url)
            .filter('mergevideo')
            .output('../downloads')
            .quality('1080p')
            .type('mp4')
            .on('progress', (p) => console.log(`${p.percentage_str}`))
            .run();

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Download failed' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));