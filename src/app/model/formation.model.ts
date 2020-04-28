export class Formation {
  public id: number;
  public  libele: string;
  public date: string;
  public price:number;
  public schooleName: string;
  _links:{
    self:{
      href: string;
    },
    formation:{
      href: string;
    },
    evaluations:{
      href:string;
    },
    formateur:{
      href: string;
    },
    inscriptions: {
    href:string;
   },
    beneficiaires:{
      href:string;
    }
  }
}
