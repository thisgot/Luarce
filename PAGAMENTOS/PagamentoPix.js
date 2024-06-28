document.addEventListener("DOMContentLoaded", function() {
    var timer = 8;
    function updateTimer(){
        if(--timer == 0){
            window.location.href = "PagamentoAprovado.html"
        }
    }
    setInterval(updateTimer,1000)
})
