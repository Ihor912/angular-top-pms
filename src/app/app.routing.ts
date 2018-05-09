import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'create', component: ProjectCreateComponent },
    { path: 'projects/update/:id', component: ProjectUpdateComponent },
    { path: 'tasks', component: TasksComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
