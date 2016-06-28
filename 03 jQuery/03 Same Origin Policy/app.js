(function(){
    "use strict";
    
    var button = $("#buttonGetData");
    button.click(function(){
        $.ajax({
           type: "GET",
            url: "http://localhost:12345/contacts.json",
            success: function(contacts){
                console.log("OK");
                console.log(contacts);
            },
            error: function(){
                console.log("ERROR");
            }
        });
    });
    
})();
