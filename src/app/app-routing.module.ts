import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoListPgComponent } from './todo-list-pg/todo-list-pg.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [

  {path:'todo-list-pg', component:TodoListPgComponent},
  {path:'todo-home', component:TodoHomeComponent},
  {path:'', component:TodoHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
