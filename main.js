//PRIMO LIVELLO-------

//COMPORTAMENTO QUANDO SI PUNTA IL MOUSE-------

$('.nav-el').mouseenter(function() {
  $(this).children('a').children('h2').addClass('black-text');
});
// $('.nav-el').mouseenter(function() {
//   $(this).children('.drop-elem').slideDown();
// });

//COMPORTAMENTO QUANDO SI TOGLIE IL MOUSE-------

$('.nav-el').mouseleave(function() {
    $(this).children('a').children('h2').removeClass('black-text');//il testo torna bianco
    $(this).children('.drop-elem').slideUp();//se tolgo il mouse dal div che contiene testo, bottone e drop, il drop si chiude
    $(this).removeClass('open');//gli do la classe open, che mi serve per la parte in alto con l if
});

//COMPORTAMENTO AL CLICK-------

// $('.nav-el').click(function() {
//   // $(this).children('.drop-elem').slideUp();
//
// //qua sopra: se preferisco on hover che click
// //qua sotto: se preferisco che si aprano i menu quando si clicca e non quando si va on hover
//
//   if ($(this).hasClass('open')) {//questo if e' per richiudere il menu ricliccando sullo stesso, grazie alla class fittizia 'open' che ho dato.
//     $(this).children('.drop-elem').slideUp();//ovvero: se il menu e' aperto e riclicco, si chiude
//     $(this).removeClass('open');//ovviamente poi la rimuovo dopo il controllo if, se no non mi riapre piu il dropdown
//   } else {
//     $(this).children('.drop-elem').slideDown();//lo faccio comparire con uno slidedown
//     $(this).addClass('open');//gli do la classe open cosi se la ha quando riclicco mi chiude il menu (vedi parte in alto con l if)
//   }
// });

//al posto di questo if posso usare SLIDE TOGGLE

$('.nav-el').click(function() {
  $(this).children('.drop-elem').slideToggle();
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
  if ($(this).children('.drop-elem-ii').hasClass('open')) {//
    $(this).children('.drop-elem-ii').slideUp();
    $(this).children('.drop-elem-ii').removeClass('open');
  } else {
    $(this).children('.drop-elem-ii').slideDown();//mi appare il figlio del drop i su cui e' andato il mouse (ovvero il mio secondo livello di menu drop)
    $(this).children('.drop-elem-ii').addClass('open');//gli do la classe open che mi serve qua sopra
  }
});

$('.drop-i').mouseleave(function() {
    $(this).children('.drop-elem-ii').slideUp();//se il mouse se ne va chiudi
    $(this).children('.drop-elem-ii').removeClass('open');//tolgo open cosi la prossima volta che ci ripasso me lo apre
});
