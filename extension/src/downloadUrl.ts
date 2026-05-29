export default async function downloadUrl(url: string): Promise<void> {
    const response = await fetch('http://localhost:3000/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });

    if (!response.ok) {
        console.error('Download failed:', await response.json());
    }
}