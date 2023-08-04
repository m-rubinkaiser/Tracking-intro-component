var show = false;
function menuBar() {
    show = !show;
    if (show == true) {
        document.getElementById("list").style.opacity = "1";
        document.getElementById("nav_button").style.backgroundImage =
        "url(../images/icon-close.svg)";
    } else {
        document.getElementById("list").style.opacity = "0";
        document.getElementById("nav_button").style.backgroundImage =
            "url(../images/icon-hamburger.svg)";
    }
}

const mediaQuery = window.matchMedia("(min-width: 600px)");
function handleTabletChange(e) {
    if (e.matches) {
        document.getElementById("list").style.display = "flex";
    } else {
        document.getElementById("list").style.display = "none";
        document.getElementById("nav_button").style.backgroundImage =
            "url(../images/icon-hamburger.svg)";
        show = false
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
