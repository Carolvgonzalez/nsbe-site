$(document).ready(function(){
	$("#Calender").accordion({event: "mouseover",
heightStyle: "content", active: 3
                             });
    $("#Calender").accordion("activate", 3);
    
    $('.beta').click(function(){
        $(this).next().children('.test').toggle();
    });
  
    
    });
