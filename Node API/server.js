import { PrismaClient } from "@prisma/client";
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
// Dentro do app temos tudo oq esta dentro do express - recomendado pela documentacao do express
const app = express();

// Ativando json na aplicacao
app.use(express.json())

// Permitindo receber e retornar requisicoes do front-end
app.use(cors({
    origin: 'http://localhost:5173'
}))


/**
 * Criando rota que retorna valor ao ser acessado o caminho 'users' no meu servidor
 * req = request (requisicao)
 * res = response (resposta)
*/
app.get('/users', async (req, res) => {
    let users = []

    // Se existir algo que foi passado como parametro na query, faz a pesquisa a partir dessa informacao
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                nome: req.query.nome,
                email: req.query.email,
                idade: req.query.idade
            }
        })
    // Retornando todos os usuarios, caso nao exista nenhum parametro na query    
    } else {    
        // Capturando todos os usuarios
        users = await prisma.user.findMany()
    }
    
    res.status(200).json(users)
})

app.post('/users', async (req, res) => {
    // Promisse(requisicao assincrona) pega algo de fora do codigo, o await indica que o js deve esperar pq vai voltar algo
    // async indica que e uma requisicao assincrona
    await prisma.user.create({
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    }) 
    
    res.status(201).json(req.body)
})

// :id indica que uma variavel, chamada id, sera colocada apos o '/users/'
app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        // Selecionando, por id, onde editar
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(200).json(req.body)
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuario deletado com sucesso!"})
})

// Declarando que a porta 3000 do localhost sera utilizada
app.listen(3000)            