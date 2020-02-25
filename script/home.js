$(document).ready(function() {
    $('.sidenav').sidenav({
        draggable: true,

    });
    $('.carousel').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 100,
    });
    // CAROUSEL


    autoplay()






});



function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}