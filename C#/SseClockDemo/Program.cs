using System;
using System.Net;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        HttpListener listener = new HttpListener();
        listener.Prefixes.Add("http://localhost:5000/");
        listener.Start();
        Console.WriteLine("Server running at http://localhost:5000");

        while (true)
        {
            var context = await listener.GetContextAsync();
            if (context.Request.Url.AbsolutePath == "/")
            {
                string html = @"<!DOCTYPE html>
<html>
<head><title>Realtime Clock SSE</title></head>
<body>
  <h1>Realtime Clock</h1>
  <div id='clock'></div>
  <script>
    const evtSource = new EventSource('/clock');
    evtSource.onmessage = function(event) {
      document.getElementById('clock').innerText = event.data;
    };
  </script>
</body>
</html>";
                byte[] buffer = Encoding.UTF8.GetBytes(html);
                context.Response.ContentType = "text/html";
                context.Response.ContentLength64 = buffer.Length;
                await context.Response.OutputStream.WriteAsync(buffer, 0, buffer.Length);
                context.Response.Close();
            }
            else if (context.Request.Url.AbsolutePath == "/clock")
            {
                context.Response.ContentType = "text/event-stream";
                context.Response.Headers.Add("Cache-Control", "no-cache");
                context.Response.Headers.Add("Connection", "keep-alive");
                while (context.Response.OutputStream.CanWrite)
                {
                    string data = $"data: {DateTime.Now:HH:mm:ss}\n\n";
                    byte[] buffer = Encoding.UTF8.GetBytes(data);
                    await context.Response.OutputStream.WriteAsync(buffer, 0, buffer.Length);
                    await context.Response.OutputStream.FlushAsync();
                    await Task.Delay(1000);
                }
                context.Response.Close();
            }
            else
            {
                context.Response.StatusCode = 404;
                context.Response.Close();
            }
        }
    }
}