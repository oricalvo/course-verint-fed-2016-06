import {appModule} from "../app";
import {Contact} from "../services/ContactService";

export class ContactComponent {
    contact: Contact;

    constructor($scope) {
        console.log("ContactComponent ctor: " + this.contact.name);
    }

    $onDestroy() {
        console.log("ContactComponent dtor: " + this.contact.name);
    }

    $onChanges() {
        console.log("ContactComponent.$onChanges", arguments);
    }
}

appModule.component("contact", {
    controller: ContactComponent,
    template: require("./contact.html!text"),
    styles: require("./contact.css!css"),
    bindings: {
        contact: "<"
    }
});
