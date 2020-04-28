import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormationComponent} from "./formation/formation.component";
import {NewFormationComponent} from "./new-formation/new-formation.component";
import {NewCvComponent} from "./new-cv/new-cv.component";
import {CvComponent} from "./cv/cv.component";
import {LoginComponent} from "./login/login.component";
import {FormElementComponent} from "./form-element/form-element.component";
import {NewElementComponent} from "./new-element/new-element.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {NewInscriptionComponent} from "./new-inscription/new-inscription.component";
import {EditFormationComponent} from "./edit-formation/edit-formation.component";
import {FormateurComponent} from "./formateur/formateur.component";
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {AlertMessageComponent} from "./alert-message/alert-message.component";
import {ShowAlerteComponent} from "./show-alerte/show-alerte.component";
import {ResultEvaluateComponent} from "./result-evaluate/result-evaluate.component";


const routes: Routes = [
  {path: "formations", component: FormationComponent},
  {path: "new-formation", component: NewFormationComponent},
  {path:"element/:p1/:p2", component: FormElementComponent},
  {path: "new-elements", component: NewElementComponent},
  {path: "",redirectTo:"formations", pathMatch:"full"},
  {path: "cv", component: CvComponent},
  {path: "edit-formation/:id", component: EditFormationComponent },
  {path: "new-cv", component: NewCvComponent},
  {path: "inscriptions", component: InscriptionComponent},
  {path: "new-inscriptions", component: NewInscriptionComponent},
  {path: "alertes",component: AlertMessageComponent},
  {path: "showalertes",component: ShowAlerteComponent},
  {path: "formateur", component: FormateurComponent},
  {path: "evaluate",component: EvaluationComponent},
  {path: "score", component: ResultEvaluateComponent},
  {path: "login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
