function someFunc() {
    // Выполняем действие, если ширина меньше 1000px
    var w = window.innerWidth;
    if (w < 1000) {
        var menu_icon = document.getElementById("menu_icon");
        var side_nav = document.getElementById("side_nav");
        var header = document.getElementById("header")

        side_nav.style.right = "-200px";
        menu_icon.onclick = function() {
            if (side_nav.style.right == "-200px") {
                side_nav.style.right = "0";
            } else {
                side_nav.style.right = "-200px";
            }
        };
    }
}

// Выполняем заново при изменении размера окна
window.addEventListener('resize', function() {
    console.log("Размер окна изменен");
    someFunc();
});