const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const soChina = response.data.filter(elem => elem.pais == 'China')
    const mulheresChina = soChina.filter(elem => elem.genero === 'F')
    console.log(mulheresChina.reduce(menorSalario))
}    
)
