import { Component, EventEmitter, Input , Output} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo:Todo
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter()


  onclick(todo:Todo) {
    this.todoDelete.emit(todo)
    console.log(this.todo.sno + ' Delete this object');
  }
  
}
