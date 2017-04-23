import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

import { TypesService } from './types.service';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css'],
  providers: [TypesService]
})
export class TypesComponent implements OnInit {
  data = [];
  constructor(private typesService: TypesService, private http: Http) { }

  ngOnInit() {
  }
  
  //POST a type
  postType(event, name, desc) {
  	this.typesService.postType(name, desc);
  }
  //GET types
  getTypes() {
  	this.typesService.getTypes()
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //GET type with Id
  getTypeById(event, typeId) {
  	this.typesService.getTypeById(typeId)
  	  .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //EDIT type by Id
  editTypeById(event, typeId, name, desc) {
  	this.typesService.editTypeById(typeId, name, desc);
  }
  //DELETE type by Id
  deleteTypeById(event, typeId) {
  	this.typesService.deleteTypeById(typeId);
  }
}
