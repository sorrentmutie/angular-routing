import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { myGuard } from './my.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent,
  title: 'Primo Componente',
  children: [
    {
      path: 'child-a', // child route path
      title: 'child a',
      component: ChildAComponent, // child route component that the router renders
    },
    {
      path: 'child-b',
      title: 'child b',
      component: ChildBComponent, // another child route component that the router renders
    },
  ] },
  { path: 'second-component', component: SecondComponent, title: 'Secondo Componente',
     canActivate: [myGuard], },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
