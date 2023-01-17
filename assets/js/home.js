jQuery( document ).ready( function($){

    /**
     *Nav Bar 
     */

    $(window).on('scroll', function(){
        
        if( $(document).scrollTop() > 0 )
        {
            $('#main-navbar').addClass('nav-scroll-bg shadow');
            $('#main-navbar .nav-link').addClass('nav-link-grey');
        }

        if( $(document).scrollTop() == 0 )
        {
            $('#main-navbar').removeClass('nav-scroll-bg shadow');
            $('#main-navbar .nav-link').removeClass('nav-link-grey');

            if( $(window).width() > 991 ){
                $('#main-navbar').css( {'width':'calc(100% - 88px)'});
            }
        }
    });

    /**
     * Best Sellers
     */

    $('#owl-carousel-bestsellers').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    /**
     * Category Menu
     */

    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
    });

    /**
     * Testimonials
     */

    $('#owl-carousel-testimonials').owlCarousel({
        items:1,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayHoverPause:true
    })

    $('[data-target="#modal-testimonials"]').on( 'click', function(){
        
        let track = $(this).attr('track');

        switch ( track ) {
            case "1":
                $('#video-testimonials').attr('src', './assets/videos/testimonial-1.mp4');
              break;
            case "2":
                $('#video-testimonials').attr('src', './assets/videos/testimonial-2.mp4');
              break;
        }
    });
});