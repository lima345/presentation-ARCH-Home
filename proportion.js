// Garantir que o canvas sempre tenha a mesma proporção
function adjustCanvasSize() {
    var canvas = document.getElementById("unity-canvas");
    
    // Defina uma proporção fixa, exemplo: 16:9
    var aspectRatio = 16 / 9;
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    // Ajuste com base na menor dimensão para manter a proporção
    if (windowWidth / windowHeight > aspectRatio) {
        canvas.style.width = windowHeight * aspectRatio + "px";
        canvas.style.height = windowHeight + "px";
    } else {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = windowWidth / aspectRatio + "px";
    }
}

window.addEventListener("resize", adjustCanvasSize);
adjustCanvasSize();