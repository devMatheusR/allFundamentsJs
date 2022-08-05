class Pessoa {
    constructor () {
        this.data = {}
    }

    cpfIsValid ( value ) {
        return /^\d\.\d\.\d\-\d$/.test(value)
    }

    get cpf () { 
        if (!this.data.hasOwnProperty('cpf')) {
            return undefined
        }

        return this.data.cpf
    }

    set cpf ( value ) {
        if(!this.cpfIsValid(value)){
            throw new Error('numero de CPF invalido')
        }

        this.data['cpf'] = value
    }
}

const pessoa = new Pessoa()

pessoa.cpf = '076.067.475-20'

console.log(pessoa.cpf)