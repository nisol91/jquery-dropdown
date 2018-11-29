$('.nav-el').mouseenter(function() {
  $(this).children('a').children('h2').addClass('black-text');
});
$('.nav-el').mouseleave(function() {
  $(this).children('a').children('h2').removeClass('black-text');
});

$('.nav-el').click(function() {
  $('.nav-el').removeClass('bianco');
  $(this).addClass('bianco');
  $(this).children('a').children('h2').addClass('black-text');
  if (true) {
    $(this).children('.drop-elem').slideDown();
  }

});
