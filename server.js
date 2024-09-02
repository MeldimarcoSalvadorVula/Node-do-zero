/*import {createServer} from 'node:http'; //Criando um servidor web com node sem framework
const  server = createServer((request, response) => {
    response.write('hello world!');


    return response.end();
});

server.listen(3000);*/

//Fastify é um micro-server para criação de servidor

import { fastify } from "fastify";
import { DatabaseMemory } from "./datbase-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();
const database = new DatabasePostgres();

server.get("/", () => {
  return "Hello World!";
});

//request body
server.post("/videos", async(request, reply) => {
    const {title, description, duration} = request.body;
    await database.create({
        title,
        description,
        duration,
        
    });

    return reply.status(201).send("Criado com sucesso")
});

server.get("/videos", async(request) => {
    const search = request.query.search// estamos biuscando os nosso querySearch inseridos na url pra recebermos informações de um determinado video da pesquisa
    const videos = await database.list(search);
    return videos;
  });

  server.put("/videos/:id", async (request, reply) => {
    const id = request.params.id;
    const {title, description, duration} = request.body;

     await database.update(id, {
        title,
        description,
        duration,  
    })

    return reply.status(204).send("Actualizado com sucesso");
  });

  server.delete("/videos/:id", async(request, reply) => {
    const id = request.params.id;
    await database.delete(id);
    return reply.status(204).send("Deletado com sucesso");
  });


server.listen({
  host:'0.0.0.0',
  port: process.env.PORT ?? 3333,
});

/*Hospendando o banco pelo noen e hospedar pelo render*/
