var player1 = 'x';
var player2 = 'y';
var turn = true;
document.addEventListener('DOMContentLoaded',function(){
	var table = document.getElementById('board');
	table.addEventListener('click',function(){
		if(turn===true){
		event.target.innerHTML=player1;
		document.getElementById('playerturn').innerHTML="Player 2 turn"
		}else{
		event.target.innerHTML=player2;
		document.getElementById('playerturn').innerHTML="Player 1 turn"

		}
		turn = !turn;

	})
	var playitagain=document.getElementById('playagain');
	playitagain.addEventListener('click',function(){
		location.reload();
	})
})
