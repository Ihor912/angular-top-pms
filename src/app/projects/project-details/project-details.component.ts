import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../common/protocols';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  private project: Project;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private projectService: ProjectsService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.project = this.projectService.getProject(params['id']);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
