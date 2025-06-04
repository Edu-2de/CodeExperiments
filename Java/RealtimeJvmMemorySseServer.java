import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.Headers;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class RealtimeJvmMemorySseServer {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        server.createContext("/", (HttpExchange exchange) -> {
            String html = """
                <!DOCTYPE html>
                <html>
                <head><title>JVM Memory Usage SSE</title></head>
                <body>
                  <h1>JVM Memory Usage</h1>
                  <div id='mem'></div>
                  <script>
                    const evtSource = new EventSource('/mem');
                    evtSource.onmessage = function(event) {
                      document.getElementById('mem').innerText = event.data;
                    };
                  </script>
                </body>
                </html>
                """;
            exchange.getResponseHeaders().add("Content-Type", "text/html");
            exchange.sendResponseHeaders(200, html.getBytes().length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(html.getBytes());
            }
        });

        server.createContext("/mem", (HttpExchange exchange) -> {
            Headers headers = exchange.getResponseHeaders();
            headers.add("Content-Type", "text/event-stream");
            headers.add("Cache-Control", "no-cache");
            headers.add("Connection", "keep-alive");
            exchange.sendResponseHeaders(200, 0);
            OutputStream os = exchange.getResponseBody();

            try {
                while (true) {
                    long used = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
                    long max = Runtime.getRuntime().maxMemory();
                    String data = String.format("data: Used: %.2f MB / Max: %.2f MB\n\n",
                        used / 1024.0 / 1024.0, max / 1024.0 / 1024.0);
                    os.write(data.getBytes());
                    os.flush();
                    Thread.sleep(1000);
                }
            } catch (Exception e) {
                // Cliente desconectou
            } finally {
                os.close();
            }
        });

        server.start();
        System.out.println("Server running at http://localhost:8080");
    }
}