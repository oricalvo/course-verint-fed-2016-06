"use strict";
var app_1 = require("../app");
var ContactComponent = (function () {
    function ContactComponent($scope) {
        console.log("ContactComponent ctor: " + this.contact.name);
    }
    ContactComponent.prototype.$onDestroy = function () {
        console.log("ContactComponent dtor: " + this.contact.name);
    };
    ContactComponent.prototype.$onChanges = function () {
        console.log("ContactComponent.$onChanges", arguments);
    };
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
app_1.appModule.component("contact", {
    controller: ContactComponent,
    template: require("./contact.html!text"),
    styles: require("./contact.css!css"),
    bindings: {
        contact: "<"
    }
});
//# sourceMappingURL=contact.js.map