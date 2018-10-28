import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/history/history.module#HistoryPageModule',
    pathMatch: 'full'
  },
  {
    path: 'detail',
    loadChildren: './pages/detail/detail.module#DetailPageModule'
  },
  {
    path: 'search',
    loadChildren: './pages/search/search.module#SearchPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
