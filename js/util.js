function checkWinner(data, size) {

    // Check horizontal winners
    for (let i = 0; i < size; i++) {
        let arr = data.slice(i * size, (i * size) + size)
        if (arr.every((val, i, arr) => val == arr[0])) {
            return {
                player: data[i],
                winner: true
            }
        }

    } // End horizontal winners

    // Check vertical winners
    for (let i = 0; i < size; i++) {
        let arr = []
        for ( let j = 0; j < size; j++ ) {
            arr.push( data[ (j*size) + i ] )
        }
        if (arr.every((val, i, arr) => val == arr[0])) {
            return {
                player: data[i],
                winner: true
            }
        }

    } // End horizontal winners

    // Check for diagonal winners
    for (let i = 0; i < size; i++) {

        

    }

    return {
        winner: false
    }

}

module.exports = {
    checkWinner
}