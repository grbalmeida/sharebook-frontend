import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardUser } from './guards/auth.guard.user';
import { AuthGuardAdmin } from './guards/auth.guard.admin';

import { HomeComponent } from '../components/home/home.component';
import { FormComponent as BookFormComponent } from '../components/book/form/form.component';
import { ListComponent as BookListComponent } from '../components/book/list/list.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { PanelComponent } from '../components/panel/panel.component';
import { AccountComponent } from '../components/account/account.component';
import { QuemSomosComponent } from '../components/quem-somos/quem-somos.component';
import { ApoieProjetoComponent } from '../components/apoie-projeto/apoie-projeto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'book/form',
    component: BookFormComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path: 'livros/doar',
    component: BookFormComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path: 'book/form/:id',
    component: BookFormComponent,
    canActivate: [AuthGuardAdmin]
  },
  {
    path: 'book/list',
    component: BookListComponent,
    canActivate: [AuthGuardAdmin]
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent
  },
  {
    path: 'apoie-projeto',
    component: ApoieProjetoComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'panel',
    component: PanelComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuardUser]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
