import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictServiceService {

  constructor() { }
  myFun(){
    alert("This is function service !!!");
  }
}
