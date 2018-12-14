import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newName: string;
  errorMsg: string;

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.newName = '';
    this.errorMsg = null
  }

  addNewAuthor(){
    var d = {name: this.newName};
    var observable = this._http.postData(d);
    observable.subscribe(data => {
      console.log("GOT THAT DATA////////>", data);
      if(data['err']){
        console.log("THERES AN ERROR", data['err'].errors.name.message);
        this.errorMsg = data['err'].errors.name.message;
      } else {
      this._router.navigate(['/']);
      }
    })
  }


}
