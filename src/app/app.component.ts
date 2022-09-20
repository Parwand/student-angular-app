import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public students:Student[];
  public newStudent:Student = {
    name: "Name",
    email: "Email",
    age: 20
  }
  constructor() {
    this.students = [];
  }

  public addStudent() {
      this.students.push(this.newStudent);
  }
}
