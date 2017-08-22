import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import { Observable } from "rxjs/Observable";
import { Command } from "./Models/Command";
import { CommandService } from "./Services/CommandService";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   providers: [CommandService]
})
export class AppComponent implements OnInit {

  constructor(private _httpService: Http,private _service: CommandService) { }

  command: Command;
  newCommand: string;

  ngOnInit() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var body = new Command();
    body.Text = "ls -l";

    this._service.ExecuteCommand(body,headers).subscribe(
      (data) => this.command = data,
      (error) => console.log("Error !")
    );
    
  }

  click() {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var body = new Command();
    body.Text = this.newCommand;

    this._service.ExecuteCommand(body,headers).subscribe(
      (data) => this.command = data,
      (error) => console.log("Error !")
    );

  }

}