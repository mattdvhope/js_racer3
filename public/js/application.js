$(document).ready(function() {

  var player1 = 0;
  var player2 = 0;

  $(document).on('keyup', function(event) {
    if(event.keyCode == 80) {
      $('#player1_strip .active').next().addClass('active');
      $('#player1_strip .active').prev().removeClass('active');
       player1 ++;
       if (player1 === 10) {
        alert("Player 1 Winner!");
        player1 = 0;
        player2 = 0;
        $('#player1_strip').children('.active').removeClass();
        $('#player1_strip').children().first().addClass('active');
        $('#player2_strip').children('.active').removeClass();
        $('#player2_strip').children().first().addClass('active');         
       }
    }
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how

  });

  $(document).on('keyup', function(event) {
    if(event.keyCode == 81) {
      $('#player2_strip .active').next().addClass('active');
      $('#player2_strip .active').prev().removeClass('active');
       player2 ++;
       if (player2 === 10) {
        alert("Player 2 Winner!");
        player1 = 0;
        player2 = 0;
        $('#player1_strip').children('.active').removeClass();
        $('#player1_strip').children().first().addClass('active');
        $('#player2_strip').children('.active').removeClass();
        $('#player2_strip').children().first().addClass('active');         
       }
    }
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how

  });

});
