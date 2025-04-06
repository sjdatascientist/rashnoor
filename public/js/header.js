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