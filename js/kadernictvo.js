// SLIDESHOW

var i = 0; // Start point
var images = [];
var time = 5000;

//image list
images[0] = 'img/height-600.jpg';
images[1] = 'img/height-600-2.jpg';
images[2] = 'img/height-600-3.jpg';

// Change image
function changeImg(){
    document.slide.src = images[i];

    if( i < images.length - 1){
        i++;
    }   else {
        i = 0;
    }

    setTimeout('changeImg()', time);

}

window.onload = changeImg;


// MENU

var menu = $('.menu');
var overlay = $('<div/>', { id: 'overlay' });
    overlay.appendTo('body').hide();

    menu.on('click', 'a', function(event) {
    
        var nav = $('.nav')
            overlay.html(nav)
                    .show();
            
                    event.preventDefault();
    });

    overlay.on('click', function() {
        overlay.hide();
    });


// HEADER

var header = $('header');
var win = $(window);

win.on('scroll', function(){
    if ( win.scrollTop() >= 300 ) header.fadeOut(500);
     
    else header.fadeIn(500); 
 });

 // MAIN

 var hreben = $('.hreben');
 var clanok = $('.clanok');
 var boxFirst = $('.box-first');
 var boxSecond = $('.box-second');
 var viewportWidth = $(window).width();


    hreben.hide();
    clanok.hide();
    boxFirst.hide();
    boxSecond.hide();

    win.on('scroll', function(event){
        if ( win.scrollTop() >= 300 ) clanok.fadeIn(800);
         
     });

    win.on('scroll', function(){
        if ( win.scrollTop() >= 600, viewportWidth >= 800 ) hreben.fadeIn(800);
     }); 

     win.on('scroll', function(){
        if ( win.scrollTop() >= 800 ) boxFirst.fadeIn(800);
     }); 

     win.on('scroll', function(){
        if ( win.scrollTop() >= 1200 ) boxSecond.fadeIn(800);
     }); 



