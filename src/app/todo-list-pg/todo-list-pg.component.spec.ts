import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPgComponent } from './todo-list-pg.component';

describe('TodoListPgComponent', () => {
  let component: TodoListPgComponent;
  let fixture: ComponentFixture<TodoListPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
