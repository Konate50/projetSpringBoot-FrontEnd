import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formation} from "../model/formation.model";
import {Cv} from "../model/cv.model";
import {Inscription} from "../model/inscription.model";
import {ElementModel} from "../model/element.model";
import {EvaluateModel} from "../model/evaluate.model";
import {AlerteMessageModel} from "../model/alerte-message.model";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  public host: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  // recuperer les donnes depuis url
  public getFormations(page: number, size: number) {
    return this.httpClient.get(this.host + '/formations?page=' + page + '&size=' + size);
  }
  // recuperer les donnees depuis url
  public getAleteMessages(page: number, size: number) {
    return this.httpClient.get(this.host + '/alerteMessages?page=' + page + '&size=' + size);
  }
  public getResource(url){//yes
    return this.httpClient.get(this.host +url);
}
  public getResourceEdit(url): Observable<Formation> {
    // @ts-ignore
    return this.httpClient.get<Formation>(url);
  }
  public getElements(page: number, size: number) {
    return this.httpClient.get(this.host + '/elementForms?page=' + page + '&size=' + size);
  }

  public getPlans(page: number, size: number) {
    return this.httpClient.get(this.host + '/cVFormateurs?page=' + page + '&size=' + size);
  }
  public getFormateurs(page: number, size: number) {
    return this.httpClient.get(this.host + '/formateurs?page=' + page + '&size=' + size);
  }
  public getInscrits(page: number, size: number) {
    return this.httpClient.get(this.host + '/inscriptions?page=' + page + '&size=' + size);
  }
  public getFormByKeywork(mc:string,page: number, size: number) {
    return this.httpClient.get(this.host + '/formations/search/byFormationPage?mc='+mc+'&page=' + page + '&size=' + size);
  }

  // applicable dans tous les methodes
  public saveResource(url, data): Observable<Formation> {
    // @ts-ignore
    return this.httpClient.post<Formation>(url, data);
  }

  public saveResourcep(url, data): Observable<Cv> {
    // @ts-ignore
    return this.httpClient.post<Cv>(url, data);
  }
  public saveResourceAlerte(url, data): Observable<AlerteMessageModel> {
    // @ts-ignore
    return this.httpClient.post<AlerteMessageModel>(url, data);
  }
  public saveResourcepi(url, data): Observable<Inscription> {
    // @ts-ignore
    return this.httpClient.post<Inscription>(url, data);
  }
  public saveResourceel(url, data): Observable<ElementModel> {
    // @ts-ignore
    return this.httpClient.post<ElementModelt>(url, data);
  }
  public saveEvaluate(url, data): Observable<EvaluateModel> {
    // @ts-ignore
    return this.httpClient.post<EvaluateModel>(url, data);
  }
  // applicable dans tous les methodes
  public  deleteResource(url) {
    return this.httpClient.delete(url);
  }
  public updateResource(url, data) {
    return this.httpClient.put(url, data);
  }

}
