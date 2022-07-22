class ValidacaoService {
    validaAutor(autor) {
        if (autor !== "") {
            return true
        } else {
            return false
        }
    }
    validaDica(dica) {
        if (dica !== "") {
            return true
        } else {
            return false
        }
    }
}

export default new ValidacaoService;