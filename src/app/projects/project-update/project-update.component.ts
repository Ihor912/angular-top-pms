import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Project} from '../../common/protocols';
import {ProjectsService} from '../projects.service';


@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  project: Project;
  paramSubscription: Subscription;
  constructor(public projectsService: ProjectsService, public activatedRouter: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRouter.params.subscribe(params =>
      this.project = this.projectsService.getProjectById(params['id']));
  }
  updateProject(form: NgForm) {
    const index = this.projectsService.projects.indexOf(this.project);
    this.project = form.value;
    this.projectsService.updateProject(index, this.project);
    this.router.navigate(['./projects']);
  }
}
