const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Real-Time Random Number Stream</title>
</head>
<body>
  <h1>Random Number Stream</h1>
  <div id="numbers"></div>
  <script>
    const evtSource = new EventSource('/stream');
    evtSource.onmessage = function(event) {
      const div = document.getElementById('numbers');
      div.innerHTML = '<b>' + event.data + '</b>';
    };
  </script>
</body>
</html>
`;

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  } else if (req.url === '/stream') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    const interval = setInterval(() => {
      res.write(`data: ${Math.random()}\n\n`);
    }, 1000);
    req.on('close', () => clearInterval(interval));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});