$('#root li:first-child').hide().show(1000);
$('#root li:nth-child(2)').hide().show(1500);
$('#root li:nth-child(3)').hide().show(2000);
$('#root li:nth-child(4)').hide().show(2500);
$('#root li:nth-child(5)').hide().show(3000)
$('.gallery-set').hide().slideDown(2000);
$('#root li:nth-child(5)').on('hover', function() {
    $('root li:nth-child(5)').animate({ top:1000 },3000);});

