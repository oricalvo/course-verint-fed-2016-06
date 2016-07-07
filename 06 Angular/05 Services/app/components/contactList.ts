import {appModule} from "../app";
import {Contact} from "../services/ContactService";

class ContactListComponent {
    //
    //  External model
    //
    contacts: Contact[];

    //
    //  Internal model
    //
    contactsViewModel: ContactViewModel[];

    constructor($timeout, $scope) {
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

    $onDestroy() {
        console.log("DTOR");
    }

    $onChanges() {
        console.log("ContactList.$onChanges");

        if(!this.contacts) {
            this.contactsViewModel = null;
            return;
        }

        this.contactsViewModel = this.contacts.map(contact => {
            var contactViewModel: ContactViewModel = {
                id: contact.id,
                name: contact.name,
                email: contact.name + "@gmail.com",
            };

            return contactViewModel;
        });
    }
}

interface ContactViewModel {
    id: number;
    name: string;
    email: string;
}

appModule.component("contactList", {
    //controller: ["$timeout", "$scope", ContactListComponent],
    controller: ContactListComponent,
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    bindings: {
        contacts: "<"
    }
});
