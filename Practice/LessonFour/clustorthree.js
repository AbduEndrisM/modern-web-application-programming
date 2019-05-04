

const http = require("http");

const server = http.createServer();

const total = () => {
    let suxm = 0;
    for (let i = 0; i < 1e3; i++) {
        suxm = suxm + i;
    }
    return suxm;
};

server.on("request", (req, res) => {
    const sum = total();
    res.end("sum" + sum);
})
server.listen(4040, () => {
    console.log("Listening...");
});