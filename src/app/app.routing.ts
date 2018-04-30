import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
