$(document).ready(function(){
	$("#Calender").accordion({event: "mouseover",
                             heightStyle: "content"});
    
    $('.beta').click(function(){
        $(this).next().children('.test').toggle();
    });
  
    
 /*   $('.beta').click(function(){
        $('.test').hide();
    });
    
    $('.beta').click(function(){
        $('.test').show();
    });  */
    
    });
