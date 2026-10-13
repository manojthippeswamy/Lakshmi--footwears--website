/**
 * Lakshmi Footwears - Local Preview Server
 * Zero-dependency local static file server using Node.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Strip query parameters
  const cleanUrl = req.url.split('?')[0];
  let reqPath = cleanUrl === '/' ? '/index.html' : cleanUrl;
  let filePath = path.join(__dirname, reqPath);

  // Prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h2>404 Not Found</h2><p>File ${reqPath} was not found.</p><p><a href="/index.html">Return to Home</a></p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('========================================================');
  console.log('  👟 Lakshmi Footwears (Baraguru, Sira Taluk)');
  console.log('  Local Preview Server is active!');
  console.log('========================================================');
  console.log(`  👉 Open in your browser: http://localhost:${PORT}`);
  console.log('  👉 Desktop & Mobile view: http://localhost:' + PORT + '/index.html');
  console.log('  👉 Press Ctrl + C to stop the preview server');
  console.log('========================================================\n');
});
