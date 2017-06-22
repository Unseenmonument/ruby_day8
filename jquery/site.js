// $('#circle').click(function(){
// 	alert('Clicked!'); 

// });

// _________________________________

// $('#circle').hover(function(){
// 	$("p").html("We've changed the text"); 

// });

// _________________________________

// $('#circle').hover(function(){
// 	$("img").attr("src", "https://emojipedia-us.s3.amazonaws.com/social/dog-face.png"); 

// });;

// _________________________________

$('.square').click(function() {
  $(this).css('background-color', 'blue');
  });

// _________________________________


$('.square').hover(function() {
  $(this).css('width', '400px');
  })

$(function() {
  $('#draggable').draggable();
  })

$(function() {
  $('#circle').draggable();
  })

$(function() {
  $('#square1').resizable();
  })

$(function() {
  $('#sortable').sortable();
  })