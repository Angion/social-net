$(function() {
// tabs-info
$('#tabs-info li').click(function(){
    var thisClass = this.className.slice(0,15);
    $('div.tabs-info1').hide();
    $('div.tabs-info2').hide();
    $('div.' + thisClass).fadeIn(500);
    $('#tabs-info li').removeClass('active');
    $(this).addClass('active');
    return false;
    });
$('li.tabs-info1').click();
// tabs-events
$('.tabs-events li').click(function(){
    var thisClass = this.className.slice(0,15);
    $('div.tabs-events1').hide();
    $('div.tabs-events2').hide();
    $('div.' + thisClass).fadeIn(500);
    $('.tabs-events li').removeClass('active');
    $(this).addClass('active');
    return false;
    });
$('li.tabs-events1').click();
});