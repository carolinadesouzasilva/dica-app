import dataBase from "../infra/dicas-database.js";
class MetodosDataBase {
    armazena(dica) {
        dataBase.push(dica)
        return dataBase
    }
    retorna() {
        const dicaAleatoria = dataBase[Math.floor(Math.random() * dataBase.length)]
        return dicaAleatoria
    }
}
export default new MetodosDataBase;