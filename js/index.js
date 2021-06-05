/*
Developer: Jojo M. Aquitania
Email: jmaquitania@gmail.com
App: Scalable Tic Tac Toe
*/

const size = 4 // Set the board size here

let data = new Array(size * size)
data.fill('')
let result = {
  winner: false
}

$(document).ready(function () {
  var x = "x"
  var o = "o"
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  var toPlay = x

  createElements(size)

  $('#game div.item').click( handler )

  function handler (e, i) {
    console.log(result)
    if (e.target.getAttribute('done') == '1' || ( result && result.winner == true) ) {
      console.log(result)
      e.preventDefault()
      return false
    }

    var tag = e.target.getAttribute('tag')
    data[tag] = toPlay
    e.target.setAttribute('done', '1')
    e.target.innerHTML = toPlay

    $(e.target).addClass('btn ' + getClass(toPlay))

    toPlay = togglePlayer(toPlay)
    count++

    result = checkWinner(data, size)
    if (result.winner == true) {
      if ( result.player == 'x' ) {
        x_win++
        $('#x_win').html(x_win)
      } else {
        o_win++
        $('#o_win').html(o_win)
      }
      setMessage('<b>' + result.player.toUpperCase() + '</b> wins!')
    }

    if (!result.winner && count >= ((size * size))) {
      setMessage("It's a tie!")
      return false
    }

  }

  $("#reset").click(function () {

    count = 0
    data.fill('')
    $('#game>div').remove()
    createElements(size)
    result = {
      winner: false
    }
    $('.message').html('')
    $('.message').css('display', 'none')
    
    $('#game div.item').click( handler )

  });
});
