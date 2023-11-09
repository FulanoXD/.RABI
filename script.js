window.onload = function() {
    // Definir a opacidade inicial de todos os elementos da página para 0
    document.querySelectorAll("*").forEach(function(el) {
      el.style.opacity = 0;
      el.style.transform = "translate(-100%, 0)";
    });
  
    // Definir um temporizador para alterar a opacidade e a posição dos elementos
    setTimeout(function() {
      document.querySelectorAll("*").forEach(function(el) {
        el.style.opacity = 1;
        el.style.transform = "translate(0, 0)";
        el.style.transition = "transform 500ms ease-in";
      });
    }, 100);
  };
  
