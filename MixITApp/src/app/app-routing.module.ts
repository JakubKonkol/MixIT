import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DrinkBuilderComponent} from "./pages/drink-builder/drink-builder.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SearchComponent} from "./pages/search/search.component";
import {DrinkViewComponent} from "./pages/drink-view/drink-view.component";
import {CategoryViewComponent} from "./pages/category-view/category-view.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {AuthGuard} from "./guards/AuthGuard";
import {LoginGuard} from "./guards/LoginGuard";

const routes: Routes = [
  {path: '', redirectTo:'/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, data: {showNav: false}, canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'drinkBuilder', component: DrinkBuilderComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: "drink/:id", component: DrinkViewComponent, data: {showNav: false}, canActivate: [AuthGuard]},
  {path: "category/:category", component: CategoryViewComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, data: {showNav: false}, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, data: {showNav: false}, canActivate: [LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
