function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    /*throw { 
        nome: erro.name,
        msg: erro.message, 
        date: new Date
    }*/
    throw new Error ('Deu pau')
}

function imprimirNomeGritando(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritando(obj)
