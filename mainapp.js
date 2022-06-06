/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores , roundscore ,activeplayer,gameplaying;

init();
document.addEventListener('DOMContentLoaded', function(){
document.querySelector('.btn-roll').onclick = function(){
    //in order to put an end to the game we put this section in a function
    if (gameplaying){
    var dice= Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display= 'block';
    document.querySelector('.dice').src = 'dice-' + dice +'.png';
    console.log(dice);
    //update score if the dice number is not 1 
    if(dice !== 1){
    //add score to the active players score
    roundscore +=dice;
    document.querySelector('#current-'+activeplayer ).textContent=roundscore;}
    //change the active player once the dice score is 0 
    else{
    //statement to change the active player
     nextplayer();
    }}
}});
document.addEventListener('DOMContentLoaded',function(){
document.querySelector('.btn-hold').onclick = function(){
//update the global score
scores[activeplayer] += roundscore; 
console.log('plaer'+activeplayer+'is'+ scores[activeplayer]);
//change the interface to the next player
document.querySelector('#score-'+activeplayer).textContent= scores[activeplayer];
//determine the winner
if(scores[activeplayer]>=20){
    document.querySelector('#name-'+activeplayer).textContent='winner';
    document.querySelector('.dice').style.display = 'none';
   document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
   document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
   //put an end to the game
   gameplaying = false;
   roundscore=0;
}
else
nextplayer();
}})

function nextplayer(){
    activeplayer===0? activeplayer =1 :activeplayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active'); 
   document.querySelector('.dice').style.display= 'none'; 
}
document.querySelector('.btn-new').addEventListener('click', init);
function init() {
    scores = [0, 0];
    activeplayer = 0;
    roundscore = 0;
    gameplaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}