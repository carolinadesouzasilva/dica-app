import express from 'express';

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.use(express.json())

