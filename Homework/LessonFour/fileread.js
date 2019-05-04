const fileRead = (() => {
    res.writeHead(200, { "Contetn-Type": "text/plain" });
    const file = fs.createReadStream("./simple.txt");
    file.pipe(res);

    return file;
});


function myReader 

process.on("message", msg => {
    const answer = longOperation();
    process.send(answer);
})