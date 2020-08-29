import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcompComponent } from './bcomp/bcomp.component';
import { AcompComponent } from './acomp/acomp.component';
import { GetPostsComponent } from './get-posts/get-posts.component';

const routes: Routes = [
  {
    path: 'get-posts',
    component: GetPostsComponent,
  },
  {
    path: 'bcomp',
    component: BcompComponent,
  },
  {
    path: 'acomp',
    component: AcompComponent,
  },
  {
    path: '',
    redirectTo: '/acomp',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
      scrollOffset: [100, 0],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
