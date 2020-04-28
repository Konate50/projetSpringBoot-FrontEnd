import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Formation} from "../model/formation.model";

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {
  public currentFormation: Formation;
  public url: string;

  constructor(private router: Router, private  activatedRoute: ActivatedRoute,
              private formatService: FormationService) { }

  ngOnInit(): void {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.formatService.getResourceEdit(this.url)
      .subscribe(data => {
        this.currentFormation = data;
      });
  }

  onUpdateFormation(value: any) {
    this.formatService.updateResource(this.url, value)
      .subscribe(data => {
        alert('Mise a jour effectuee avec succes');
        this.router.navigateByUrl('/formations');
      }, err => {
        console.log(err);
      });
  }
}
