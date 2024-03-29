function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

//simulando o new
function novo(funcConstructor, ...params) {
    const obj = {}
    obj.__proto__ = funcConstructor.prototype
    funcConstructor.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'bem vindo', 123)
const aula4 = novo(Aula,'Até breve', 456)
console.log(aula3, aula4)