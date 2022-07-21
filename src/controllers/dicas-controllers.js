class DicasControllers {
    rotas(app) {
        app.get('/',  (req, res) => {
          res.send('<h1>Deu certo<h1/>')  
        })
    }
}
export default new DicasControllers