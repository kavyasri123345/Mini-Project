import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent], // Declare the LoginComponent
  imports: [
    CommonModule, // Required for Angular directives like *ngIf and *ngFor
    FormsModule,  // Required for [(ngModel)]
    RouterModule.forChild([
      { path: '', component: LoginComponent } // Lazy-loaded route
    ])
  ]
})
export class LoginModule {}
