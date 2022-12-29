import { Component , Input, OnInit} from '@angular/core';

import { Todo } from "../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  @Input() todo:Todo

  todos: Todo[] = [];

  localStore:string | null;
// todo: string
  constructor(){

    this.localStore = localStorage.getItem("todos");

    if (this.localStore == null) {
    this.todos = []
    } else {
      this.todos = JSON.parse(this.localStore)
    }
    console.log(this.todos);
    

  }


  deleted(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem('todos' ,JSON.stringify(this.todos))
  }
  addTodo(todo:Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos' ,JSON.stringify(this.todos))
  }
  ngOnInit(): void {
  }
}
