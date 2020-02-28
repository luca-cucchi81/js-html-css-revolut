$('.dropdown-menu > a').click(function(){
    $('.dropdown').hide();
    $(this).siblings('ul').show(500);
    $(this).addClass('active');
});

$('.dropdown').mouseleave(function(){
    $(this).hide(500);
    $('.dropdown-menu > a').removeClass('active');
});
