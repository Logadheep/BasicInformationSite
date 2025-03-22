// node js file for the server. hosts index.html and other pages in the directory
let http = require('http');
let fs = require('fs');
let path = require('path');

const PORT = process.env.PORT || 8080; // port number for the server

http.createServer(function (req, res) {
    let filePath = ''; //default file path
    switch (req.url) { // req.url stores the path in the url
        case '/':
            filePath = './pages/index.html'; // file path changed for each page according to the url path
            break;
        case '/about':
            filePath = './pages/about.html';
            break;
        case '/contact-me':
            filePath = './pages/contactme.html';
            break;
        default:
            filePath = './pages/404.html';
            break;
    }

    fs.readFile(path.join(__dirname, filePath), (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' }); //content cannot be reached
            res.end('<h1>500 Server Error</h1>', 'utf-8');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' }); //content is reached
            res.end(content, 'utf-8');
        }
    });
}).listen(PORT);

console.log(`Server running at http://localhost:${8080}/`); // let the user know of the server

// setup navigation url with node




