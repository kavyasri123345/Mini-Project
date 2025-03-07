
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteService } from './note.service'; 
import { CommonModule } from '@angular/common'; // Import NoteService

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,CommonModule  // Add FormsModule to imports
  ],
  providers: [NoteService],  // Add NoteService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
