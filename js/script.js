$(document).ready(function(){
	$("#Calender").accordion({event: "mouseover",
heightStyle: "content", active: 1
                             });
    $("#Calender").accordion("activate", 1);
    
    $('.beta').click(function(){
        $(this).next().children('.test').toggle();
    });
  
    
    });
