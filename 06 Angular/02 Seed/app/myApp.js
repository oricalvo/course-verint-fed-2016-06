"use strict";
var app_1 = require("./app");
var MyAppController = (function () {
    function MyAppController() {
    }
    return MyAppController;
}());
app_1.appModule.component("myApp", {
    template: require("./myApp.html!text"),
    controller: MyAppController,
    styles: require("./myApp.css!css"),
});
//# sourceMappingURL=myApp.js.map