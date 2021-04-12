$(document).ready(function(){
  $('.open').click(function() {
    $('.nav1').css('left',"0px");
    $('.nav1').css('borderRadius',"0px 10px 0px 0px");
  
    $('.open').fadeOut(function () { 
      $('.close').fadeIn(500);
  
    });
  
    $('.close').click(function () { 
      $('.open').fadeIn();
      $('.nav1').css('left',"-50px");
      $('.close').hide();
  
  
      });
      
    });
});


document.getElementById("w3s").accessKey = "enter";
