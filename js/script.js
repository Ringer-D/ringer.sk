(function($) {


/* -----------------------------------------------------------------------------------------------------------------------------------
LOADING */ 


var header = $('header');
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
    /*setTimeout(function() {
        casovac();
    }, 1500);  */
    
    window.onload = (event) => {
        casovac();
      }; 
 
   /* -----------------------------------------------------------------------------------------------------------------------------------
   SCROLL */
   
   var navigationLinks = $('.scroll');

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


var gallery = $('.ajax');
var overlay = $('<div/>', { id: 'overlay' });
    overlay.appendTo('body').hide();

gallery.on('click','.gall', function(event) {
    
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
    
var navigation = $('.navbar'),
    pulsing = navigation.find('.pulse');

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

/* --------------------------------------------------------------------------------------------------------------------------------------------
AJAX load */ 



$('.ajax-link').on('click', function(event){

     // nechcem ist na podstranku
     event.preventDefault();

    // vytiahnem adresu linku
    var a = $(this),
        li = a.parent(),
        href = a.attr('href');

        // oznacim link na ktory som klikol
        li.addClass('active')
            .siblings().removeClass('active');

    // do elementu nacitam obsah stranky z tohto linku
    $('.ajax').load(href + ' .portf-gallery');


});


// --------------------------------------------------------------------


var ml = $('.ml');

function zmenaMl() {

    var firma = window.prompt('Zadajte názov firmy:');

    if ( firma.toLowerCase() == 'siemens' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_01.pdf');
    }

    else if ( firma.toLowerCase() == 'siemens healthineers' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_01.pdf');
    } 

    else if ( firma.toLowerCase() == 'webex.digital' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_02.pdf');
    }

    else if ( firma.toLowerCase() == 'mi:su design' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_03.pdf');
    }

    else if ( firma.toLowerCase() == 'art design' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_04.pdf');
    }

    else if ( firma.toLowerCase() == 'artdesign' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_04.pdf');
    }

    else if ( firma.toLowerCase() == 'lavacom' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_05.pdf');
    }

    else if ( firma.toLowerCase() == 'sedem' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_06.pdf');
    }

    else if ( firma.toLowerCase() == 'sedem - reklamná agentúra' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_06.pdf');
    }

    else if ( firma.toLowerCase() == 'koger' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_07.pdf');
    }

    else if ( firma.toLowerCase() == 'koger inc.' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_07.pdf');
    }

    else if ( firma.toLowerCase() == 'ness' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_08.pdf');
    }

    else if ( firma.toLowerCase() == 'ness košice' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_08.pdf');
    }

    else if ( firma.toLowerCase() == 'ness ke' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_08.pdf');
    }

    else if ( firma.toLowerCase() == 'globallogic' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_09.pdf');
    }

    else if ( firma.toLowerCase() == 'fpt' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_10.pdf');
    }

    else if ( firma.toLowerCase() == 'fpt slovakia' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_10.pdf');
    }

    else if ( firma.toLowerCase() == 'sudo labs' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_11.pdf');
    }

    else if ( firma.toLowerCase() == 'ringier axel springer' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_12.pdf');
    }

    else if ( firma.toLowerCase() == 'antik telecom' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_13.pdf');
    }

    else if ( firma.toLowerCase() == 'bart.sk' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_14.pdf');
    }

    else if ( firma.toLowerCase() == 'zizzy se' ) {
        ml.attr('href', 'subory/Dusan_Ringer_ML_15.pdf');
    }

    else {
        alert('Zadali ste nesprávny názov firmy !')
    }

};

ml.on('click', function(){
    zmenaMl();
});







}) (jQuery);  



