$(document).ready(function(){
    
    $("#workText").mouseover(function(){
      $(this).animate({fontSize: '60px'});
      $("#workText").mouseout(function(){
        $(this).animate({fontSize: '50px'});
       
    });
  });
});
;


