function addLoadEvent(func) {
    //alert("12345!");
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}


function showMenu(sort) {
    var menu = sort.children[1];
    menu.style.display = "block";
}

function hideMenu(sort) {
    var menu = sort.children[1];
    menu.style.display = "none";
}

function menu() {
    menuDiv = document.getElementById("menu2");
    menu = menuDiv.children;
    sort = menu[0].children;
    for (var i = 0; i < sort.length - 4; i = i + 2) {
        sort[i].onmouseover = function() {
            return showMenu(this);
        }
        sort[i].onmouseout = function() {
            return hideMenu(this);
        }
    }

}

addLoadEvent(menu);