import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from './projects.service';
import { Project } from '../common/protocols';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService, public router: Router) {}

  ngOnInit() {
  }

  getProjectDetailsURL(project: Project) {
    return ['/projects/' + project.id];
  }

  createProject() {
    this.router.navigate(['./create']);
  }

  getProjectUpdateURL(project: Project) {
    return ['/projects/update/' + project.id];
  }

  deleteProject(project: Project) {
    this.projectsService.deleteProject(project);
  }
}
