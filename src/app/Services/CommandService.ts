import { Command } from "../Models/Command";
import { Http, Headers } from '@angular/http'
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CommandService {

    constructor(private _httpService: Http) { }

    public ExecuteCommand(body:Command,headers:Headers) : Observable<Command> {
        console.log('execute '+ body.Text);
        var command:Command;
        return this._httpService.post('/api/commands', JSON.stringify(body),{headers:headers})
                .map((res:any) => res.json() as Command);
    }

}