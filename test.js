const { checkWinner } = require('./js/util')

const size = 4

const data = [
    'x', 'o', 'x', 'x',
    'x', 'o', 'x', 'x',
    'o', '', '', 'x',
    'x', 'o', 'x', 'x'
]

console.log ( checkWinner(data, size ) )