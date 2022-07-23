$(document).ready(function(){
    
    $(".clickMyResume").mouseover(function(){
      $(this).animate({width: "560px", height:"500px",fontSize:"100px"});
      $(".ClickMyResume").mouseout(function(){
        $(this).animate({width: "260px", height:"50px"});
       
    });
  });
});
;


