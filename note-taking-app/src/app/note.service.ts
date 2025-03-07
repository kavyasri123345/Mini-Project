import { Injectable } from '@angular/core';
import { Note } from './note/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // Initial empty array of notes
  private notes: Note[] = [];

  constructor() { }

  // Method to get all notes
  getNotes(): Note[] {
    return this.notes;
  }

  // Method to add a new note
  addNote(note: Note): void {
    this.notes.push(note);
  }

  // Method to delete a note by its index
  deleteNote(index: number): void {
    this.notes.splice(index, 1);
  }
}



