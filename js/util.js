function isEmpty ( arr ) {
    return arr.every ( val => val == '' )
}

function checkWinner(data, size) {

    let player = ''

    // Check horizontal winners
    for (let i = 0; i < size; i++) {

        let arr = data.slice(i * size, (i * size) + size)
        player = arr[0]    
        
        if ( !isEmpty( arr ) && arr.every((val, i, arr) => val == arr[0])) {
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

        if (!isEmpty( arr ) && arr.every((val, i, arr) => val == arr[0])) {
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

    if (!isEmpty( arr ) && arr.every((val, i, arr) => val == arr[0])) {
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

    if (!isEmpty( arr ) && arr.every((val, i, arr) => val == arr[0])) {
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

function createElements(size) {
  
    $('#gameContainer').append('<div id="game" class=""></div>')
    for ( let i = 0; i < (size*size); i++ ) {
      $('#game').append('<div id="' + ("btn" + i) + '" class="btn span1 item" tag="' + i + '">+</div>')
    }
    $('#game').css("display", "grid")
    $('#game').css("grid-gap", "10px")
    $('#game').css("justify-content", "center")
    $('#game').css("grid-template-columns", "repeat(" + size + ", 80px)")
  }
  
  function togglePlayer ( player ) {
    return player == 'x' ? 'o' : 'x'
  }
  
  function setMessage ( message ) {
    $('.message').html(message)
    $('.message').css('display', 'block')
  }
  
  function getClass ( player ) {
    return player == 'x' ? 'btn-primary' : 'btn-warning'
  }

// module.exports = {
//     checkWinner
// }