import {appModule} from "../app";

export class ContactService {
    contacts: Contact[];

    constructor(private $http, private $q) {
    }

    getAll() : ng.IPromise<Contact[]> {
        if(this.contacts) {
            return this.$q.when(this.contacts);
        }

        return this.$http.get("contacts.json").then(res => {
            return this.contacts = res.data;
        });
    }
}

export interface Contact {
    id: number;
    name: string;
}

appModule.service("contactService", ContactService);
