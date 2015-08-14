



//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Input Lock
$('textarea').blur(function () {

    $('#mycontactform textarea').each(function () {

        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {

          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#mycontactform .field:first-child input').blur(function () {
    $('#mycontactform .field:first-child input').each(function () {

        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#mycontactform .field:nth-child(2) input').blur(function () {
    $('#mycontactform .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span ').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span ').css({'opacity': 0});
        }
    });
});




$( function(){

    function fn_AddFocus(){
        $('input[type=text]').addClass('focused');
        $('textarea').addClass('focused');

    }

    function fn_RemoveFocus(){
        $('input[type=text]').removeClass('focused');
        $('textarea').removeClass('focused');

    }

     $( window ).resize(function() {
        if(window.matchMedia('(max-width: 767px)').matches){
            fn_AddFocus();
        } else {
            fn_RemoveFocus();
        }
    });
     
      if(window.matchMedia('(max-width: 767px)').matches){
            fn_AddFocus();
        } else {
            fn_RemoveFocus();
        }

});


$(function(){
    
    $('.MyZoom').waypoint(function(){$(this).addClass('animated zoomIn'); $(this).removeClass('visibilityoff'); },{offset:'100%'});
    $('.MyFadeLeft').waypoint(function(){$(this).addClass('animated fadeInLeft'); $(this).removeClass('visibilityoff'); },{offset:'100%'});
    $('.MyFadeRight').waypoint(function(){$(this).addClass('animated fadeInRight'); $(this).removeClass('visibilityoff'); },{offset:'100%'});
    $('.MyFadeUp').waypoint(function(){$(this).addClass('animated fadeInUp');},{offset:'100%'});
    $('.MyFadeDown').waypoint(function(){$(this).addClass('animated fadeInDown');},{offset:'100%'});
    $('.MyRubberBand').waypoint(function(){$(this).addClass('animated rubberBand');},{offset:'100%'});
    $('.MyBounceIn').waypoint(function(){$(this).addClass('animated bounceIn'); $(this).removeClass('visibilityoff'); },{offset:'100%'}); 
    $('.MyBounceInUp').waypoint(function(){$(this).toggleClass('animated bounceInUp');},{offset:'100%'}); 

    // $('.MyVisibilityOff').waypoint(function(){$(this).removeClass('visibilityoff');},{offset:'100%'}); 
   
   
});


    

  