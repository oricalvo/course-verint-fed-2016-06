"use strict";
var app_1 = require("../app");
var contact_1 = require("./contact");
PREVENT_REMOVE_IMPORT(contact_1.ContactComponent);
var ContactListComponent = (function () {
    function ContactListComponent($timeout, $scope) {
        var obj = {};
        this.contacts2 = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" }
        ];
        // $scope.$watch(function() {
        //     return obj;
        // }, function() {
        //     window.blabla = 10;
        // });
        // $scope.$on("$destroy", function () {
        //    console.log("DTOR");
        // });
    }
    ContactListComponent.prototype.$onDestroy = function () {
        console.log("DTOR");
    };
    ContactListComponent.prototype.$onChanges = function () {
        console.log("ContactList.$onChanges");
        if (!this.contacts) {
            this.contactsViewModel = null;
            return;
        }
        this.contactsViewModel = this.contacts.map(function (contact) {
            var contactViewModel = {
                id: contact.id,
                name: contact.name,
                email: contact.name + "@gmail.com",
            };
            return contactViewModel;
        });
    };
    ContactListComponent.prototype.change = function () {
        //this.contacts2.push({id:3, name: "Udi"});
        //this.contacts2[0].name = "XXX";
        console.log(this.contacts2);
        this.contacts2 = [
            { "id": 3, "name": "XXX" },
            { "id": 4, "name": "Roni" },
            { "id": 5, "name": "YYY" }
        ];
    };
    return ContactListComponent;
}());
app_1.appModule.component("contactList", {
    //controller: ["$timeout", "$scope", ContactListComponent],
    controller: ContactListComponent,
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    bindings: {}
});
//# sourceMappingURL=contactList.js.map