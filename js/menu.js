$(function () {


    //HEADER
    $(window).scroll(function () {
        if ((window.screen.availWidth > 1024 && $(this).scrollTop() > 160)) {


            if (!$('.navegacao').hasClass('fixed')) {
                
                $('.navegacao' ).stop().addClass('fixed').css('top', '-100px').animate(
                    
                    {
                        'top': '0px'
                    }, 400);
                    
                    
            }

        }
        else if (window.screen.availWidth < 1024) {

            if (!$('.navegacao').hasClass('fixed')) {
                $('.navegacao').stop().addClass('fixed').css('bottom', '-100px').animate(
                    {
                        'bottom': '0px'
                    }, 400);
            }
        }
        else {
            $('.navegacao').removeClass('fixed');
        }

    });


});
