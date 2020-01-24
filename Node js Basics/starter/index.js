const fs = require("fs"); //file system
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); //Synchronous read
const laptopData = JSON.parse(json); //returns object from json data

const server = http.createServer((request, response) => {

    const pathName = url.parse(request.url, true).pathname;
    const id = url.parse(request.url, true).query.id; //id from each product

    //PRODUCTS OVERVIEW
    if(pathName === "/products" || pathName === "/"){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(`${__dirname}/templates/template-overview.html`, "utf-8", (error, data) =>{

            let overviewOutput = data;

            fs.readFile(`${__dirname}/templates/template-card.html`, "utf-8", (error, data) =>{

                const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join("");
                overviewOutput = overviewOutput.replace("{%CARDS%}", cardsOutput);
                
                response.end(overviewOutput);
            });
        });
    }

    //LAPTOP DETAIL
    else if(pathName === "/laptop" && id < laptopData.length){
        response.writeHead(200, {"Content-Type": "text/html"});
        
        fs.readFile(`${__dirname}/templates/template-laptop.html`, "utf-8", (error, data) =>{
            const laptop = laptopData[id];
            const output = replaceTemplate(data, laptop);
            response.end(output);
        });
    }

    //IMAGES
    else if((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) { //Checks if the path requested is an img
        fs.readFile(`${__dirname}/data/img/${pathName}`, (error, data) => {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.end(data);
        });
    }

    //URL NOT FOUND
    else{
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end("URL was not found on the server");
    }
});

server.listen(1337, "127.0.0.1", () => {
    console.log("Listening for Request");
});

function replaceTemplate(originalHtml, laptop)  {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);

    return output
}