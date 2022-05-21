import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManualAddComponent } from './manual-add/manual-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CounterComponent,
    LeaderboardComponent,
    AdminPanelComponent,
    ManualAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
