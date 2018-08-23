import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'app', loadChildren: './core/core.module#CoreModule', canActivate: [AuthGuard] },
    { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
    { path: '', redirectTo: 'app', pathMatch:'full' },
    { path: '**', redirectTo: 'login' }]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
