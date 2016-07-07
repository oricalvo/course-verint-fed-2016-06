"use strict";
var app_1 = require("./app");
var ContactDetailsController = (function () {
    function ContactDetailsController() {
    }
    return ContactDetailsController;
}());
app_1.appModule.component("contactDetails", {
    template: require("./contactDetails.html!text"),
    controller: ContactDetailsController,
    styles: require("./contactDetails.css!css"),
    bindings: {
        "contact": "<",
    }
});
//# sourceMappingURL=contactDetails.js.map