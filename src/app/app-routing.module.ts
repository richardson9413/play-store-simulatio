import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { AddGameComponent } from './pages/add-game/add-game.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path: 'content/:id',
    component:ContentComponent,

  },
  {
    path: 'buy-page/:id',
    component:BuyPageComponent,

  },
 {
   path: 'add-game', component:AddGameComponent
 }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
