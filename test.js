const { checkWinner } = require('./js/util')

const size = 4

const data = [
    'o', 'o', 'x', 'o',
    'x', '', 'o', 'o',
    'o', 'o', '', 'x',
    'o', 'o', 'x', 'o'
]

console.log ( checkWinner(data, size ) )