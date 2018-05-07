import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from './auth';

import { Client } from './../models/client.model';

@Injectable()
export class ClientService {
    private clients: Client[] = [];

    constructor(private http: Http, private authService: AuthService) {
    }

    addClient(firstName: string,
        lastName: string,
        gender: string,
        address: string,
        uploadDocs: string,
        email: string,
        phoneNo: number) {

        this.clients.push(new Client(firstName,
            lastName,
            gender,
            address,
            uploadDocs,
            email,
            phoneNo));

        console.log(this.clients);

    }

    addClients(items: Client[]) {
        //if the input is a list of items, then ...items will do the job.
        this.clients.push(...items);

    }

    getClients() {
        return this.clients.slice();
    }

    removeClient(index: number){
        this.clients.splice(index, 1);
    }

    storeClients(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http
            .put('https://idebtbook.firebaseio.com/' + userId + '/clients.json?auth=' + token, this.clients)
        .map((response: Response) => {
            return response.json();
        });
    }

}