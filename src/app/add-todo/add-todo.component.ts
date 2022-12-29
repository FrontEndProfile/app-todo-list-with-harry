import { Component , EventEmitter, Input, OnInit, Output ,} from '@angular/core';
import { Todo } from '../Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit{


  @Input() todo:Todo

@Output() todoAdd : EventEmitter<Todo> = new EventEmitter();


tittle: string;
desc: string;

  onsubmit(){
    // debugger
    const todo = {
      sno: 4,
      tittle:this.tittle,
      desc:this.desc,
      active:true
    }
    console.log(todo);
    
    this.todoAdd.emit(todo)
    console.log(todo);
  }
  constructor(){}
ngOnInit(): void {
  
}
}
