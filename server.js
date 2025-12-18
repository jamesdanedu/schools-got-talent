const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.csv': 'text/csv',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    let urlPath = req.url.split('?')[0];
    
    if (urlPath === '/') {
        urlPath = '/index.html';
    }
    
    let filePath = path.join(__dirname, urlPath);
    
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
            return;
        }
        
        res.writeHead(200, { 
            'Content-Type': mimeType,
            'Cache-Control': 'no-cache'
        });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🎭  SME's Got Talent Server Running!  🎭                ║
║                                                           ║
║   Open your browser and navigate to:                      ║
║   http://localhost:${PORT}                                   ║
║                                                           ║
║   Controls:                                               ║
║   • Press 1, 2, 3, 4 to activate buzzers                 ║
║   • Press SPACE to advance to next contestant             ║
║   • Press T to cycle through themes                       ║
║   • Click 'Connect' for Microbit serial input             ║
║                                                           ║
║   Themes: Stage Dark, Pure Black, Classic Light,          ║
║           Warm Cream, Cool Slate, Soft Lavender,          ║
║           Mint Fresh                                      ║
║                                                           ║
║   Press Ctrl+C to stop the server                         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
});
