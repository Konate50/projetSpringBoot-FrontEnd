import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFormationComponent } from './new-formation/new-formation.component';
import { FormationComponent } from './formation/formation.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NewCvComponent } from './new-cv/new-cv.component';
import { CvComponent } from './cv/cv.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormElementComponent } from './form-element/form-element.component';
import { NewElementComponent } from './new-element/new-element.component';
import { NewInscriptionComponent } from './new-inscription/new-inscription.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { FormateurComponent } from './formateur/formateur.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ShowAlerteComponent } from './show-alerte/show-alerte.component';
import { ResultEvaluateComponent } from './result-evaluate/result-evaluate.component';
@NgModule({
  declarations: [
    AppComponent,
    NewFormationComponent,
    FormationComponent,
    NewCvComponent,
    CvComponent,
    LoginComponent,
    InscriptionComponent,
    FormElementComponent,
    NewElementComponent,
    NewInscriptionComponent,
    EditFormationComponent,
    FormateurComponent,
    EvaluationComponent,
    AlertMessageComponent,
    ShowAlerteComponent,
    ResultEvaluateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
