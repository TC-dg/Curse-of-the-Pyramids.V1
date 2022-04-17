// console.log("hi");
const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const port = 5000;
const ip = "127.0.0.1";

const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./template/${filename}`, (error, data) => {
        if (error) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.end("Sorry, internal error");
        } else {
            response.statusCode = statusCode;
            response.setHeader("Content-Type", "text/html");
            response.end(data);
        }
    });
};

const server = http.createServer((request, response) => {
    let url = request.url;
    const method = request.method;

    if (method === "GET") {
        const requestUrl = new URL(url, `http://${ip}:${port}`);
        url = requestUrl.pathname;
        if (url === "/" || url === "/login.html") {
            sendResponse(`login.html`, 200, response);
        } else if (url === "/home.html") {
            sendResponse(`home.html`, 200, response);
        } else {
            sendResponse(`404.html`, 404, response);
        }
    } else {
        if (url === "/process-login") {
            let body = [];

            request.on("data", (chunk) => {
                body.push(chunk);
            });

            request.on("end", () => {
                body = Buffer.concat(body).toString();
                body = qs.parse(body);
                console.log(body);
                if (body.username === "123" && body.password === "123") {
                    response.statusCode = 301;
                    response.setHeader("Location", "/home.html");
                } else {
                    response.statusCode = 301;
                    response.setHeader("Location", "/404.html");
                }
                response.end();
            })
        }
    }
});



server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
});