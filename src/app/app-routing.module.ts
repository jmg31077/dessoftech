import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'users', component:UsersComponent },
  { path: 'adduser', component:AdduserComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'footer', component: FooterComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
