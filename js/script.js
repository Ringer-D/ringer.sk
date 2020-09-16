(function($) {


/* -----------------------------------------------------------------------------------------------------------------------------------
LOADING */ 


/*var header = $('header');
var main = $('main');
var footer = $('footer');
var loading = $('.loading');

function casovac() {
    loading.addClass('hide');
    header.show();
    main.show();
    footer.show();
};

    loading.removeClass('hide');
    header.hide();
    main.hide(); 
    footer.hide();
    setTimeout(function() {
        casovac();
    }, 1500);  
    
    /* window.onload = (event) => {
        casovac();
      }; 
 
   /* -----------------------------------------------------------------------------------------------------------------------------------
   SCROLL */
   
   var navigation = $('.navbar'),
        navigationLinks = navigation.find('a');

    navigationLinks.on('click', function(event) {

        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);

        event.preventDefault();
    });

/* -------------------------------------------------------------------------------------------------------------------------------------------
BACK TO TOP */



var backToTop = $('<a>', {
                    href: '#home',
                    class: 'back-to-top',
                    html: '<i class="fa fa-caret-up fa-5x"></i>'
                });

backToTop
    .hide() 
    .appendTo('body')
    .on('click', function(){
        $('body').animate({ scrollTop: 0 }, 1000);
    });

var win = $(window);
win.on('scroll', function(){
   if ( win.scrollTop() >= 500 ) backToTop.fadeIn(500);
    else backToTop.hide(); 
}); 
    
/* ----------------------------------------------------------------------------------------------------------------------------------------
CLICK HERE */

var clickArrow = $('.fa-arrow-up');
var clickText = $('.click');
var clickDiv = $('.click-div');
var button = $('.navbar-toggler');

clickDiv.removeClass('hide');
win.on('scroll', function(){
    if ( win.scrollTop() >= 200 ) clickArrow,
                                    clickText.fadeOut(500);
     else clickArrow,
            clickText.fadeIn(500); 
 }); 

setTimeout(function() {
    clickDiv.fadeOut(500);
            
}, 5000);




button.on('click', function(){
    clickDiv.addClass('hide');
});



/* ---------------------------------------------------------------------------------------------------------------------------------
LIGHTBOX */


var gallery = $('.gallery');
var overlay = $('<div/>', { id: 'overlay' });
    overlay.appendTo('body').hide();


gallery.find('a').on('click', function(event) {
    
    var href = $(this).attr('href'),
        image = $('<img>', { src: href, alt: 'ringer' });
        overlay.html(image)
                .show();
        
                event.preventDefault();
});

overlay.on('click', function() {
    overlay.hide();
});


/*----------------------------------------------------------------------------------------------------------------------------------------
PULSOVANIE  */
    
var pulsing = navigation.find('.pulse');

function pulse() {
    pulsing.on('focusin', function(){
        pulsing.removeClass(' animate__repeat-3 '),
        pulsing.addClass(' animate__infinite '),

        pulsing.on('focusout', function(){
            pulsing.removeClass(' animate__infinite ')
        });

    }),
    
    
    pulsing.on('mouseenter', function(){
        pulsing.removeClass(' animate__repeat-3 '),
        pulsing.addClass(' animate__infinite '),
            
        pulsing.on('mouseleave', function(){
            pulsing.removeClass(' animate__infinite ')
        });

    });
};

pulse();





}) (jQuery);  



