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

$('#trigger').mouseenter(function(){
    $('#trigger').siblings().fadeTo(50, 0);
});

$('#trigger').mouseleave(function(){
    $('#trigger').siblings().fadeTo(50, 1);
});

// jquery per scelta piani tariffari
$('#trigger').siblings().mouseenter(function(){
    $('#trigger').fadeTo(50, 0);
    $('#trigger').siblings().fadeTo(50, 0);
    $(this).fadeTo(0, 1)
})

$('#trigger').siblings().mouseleave(function(){
    $('#trigger').fadeTo(0, 1);
    $('#trigger').siblings().fadeTo(0, 1);
})
