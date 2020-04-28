export class Cv {
  public id: number;
  public name: string;
  public addrese: string;
  public experiences: string;
  public competences: string;
  public tel: number;
  public langue: string;
  public divers: string;
  _links: {
    Formateur: {
      href: string;
    }
  }
}
