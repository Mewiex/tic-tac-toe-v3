(function(){	
    
    
            
	var playerOne = '#player1';
	var playerTwo = '#player2';
	var winner = "";
    //just something i added to know the possible combos for win
    //winningmoves = 
    //[
    //[0,1,2]
    //[0,3,6]
    //[0,4,8]
    //[1,4,7]
    //[2,4,6]
    //[2,5,8]
    //[3,4,5]
    //[6,7,8]
         // ]
    
	// create start and end variables 
	var startEnd = {
		start: "<div class='screen screen-start' id='start'>" + 
			   "<header><h1>Tic Tac Toe</h1>" + 
			   "<a href='#' class='button'>Play Game</a><br>" + 
			   "</header></div>",
		end: "<div class='screen screen-win' id='finish'>" + 
    		 "<header><h1>Tic Tac Toe</h1>" + 
    		 "<p class='message'></p>" + 
    		 "<a href='#' class='button'>New game</a>" + 
    		 "</header></div>"
	};// Append the start & finish screens to the body and hide them
	$('body').append(startEnd.start);
	$('body').append(startEnd.end);
	$('#start, #finish').hide();

	// Load the starting screen
	(function() {
		$('#start').show();
		$('.button').on('click', function(){
			$('#start, #finish').hide();
			$('#board').show();
			$(".box").each(function () {
				this.style.backgroundImage = "none";
				$(this).removeClass("box-filled-1");
				$(this).removeClass("box-filled-2");
			});
			$('li.players').removeClass('active');
            //set player1 as starting player
           
			var firstplayer = $('#player1').addClass("active");
			startGame();
		});
	}());
    
    
    var startGame = function() {
		$('.box').each(function(){
			$(this).mouseenter(function(){ //add either x or o as background image on hover
				if ( $(playerOne).hasClass("active")) {
					this.style.backgroundImage = "url('img/o.svg')";
				} else {
					this.style.backgroundImage = "url('img/x.svg')";
				}
			});
			$(this).mouseleave(function(){ //when mouse leaves board, set background to original
				this.style.backgroundImage = "none";
			});
		});
        
        $('.box').click(function(){//when player clicks on box check if there is already a piece there, if there is block from putting down
            
            if($(playerOne).hasClass('active')){
                if($(this).hasClass('box-filled-1') === false && $(this).hasClass('box-filled-2') === false)
                    {
                        $(this).addClass('box-filled-1');
                        this.style.backgroundImage = "url('img/o.svg')";
                        // remove mouseenter and mouseleave so it stays as x or o
                        $(this).unbind('mouseenter mouseleave');
                        CheckifWin();
                        nextPlayer();
                    }
                //basically same as above just different values
            }else if($(playerTwo).hasClass('active')) {
                if($(this).hasClass('box-filled-1') === false && $(this).hasClass('box-filled-2') === false)
                    {
                        $(this).addClass('box-filled-2');
                        this.style.backgroundImage = "url('img/x.svg')";
                        $(this).unbind('mouseenter mouseleave');
                        CheckifWin();
                        nextPlayer();
                    }
            }
            
        });
    }
    //checking if playerOne has active class, aka is the one playing and if == true remove active class and put playerTwo as active
    var nextPlayer = function() {
		if ( $(playerOne).hasClass('active') ) {
			$(playerOne).removeClass('active');
			$(playerTwo).addClass('active');
		} else {
			$(playerTwo).removeClass('active');
			$(playerOne).addClass('active');
		}
	};
    
  
    var CheckifWin = function() {
        
        var pices = [];
        
       $('.box').each(function(){
           if($(this).hasClass('box-filled-1'))
               {
                   pices.push('o');
               }else if ($(this).hasClass('box-filled-2')){
                   pices.push('x');
               }else{
                   pices.push('none');
               }
       });
        
      //check all 8 possible combos if none match == draw
        if(pices[0] === 'x' && pices[1] === 'x' && pices[2] === 'x' || pices[0] === 'o' && pices[1] === 'o' && pices[2] === 'o')
            {
                if(pices[0] === 'x')
                    {
                        winner = "player2";
                        winGame();
                    }
                else if(pices[0] === 'o'){
                winner = "player1";
                winGame();
            }
           
                
            }
        else if(pices[0] === 'x' && pices[3] === 'x' && pices[6] === 'x' || pices[0] === 'o' && pices[3] === 'o' && pices[6] === 'o')
        {
           if(pices[0] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[0] === 'o'){
                winner = "player1";
                winGame();
            }
           
        }else if(pices[0] === 'x' && pices[4] === 'x' && pices[8] === 'x' || pices[0] === 'o' && pices[4] === 'o' && pices[8] === 'o')
        {
           if(pices[0] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[0] === 'o'){
                winner = "player1";
                winGame();
            }
            
        }else if(pices[1] === 'x' && pices[4] === 'x' && pices[7] === 'x' || pices[1] === 'o' && pices[4] === 'o' && pices[7] === 'o')
        {
           if(pices[1] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[1] === 'o'){
                winner = "player1";
                winGame();
            }
            
        }else if(pices[2] === 'x' && pices[4] === 'x' && pices[6] === 'x' || pices[2] === 'o' && pices[4] === 'o' && pices[6] === 'o')
        {
           if(pices[2] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[2] === 'o'){
                winner = "player1";
                winGame();
            }
            
        }else if(pices[2] === 'x' && pices[5] === 'x' && pices[8] === 'x' || pices[2] === 'o' && pices[5] === 'o' && pices[8] === 'o')
        {
           if(pices[2] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[2] === 'o'){
                winner = "player1";
                winGame();
            }
            
        }
        else if(pices[3] === 'x' && pices[4] === 'x' && pices[5] === 'x' || pices[3] === 'o' && pices[4] === 'o' && pices[5] === 'o')
        {
           if(pices[3] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[3] === 'o'){
                winner = "player1";
                winGame();
            }
           
        }else if(pices[6] === 'x' && pices[7] === 'x' && pices[8] === 'x' || pices[6] === 'o' && pices[7] === 'o' && pices[8] === 'o')
        {
           if(pices[6] === 'x')
               {
                   winner = "player2";
                   winGame();
               }
            else if(pices[6] === 'o'){
                winner = "player1";
                winGame();
            }
           
        }
        else if(pices.includes('none') === false){
            winner = "none";
            winGame();
        }
    };
    
    //check if its win for player1 or player1 or if draw and remove classes accordingly
    var winGame = function() {
        if(winner === "player1"){
            $("#finish").removeClass("screen-win-two");
            $("#finish").removeClass("screen-win-tie");
            $(".message").html("Player 1 wins 'o'");
            $("#finish").addClass("screen-win-one");
            $('#finish').show();
            $('#board').hide();
        }
        else if(winner === "player2")
            {
            $("#finish").removeClass("screen-win-one");
            $("#finish").removeClass("screen-win-tie");
            $(".message").html("Player 2 wins 'x'");
            $("#finish").addClass("screen-win-two");
            $('#finish').show();
            $('#board').hide();
            }
        else if(winner === "none")
            {
            $("#finish").removeClass("screen-win-one");
            $("#finish").removeClass("screen-win-two");
            $(".message").html("Draw");
            $("#finish").addClass("screen-win-tie");
            $('#finish').show();
            $('#board').hide(); 
            }
    };
    
    
  
    
      
}());
    
    