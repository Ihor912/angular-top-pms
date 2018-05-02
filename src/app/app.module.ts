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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProjectsComponent,
    TasksComponent
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
