const fs = require("fs"); //file system
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json); //returns object from json data

const server = http.createServer((request, response) => {

    const pathName = url.parse(request.url, true).pathname;
    const id = url.parse(request.url, true).query.id; //id from each product

    
    if(pathName === "/products" || pathName === "/"){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`This is the PRODUCTS page`);
    }
    else if(pathName === "/laptop" && id < laptopData.length){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(`This is the LAPTOP page for laptop ${id}`);
    }
    else{
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end("URL was not found on the server");
    }
});

server.listen(1337, "127.0.0.1", () => {
    console.log("Listening for Request");
});