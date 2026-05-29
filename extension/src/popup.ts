async function checkServer(): Promise<boolean> {
    try {
        const response = await fetch('http://localhost:3000/health');
        return response.ok;
    } catch {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const serverRunning = await checkServer();
    const status = document.getElementById('status')!;
    
    if (!serverRunning) {
        status.textContent = '⚠️ Server not running. Run npm start in the server folder.';
        status.style.color = 'red';
    } else {
        status.textContent = '✅ Server running.';
        status.style.color = 'green';
    }
});