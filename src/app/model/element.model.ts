import {Inscription} from "./inscription.model";
import {Beneficiaire} from "./beneficiaire.model";
import {ElementItem} from "./element-Items.model";

export class ElementModel {
  public id:number;
  public objectif:string;
  public schooleName:string;
  public numberPlace:string;
  public duree:string;
  public description:string;
  public name:string;
  public selected:boolean;
  public price:number;
  public time:string;

  _links: {
    format: {
      href: string;
    }
  }
}
