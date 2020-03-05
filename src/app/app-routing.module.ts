import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcompComponent } from './bcomp/bcomp.component';
import { AcompComponent } from './acomp/acomp.component';

const routes: Routes = [
  {
    path: 'bcomp',
    component: BcompComponent
  },
  {
    path: 'acomp',
    component: AcompComponent
  },
  {
    path: '',
    redirectTo: '/acomp',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
