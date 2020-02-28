$('.dropdown-menu > a').click(function(){
    $('.dropdown').hide();
    $(this).siblings('ul').slideDown(500);
    $('.dropdown-menu > a').removeClass('active');
    $(this).addClass('active');
});

$('.dropdown').mouseleave(function(){
    $(this).hide(600);
    $('.dropdown-menu > a').removeClass('active');
});
