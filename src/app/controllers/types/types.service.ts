import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class TypesService {

  constructor(private http: Http) { }

  //POST a type
  postType(name, desc) {
    let body = JSON.stringify({name, desc});
    this.http.post(url+'types', body, {headers: contentHeaders});
  }
  //GET types
  getTypes() {
    return this.http.get(url+'types')
      .map((res: Response) => res.json());
  }

  //GET type with Id
  getTypeById(typeId) {
    return this.http.get(url+'types/'+typeId)
      .map((res: Response) => res.json());
  }
  //PUT type by Id
  editTypeById(typeId, name, desc) {
    let body = JSON.stringify({name, desc});
    this.http.put(url+'types/'+typeId, body, {headers: contentHeaders});
  }
  //DELETE type by Id
  deleteTypeById(typeId) {
    this.http.delete(url+'types/'+typeId);
  }
}