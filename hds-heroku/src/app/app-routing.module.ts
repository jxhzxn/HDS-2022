import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CounterComponent } from './counter/counter.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { ManualAddComponent } from './manual-add/manual-add.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'manual-add', component: ManualAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
