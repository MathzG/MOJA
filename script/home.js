$(document).ready(function() {
    $('.sidenav').sidenav({
        draggable: true,

    });
    $('.carousel').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 150,
        
    });
    // CAROUSEL


    autoplay()

   /* $(document).scroll(function(){
        var windowTop = $(window).scrollTop();
        if(windowTop>50){
            $('#nav').addClass('efect-nav');
        }
        else{
            $('#nav').removeClass('efect-nav');
        }
    })*/






});



function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}