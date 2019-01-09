var card = document.getElementById('show');
 console.log(card)
document.getElementById('show').addEventListener('click',
 
function() {
     card.classList.toggle('flipped');
}, false);