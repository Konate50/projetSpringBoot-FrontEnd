import { Injectable } from '@angular/core';
import {Inscription} from "../model/inscription.model";
import {ElementItem} from "../model/element-Items.model";
import {ElementModel} from "../model/element.model";

@Injectable({
  providedIn: 'root'
})
export class ElementService {

 // currentInscrittName:string="element1";
  //private inscrits:Map<string,Inscription> =new Map();
  private elem:ElementModel;

  constructor() {
    /*let ins=new Inscription(this.currentInscrittName);
    this.inscrits.set(this.currentInscrittName,ins);*/
  }

/*  public addElementToInscrit(element:ElementModel):void{
    let inscrit=this.inscrits.get(this.currentInscrittName);
    let elementItem:ElementItem=inscrit.items.get(element.id)
    if (elementItem){
        elementItem.price=element.price;
    }else {
      elementItem = new ElementItem();
      elementItem.price=element.price;
      elementItem.nbreElement=element.id;
      elementItem.element=element;
      inscrit.items.set(element.id,elementItem);
    }*/


}
