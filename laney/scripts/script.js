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
    } else {
        if(document.documentElement.hasAttribute("theme"))  { 
            document.documentElement.removeAttribute("theme");
        }
    }
}

function toggleTheme() {
    changeTheme(!document.documentElement.hasAttribute("theme"));
}