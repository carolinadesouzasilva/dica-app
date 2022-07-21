import express from 'express';
import DicasControllers from "./src/controllers/dicas-controllers.js"

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.use(express.json())

DicasControllers.rotas(app)
