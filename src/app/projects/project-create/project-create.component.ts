import { Component, OnInit } from '@angular/core';
import { ProjectsService} from '../projects.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import { Project, Member } from '../../common/protocols';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  project: Project = {
    id: '',
    name: '',
    type: '',
    owner: '',
    members: Array<Member>()
  };
  constructor(public projectService: ProjectsService, public router: Router) {

  }

  ngOnInit() {
  }

  createProject(form: NgForm) {
    this.project = form.value;
    this.projectService.createProject(this.project);
    this.router.navigate(['./projects']);
  }
}
