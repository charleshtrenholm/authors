import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allNames: any;

  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    this.getAllNames();
  }

  getAllNames(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.allNames = data;
      console.log("GOT THAT BIG NASTY DATA WORM::::::>", this.allNames);

    })
  }

  deleteAuthor(id){
    let obsv = this._httpService.delete(id);
    obsv.subscribe(dada => {
      this.getAllNames();
    })
  }

}
