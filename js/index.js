$(document).ready(function(){
    
    $(".clickMyResume").mouseover(function(){
      $(this).animate({  center: '250px',
      opacity: '5.5',
      height: '100px',
      width: '250px',
      fontSize: "50px"},"fast");
      
    });
    });
;
$(".clickMyResume").mouseout(function(){
  $(this).animate({  center: '150px',
  opacity: '5.5',
  height: '50px',
  width: '150px',
  fontSize: "20px"},"fast");
  
});


