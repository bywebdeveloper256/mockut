jQuery( document ).ready( function($){
    /**
     *Nav Bar 
     */

    $(window).on('scroll', function(){
        
        if( $(document).scrollTop() > 0 )
        {
            $('#secundary-navbar').addClass('nav-scroll-bg shadow');
            $('#secundary-navbar .nav-link').addClass('nav-link-grey');
            $('#logo-navbar').addClass( 'nav-logo-scroll');
        }

        if( $(document).scrollTop() == 0 )
        {
            $('#secundary-navbar').removeClass('nav-scroll-bg shadow');
            $('#secundary-navbar .nav-link').removeClass('nav-link-grey');
            $('#logo-navbar').removeClass( 'nav-logo-scroll');
        }
    });

    /**
     * Acoordeon FAQ
     */
    $('.collapse').css('transition', '1s');

    /**
     * MENUS SCROLL
     */

     $(".ancla").click(function(event) {
        event.preventDefault();
          
        window.location = 'menu.html' + $(this).attr("href");

        var posicion = $($(this).attr("href")).offset().top;
      
        console.log(posicion);
        $("body, html").animate({
          scrollTop: posicion - 126
        });
      });
});