"use strict";
var app_1 = require("../app");
var ClockComponent = (function () {
    function ClockComponent($interval) {
        var _this = this;
        this.time = new Date();
        this.format = this.format || 'HH:mm:ss';
        $interval(function () {
            _this.time = new Date();
        }, 1000);
    }
    return ClockComponent;
}());
app_1.appModule.component("clock", {
    controller: ClockComponent,
    template: require("./clock.html!text"),
    styles: require("./clock.css!css"),
    bindings: {
        format: "<",
    }
});
//# sourceMappingURL=clock.js.map