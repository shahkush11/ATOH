$(function(){
  $('#picture').hover(
      function(){
          $(this).css('background-Color','red');
          $(this).animate({height: "-=100px",width: "+=100px"},200);
      });
  $('#rounded-rectangle').click(
      function(){
          $('#rounded-rectangle').fadeOut(200);
      });
});