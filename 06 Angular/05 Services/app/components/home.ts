/// <reference path="../../globals.d.ts" />

import {appModule} from "../app";
import * as clock from "./clock"; PREVENT_REMOVE_IMPORT(clock);
import * as contactList from "./contactList"; PREVENT_REMOVE_IMPORT(contactList);
import {Contact, ContactService} from "../services/ContactService"; PREVENT_REMOVE_IMPORT(ContactService);

class HomeComponent {
    clockFormat: string;
    contacts: Contact[];

    constructor(contactService: ContactService, $scope) {
        this.clockFormat = "ss";

        contactService.getAll().then(contacts => {
            this.contacts = contacts;
        });
    }

    changeClock() {
        this.clockFormat = "mm:ss";
    }
    
    changeContact() {
        var newContacts = this.contacts.concat([]);
        newContacts[0].name = "XXX";
        this.contacts = newContacts;
    }
}

appModule.component("home", {
    controller: HomeComponent,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
