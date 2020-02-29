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
// jquery per scelta piani tariffari
$('#trigger').hover(function(){
    $('#trigger').siblings().fadeTo(1, 0);
});

$('#trigger').mouseleave(function(){
    $('#trigger').siblings().fadeTo(1, 1);
});

$('#trigger').siblings().hover(function(){
    $('#trigger').fadeTo(1, 0);
    $('#trigger').siblings().fadeTo(1, 0);
    $(this).fadeTo(1, 1)
})

$('#trigger').siblings().mouseleave(function(){
    $('#trigger').fadeTo(1, 1);
    $('#trigger').siblings().fadeTo(1, 1);
})
