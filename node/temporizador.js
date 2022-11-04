const { RecurrenceRule } = require('node-schedule')
const schedule = require ('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 5', () => {
    console.log("Executando tarefa 1! ",new Date().getSeconds())
})

setTimeout(function () {
    console.log('Cancelando...')
    tarefa1.cancel( )
}, 20000)

//setImmediate
//setInterval

const regra = new RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2! ', new Date().getSeconds())
})
