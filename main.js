//PRIMO LIVELLO-------

//COMPORTAMENTO QUANDO SI PUNTA IL MOUSE-------

$('.nav-el').mouseenter(function() {
  $(this).children('a').children('h2').addClass('black-text');
});
$('.nav-el').mouseenter(function() {
  $(this).children('.drop-elem').slideDown();
});

//COMPORTAMENTO QUANDO SI TOGLIE IL MOUSE-------

$('.nav-el').mouseleave(function() {
  if ($(this).hasClass('open')) {//se ha la classe open e me ne vado via col mouse, chiude il dropdown (molto simile al comportamento al secondo click)
    $(this).children('.drop-elem').slideUp();
    $(this).removeClass('open');//ovviamente la devo rimuovere per permettere di riaprirlo successivamente
    $(this).children('a').children('h2').removeClass('black-text');//il testo torna bianco
  } else {
  $(this).children('a').children('h2').removeClass('black-text');//il testo torna bianco
  $(this).children('.drop-elem').slideUp();//se tolgo il mouse dal div che contiene testo, bottone e drop, il drop si chiude
  $(this).removeClass('open');//gli do la classe open, che mi serve per la parte in alto con l if
  }
});

//COMPORTAMENTO AL CLICK-------

$('.nav-el').click(function() {
  $(this).children('.drop-elem').slideUp();

  // if ($(this).hasClass('open')) {//questo if e' per richiudere il menu ricliccando sullo stesso, grazie alla class fittizia 'open' che ho dato.
  //   $(this).children('.drop-elem').slideUp();//ovvero: se il menu e' aperto e riclicco, si chiude
  //   $(this).removeClass('open');//ovviamente poi la rimuovo dopo il controllo if, se no non mi riapre piu il dropdown
  // } else {
  //   $(this).children('.drop-elem').slideDown();//lo faccio comparire con uno slidedown
  //   $(this).addClass('open');//gli do la classe open cosi se la ha quando riclicco mi chiude il menu (vedi parte in alto con l if)
  // }
});

//-------------------------------------------------
//SECONDO LIVELLO--------------

$('.drop-elem-i').mouseenter(function() {
  $(this).children('a').children('h2').addClass('black-text');
  $(this).children('a').children('h2').children('i').addClass('black-text');
});
$('.drop-elem-i').mouseleave(function() {
  $(this).children('a').children('h2').removeClass('black-text');
  $(this).children('a').children('h2').children('i').addClass('black-text');
});

//fin qui serve per i colori del testo e freccette in hover

$('.drop-i').mouseenter(function() {
  if ($(this).children('.drop-elem-ii').hasClass('open')) {
    $(this).children('.drop-elem-ii').slideUp();
    $(this).children('.drop-elem-ii').removeClass('open');

  } else {
    $(this).children('.drop-elem-ii').slideDown();
    $(this).children('.drop-elem-ii').addClass('open');
  }
});

$('.drop-i').mouseleave(function() {
    $(this).children('.drop-elem-ii').slideUp();
    $(this).children('.drop-elem-ii').removeClass('open');
});
