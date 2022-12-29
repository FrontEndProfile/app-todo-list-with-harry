import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list-pg',
  templateUrl: './todo-list-pg.component.html',
  styleUrls: ['./todo-list-pg.component.scss']
})
export class TodoListPgComponent {
  @Input() todo:Todo;
}
