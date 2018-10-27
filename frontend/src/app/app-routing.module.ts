import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/top/top.module#TopPageModule',
    pathMatch: 'full'
  },
  {
    path: 'dummy',
    loadChildren: './pages/dummy/dummy.module#DummyPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
