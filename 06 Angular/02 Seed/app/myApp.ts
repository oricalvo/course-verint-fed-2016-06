import {appModule} from "./app";

declare var angular;
declare var require;

class MyAppController {
    constructor(){
    }
}

appModule.component("myApp", {
    template: require("./myApp.html!text"),
    controller: MyAppController,
    styles: require("./myApp.css!css"),
});
