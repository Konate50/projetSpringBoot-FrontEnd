import {ElementItem} from "./element-Items.model";
import {Beneficiaire} from "./beneficiaire.model";

export class Inscription {
  id:number ;
  public name;
  public items: Map<number,ElementItem> =new Map();
  public beneficiaire:Beneficiaire;
  public addrese:string;
  public email:string;
  public tel:number;
  public elementName:string;
  constructor(name:string) {
    this.name=name;
  }
  links:{
    self:{
      href: string;
    },
    formation:{
      href: string;
    }
  }
}
