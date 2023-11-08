// Este código será executado após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Adicione um ouvinte de evento ao elemento de classe "Menu_superior"
    var menuItems = document.querySelectorAll(".Menu_superior");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Lidar com o clique no menu superior, se necessário
            // Por exemplo, você pode rolar para a seção correspondente
        });
    });
});
