(function(){
    "use strict";
    
    var button = $("#buttonGetData");
    button.click(function(){
        $.ajax({
           type: "GET",
            url: BASE_URL + "/contacts.json",
            success: function(contacts){
                console.log("OK");
                console.log(contacts);
            },
            error: function(){
                console.log("ERROR");
            }
        });
    });

    $("#buttonSendData").click(function(){
        var name =  $("input").val();

        var contact = {
            id: 1,
            name: "Beni",
        };

        $.ajax({
            type: "POST",
            url: BASE_URL + "/contacts.json",
            data: JSON.stringify(contact),
            contentType: "application/json",
            success: function(){
                console.log("OK");
            },
            error: function(){
                console.log("ERROR");
            }
        });

        console.log("ddd");

    });
})();
