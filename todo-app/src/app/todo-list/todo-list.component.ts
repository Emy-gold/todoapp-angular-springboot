import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: true
})
export class TodoListComponent implements OnInit{

  //The
  todos :Todo[] = [];
  newTodo: Todo = this.emptyTodo();
  editingTodo: Todo| null = null;
  isLoading = false;
  errorMessage = '';

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() : void {
    this.isLoading = true;
    this.todoService.getAllTodos().subscribe({
      next : (data) => { this.todos = data; this.isLoading = false},
      error: () => { this.errorMessage = 'Failed to load. Is the backeng running?';
        this.isLoading = false;
      }
    });
  }

  private emptyTodo() : Todo {
    return { title: '',description: '', completed: false};
  }
}
