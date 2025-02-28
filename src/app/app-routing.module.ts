import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component'; /* Criei essa rota para subsdtituir o href */


const routes: Routes = [
  {
    path: 'jogos',
    component: JogosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
