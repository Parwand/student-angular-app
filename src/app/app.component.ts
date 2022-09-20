import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public students:Student[] = [{
    name: "Parwand",
    email: "parwand.alsino@hhu.de",
    age: 20
  },
  {
    name: "Lea",
    email: "Lea@hhu.de",
    age: 22
  }]

  public addStudent(addForm: NgForm): void{
      this.students.push(addForm.value);
  }

  public deleteStudent(student:Student): void {
    this.students = this.students.filter(s => s != student);
  }
}
