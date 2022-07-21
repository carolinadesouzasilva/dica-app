class DicasControllers {
    rotas(app) {
        app.get('/',  (req, res) => {
          res.send('<h1>Deu certo<h1/>')  
        })

        app.post('/', (req,res) => {
            res.status(200).json({nome : 'Carolina'})
        })
    }
}
export default new DicasControllers