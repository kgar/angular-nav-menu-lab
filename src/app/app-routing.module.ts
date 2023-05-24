import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAComponent } from './view-a/view-a.component';
import { ViewBComponent } from './view-b/view-b.component';
import { ViewCComponent } from './view-c/view-c.component';
import { ViewDComponent } from './view-d/view-d.component';

const routes: Routes = [
  {
    path: 'A',
    component: ViewAComponent
  },
  {
    path: 'B',
    component: ViewBComponent
  },
  {
    path: 'C',
    component: ViewCComponent
  },
  {
    path: 'D',
    component: ViewDComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
