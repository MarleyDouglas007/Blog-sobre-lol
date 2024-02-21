document.addEventListener("DOMContentLoaded", function() {
    const championNames = document.querySelectorAll(".champion-name");
    championNames.forEach(champion => {
        champion.addEventListener("mouseover", function() {
            champion.style.color = "blue"; // Altera a cor do nome ao passar o mouse sobre ele
        });
        champion.addEventListener("mouseout", function() {
            champion.style.color = "black"; // Restaura a cor original ao tirar o mouse de cima
        });
        champion.addEventListener("click", function() {
            window.location.href = "index2.html"; // Redireciona para a página index2.html ao clicar no nome
        });
    });
});
