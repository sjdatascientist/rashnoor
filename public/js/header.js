$(document).ready(function () {
// Get current path from URL
var currentPath = window.location.pathname;

// Loop through all nav links
$('nav ul li a').each(function () {
    var linkPath = $(this).attr('href');

    // If the href matches the current path
    if (linkPath === currentPath) {
    $(this).css('color', '#DD9726'); // Apply yellow color
    }
});
});

document.getElementById("header-logo").addEventListener('click', function () {
    window.location.href = window.location.origin
})

const menuBtn = document.getElementsByTagName("box-icon")[0];
menuBtn.style.zIndex = 99
const nav = document.getElementsByTagName("nav")[0];


if (window.innerWidth > 620) {
    menuBtn.style.display = "none";
}
else {
    menuBtn.style.display = "block";
    nav.classList.add('hide-mobile-nav')
}

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("hide-mobile-nav");
    if (menuBtn.getAttribute('name') == "menu-alt-right") {
        menuBtn.setAttribute("name", 'x')
    }
    else if (menuBtn.getAttribute("name") == 'x') {
        menuBtn.setAttribute("name", "menu-alt-right")
    }
})