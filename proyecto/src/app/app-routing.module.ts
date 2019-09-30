import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component'
import { AdministrationComponent } from './administration/administration.component'


const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'administration', component: AdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
