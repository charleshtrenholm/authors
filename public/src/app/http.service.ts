import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll(){
    return this._http.get('/api/authors');
  }

  getOne(id){
    console.log("WE ARE IN GETONE", id);
    return this._http.get('/api/authors/'+id);
  }

  postData(data){
    console.log("THIS IS THE DATA, ")
    return this._http.post('/api/authors', data);
  }

  editOne(id, data){
    return this._http.put('/api/authors/'+id, data)
  }

  delete(id){
    return this._http.delete('/api/authors/'+id)
  }

}
