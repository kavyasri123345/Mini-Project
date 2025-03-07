import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from './note.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-note',
  imports:[FormsModule,CommonModule],
  templateUrl: './note.component.html',
})
export class NoteComponent {
notes: Note[] = [];  // Array to store the notes
  title: string = '';  // Title for the new note
  content: string = '';  // Content for the new note

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    // Fetch the notes when the component is initialized
    this.notes = this.noteService.getNotes();
  }

  // Method to add a new note
  addNote() {
    const newNote: Note = { title: this.title, content: this.content }; // ✅ Create an object, not a class instance
    this.noteService.addNote(newNote);
    this.notes = this.noteService.getNotes();
    this.title = '';
    this.content = '';
  }
  

  // Method to delete a note by its index
  deleteNote(index: number): void {
    this.noteService.deleteNote(index);  // Delete the note via the service
    this.notes = this.noteService.getNotes();  // Refresh the note list
  }
}
