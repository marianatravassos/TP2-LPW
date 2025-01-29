
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.addEventListener('mouseover', function(){
    modal.style.display = "block";
});
span.addEventListener('click', function(){
    modal.style.display = "none";
})
window.addEventListener('click', function(event){
    if (event.target == modal) {
    modal.style.display = "none";
  }
}) 

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  alert('Código Konami ativado!');
  document.body.style.backgroundImage = 'url(/paginas_filmes/imgs/SalumLoss.jpg)';
  
});