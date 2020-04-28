export class FormateurModel {
  id:number;
  firstname:string;
  lastname:string;
  email:string;
  addres:string;
  _links:{
    self:{
      href: string;
    },
    formateur:{
      href: string;
    },
    cVFormateur:{
      href: string;
    }
}
}
