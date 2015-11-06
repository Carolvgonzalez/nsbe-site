$(document).ready(function(){
	$("#Calender").accordion({event: "mouseover",
heightStyle: "content", active: 2
                             });
    $("#Calender").accordion("activate", 2);
    
    $('.beta').click(function(){
        $(this).next().children('.test').toggle();
    });
  
    
    });
