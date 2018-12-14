import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editedId: string;
  editedName: any;
  errorMsg: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.editedId = params.id;
      let obsv = this._http.getOne(this.editedId);
      obsv.subscribe(data => {
        this.editedName = data.name;
      })
    })
  }

  updateAuthor(){
    var jsonToSend = {name: this.editedName}
    let obsv = this._http.editOne(this.editedId, jsonToSend);
    obsv.subscribe(data => {
      console.log("USER NAME WAS CHANGED TO :", data);
      this._router.navigate(['/']);
    })
  }

}
