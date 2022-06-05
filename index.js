const api = require("./api");
const express = require("express");

const server = express();
server.use(express.json());
server.listen(9191);

server.get("/", (req, res) => {
    return res.send({messange : "Tudo ok! API de pé."});
});
server.get ("/pokemon/:id", async (req, res) =>{
    const {id} = req.params;
    try {
        const {data} = await api.get(`/pokemon/${id}`);
        return res.send({ name: data.name});

    } catch (error) {
        res.send({error : error.messange}); 
    }
})