import http.server
import socketserver
import threading
import json
import time
import psutil

PORT = 8000
stats = {"cpu": 0, "mem": 0}

class StatsHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/stats":
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(stats).encode())
        else:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"""
            <html>
            <head>
                <title>Real-Time Stats</title>
                <script>
                async function updateStats() {
                    const res = await fetch('/stats');
                    const data = await res.json();
                    document.getElementById('cpu').innerText = data.cpu + '%';
                    document.getElementById('mem').innerText = data.mem + '%';
                }
                setInterval(updateStats, 1000);
                window.onload = updateStats;
                </script>
            </head>
            <body>
                <h1>Real-Time System Stats</h1>
                <p>CPU Usage: <span id="cpu">...</span></p>
                <p>Memory Usage: <span id="mem">...</span></p>
            </body>
            </html>
            """)

def update_stats():
    while True:
        stats["cpu"] = psutil.cpu_percent(interval=1)
        stats["mem"] = psutil.virtual_memory().percent

if __name__ == "__main__":
    threading.Thread(target=update_stats, daemon=True).start()
    with socketserver.TCPServer(("", PORT), StatsHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()