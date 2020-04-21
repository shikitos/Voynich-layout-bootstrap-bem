function someFunc() {
    // Do it if the screen size is less than 1000
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

// Do again with refresh the screen size
window.addEventListener('resize', function() {
    console.log("Resized");
    someFunc();
});