export class AlerteMessageModel {
  id: number;
  message: string;
  confirm:boolean;
  _links: {
    self: {
      href: string;
    },
    formateur: {
      href: string;
    }
  }
}
