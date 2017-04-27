import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppResolver } from './app-resolver.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './login/create.component';
import { AngularFire, AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, resolve: { authState: AppResolver } },
    { path: 'create', component: CreateComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AppResolver]
})
export class AppRoutingModule { }