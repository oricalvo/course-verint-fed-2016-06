"use strict";
var app_1 = require("../app");
var ContactListComponent = (function () {
    function ContactListComponent($timeout, $scope) {
        var obj = {};
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
    return ContactListComponent;
}());
app_1.appModule.component("contactList", {
    //controller: ["$timeout", "$scope", ContactListComponent],
    controller: ContactListComponent,
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    bindings: {
        contacts: "<"
    }
});
//# sourceMappingURL=contactList.js.map