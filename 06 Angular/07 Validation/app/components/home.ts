/// <reference path="../../globals.d.ts" />

import {appModule} from "../app";
import {Contact, ContactService} from "../services/ContactService"; PREVENT_REMOVE_IMPORT(ContactService);

class HomeComponent {
    form: ng.IFormController;
    userName: string;
    password: string;

    login() {
        (<any>this.form).email.$setValidity("email", false);

        if(this.form.$invalid) {
            alert("Invalid");
        }
    }
}

appModule.component("home", {
    controller: HomeComponent,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
