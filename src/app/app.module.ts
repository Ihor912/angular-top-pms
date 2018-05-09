import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { ProjectsComponent } from './projects/projects.component';
import { UserService } from './login/user.service';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProjectsComponent,
    TasksComponent,
    ProjectDetailsComponent,
    ProjectCreateComponent,
    ProjectUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
