import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo:{id:number, title:string, isCompleted:Boolean};
  constructor() { 
    this.todo = {id:2, title:"title", isCompleted:false};
  }

  ngOnInit(): void {
  }

}
