import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) }, { path: 'breakfast', loadChildren: () => import('./pages/breakfast/breakfast.module').then(m => m.BreakfastModule) }, { path: 'lunch', loadChildren: () => import('./pages/lunch/lunch.module').then(m => m.LunchModule) }, { path: 'dinner', loadChildren: () => import('./pages/dinner/dinner.module').then(m => m.DinnerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
