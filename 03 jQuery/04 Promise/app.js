(function(){
    "use strict";
    
    var button = $("#buttonGetData");

    var BL = {
        getContacts: function(){
            return DAL.getContacts().then(function(name){
                return name + "XXX";
            });
        },
    };

    var DAL = {
        getContacts: function getContacts() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve("Ori");
                    //reject(new Error("Ooops"));
                }, 1500);
            });
        }
    };

    BL.getContacts().then(function(name) {
        console.log(name);
    }).catch(function(err){
        console.log("ERROR: " + err.message)
    });

    // var Presentation = {
    //     refreshContacts: function(){
    //         BL.getContacts().then(function(contacts){
    //             updateView();
    //         }).catch(function(){
    //             displayError();
    //         });
    //     }
    // };
    //
    // var BL = {
    //     getContacts: function(){
    //         return DAL.getContacts().then(this.tran);
    //     },
    //     tran: function(contacts){
    //         return contacts;
    //     }
    // }
    //
    // var DAL = {
    //     getContacts: function(){
    //         return $.ajax({
    //             type: "GET",
    //             url: "/contacts.json",
    //         });
    //     }
    // }

    // var BL = {
    //     getContacts: function(success, error){
    //         DAL.getContacts(function(dalContacts){
    //             try {
    //                 success(trans(dalContacts));
    //             }catch (err){
    //                 if(error){
    //                     error(err);
    //                 }
    //             }
    //         }, function(err){
    //             if(error) {
    //                 error(err);
    //             }
    //         });
    //     },
    //     trans: function(dalContacts){
    //         return dalContacts.map(function(contact){
    //            return contact;
    //         });
    //     }
    // }
    //
    // var DAL = {
    //     getContacts: function(success, error){
    //         $.ajax({
    //             type: "GET",
    //             url: "http://localhost:12345/contacts.json",
    //             success: success,
    //             error: error,
    //         });
    //     }
    // };

    button.click(function(){

    });
    
})();
