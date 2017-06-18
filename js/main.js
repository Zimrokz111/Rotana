// Author's Js..

//Post Slider Js
$(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
      });
     
});

//Animate Js

new WOW().init();

//Bootstrap Nav

$('.navbar-default .navbar-nav > li.dropdown').hover(
    function() {
      $('ul.dropdown-menu', this).stop(true, true).fadeIn('slow');
      $(this).addClass('open');
    }, function() {   
      $('ul.dropdown-menu', this).stop(true, true).fadeOut('slow');
      $(this).removeClass('open');
    }
);

//Video Background Js

$('#my-video').backgroundVideo();

//Progress Bar



















