const { checkWinner } = require('./js/util')

const size = 4

const data = [
    '', '', '', '',
    '', '', '', '',
    '', '', '', '',
    '', '', '', ''
]

console.log ( checkWinner(data, size ) )