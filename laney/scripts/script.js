var colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
colorSchemeQueryList.onchange = function(z) {
    changeTheme(z.matches);
}

document.addEventListener("DOMContentLoaded", function() {
    changeTheme(colorSchemeQueryList.matches);
});

function changeTheme(dark) {
    if (dark) {
        document.documentElement.setAttribute("theme", "dark");
        document.getElementById("screenshot").href.baseVal = "assets/screen_dark_1.14.png";
    } else {
        if(document.documentElement.hasAttribute("theme"))  { 
            document.documentElement.removeAttribute("theme"); 
            document.getElementById("screenshot").href.baseVal = "assets/screen_light_1.14.png";
        }
    }
}

function toggleTheme() {
    changeTheme(!document.documentElement.hasAttribute("theme"));
}