import validacaoService from "../services/validacao-service.js"
import MetodosDatabase from "../utils/metodos-database.js"

class DicasControllers {
    rotas(app) {
        app.get('/dica',  (req, res) => {
        const response = MetodosDatabase.retorna()
        res.status(200).json(response)
        
        })

        app.post('/criar', (req,res) => {
            const ValidacaoAutor = validacaoService.validaAutor(req.body)
            const ValidacaoDica = validacaoService.validaDica(req.body)
            if (ValidacaoAutor === true && ValidacaoDica === true) {
                const novaDica = req.body
                const response = MetodosDatabase.armazena(novaDica)
                res.status(200).json(response)
            } else {
                res.status(200).json(Error)
            }
        })
    }
}
export default new DicasControllers