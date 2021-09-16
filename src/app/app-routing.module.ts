import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniLinkedinComponent } from './mini-linkedin/mini-linkedin.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {path:'',redirectTo:'first',pathMatch:'full'},
  {path:'postComment',component:MiniLinkedinComponent},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
