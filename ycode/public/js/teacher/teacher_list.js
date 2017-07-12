define(['jquery','template'], function($, template) {
    $.ajax({
        url:"/api/teacher",
        type:"get",
        success:function(data){
           console.log(data);         
           console.log("1213");         
       }
    })
    
});