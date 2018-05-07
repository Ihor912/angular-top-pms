import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './projects.service';
import { Project } from '../common/protocols';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
  }

  getProjectDetailsURL(project: Project) {
    return ['/projects/' + project.id];
  }
}
