import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes'; // Ensure 'routes' is correctly exported
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for [(ngModel)]
    RouterModule.forRoot(routes) // Routing setup
  ],
  providers: [AuthService], // Make AuthService available
  bootstrap: [AppComponent]
})
export class AppModule { }
