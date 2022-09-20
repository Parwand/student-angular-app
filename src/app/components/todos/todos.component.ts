import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: {} =  [{
    id: 1, title: "First Todos", isCompleted:false
  },
  {
    id: 2, title: "second Todos", isCompleted:true
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
