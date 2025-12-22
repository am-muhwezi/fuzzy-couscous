import express from 'express';

const app =express();

app.get("/", (req, res) => {
    res.send("Aegis says Hello World!");
})

const port = process.env.PORT || 3000;


app.listen(port,() => {
    console.log("Server at http://localhost:" + port);
})