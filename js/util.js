function checkWinner(data, size) {

    let player = ''

    // Check horizontal winners
    for (let i = 0; i < size; i++) {

        let arr = data.slice(i * size, (i * size) + size)
        player = arr[0]
        
        if (arr.every((val, i, arr) => val == arr[0])) {
            return {
                player: player,
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
        player = arr[0]

        if (arr.every((val, i, arr) => val == arr[0])) {
            return {
                player: player,
                winner: true
            }
        }

    } // End horizontal winners

    // Check for inclining diagonal winners
    let arr = []

    for (let i = 0; i < size; i++) {
        arr.push( data[ (i*size) + i ] )
    }

    player = arr[0]

    if (arr.every((val, i, arr) => val == arr[0])) {
        return {
            player: player,
            winner: true
        }
    }

    // Check for declining diagonal winners
    arr = []

    for (let i = 0; i < size; i++) {
        arr.push( data[ ( size * ( size - i ) ) - ( size - i ) ] )
    }

    player = arr[0]

    if (arr.every((val, i, arr) => val == arr[0])) {
        return {
            player: player,
            winner: true
        }
    }

    // No winners found
    return {
        player: '',
        winner: false
    }

}

module.exports = {
    checkWinner
}