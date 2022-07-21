class DicasControllers {
    rotas(app) {
        app.get('/',  (req, res) => {
          res.send('<h1>Deu certo<h1/>')  //precisa retornar uma dica aleatória
        })

        app.post('/', (req,res) => {
            res.status(200).json({nome : 'Carolina'}) //envia uma dica
        })
    }
}
export default new DicasControllers