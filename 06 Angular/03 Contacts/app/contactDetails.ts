import {appModule} from "./app";

declare var angular;
declare var require;

class ContactDetailsController {
    constructor(){
    }
}

appModule.component("contactDetails", {
    template: require("./contactDetails.html!text"),
    controller: ContactDetailsController,
    styles: require("./contactDetails.css!css"),
    bindings: {
        "contact": "<",
    }
});
