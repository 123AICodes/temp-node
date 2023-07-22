const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Welcome to our home page`);
  } else if (req.url === "/about") {
    res.end(`Here is the about page`);
  } else {
    res.end(
      `<html>
				<h1>Ooops!</h1>
				<p>Page not found</p>
				<a href='/'>Back</a>
			</html>`
    );
  }
});

server.listen(5000);
