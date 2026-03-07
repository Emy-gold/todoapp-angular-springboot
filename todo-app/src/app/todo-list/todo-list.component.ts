import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: true
})
export class TodoListComponent implements OnInit{

  todos :Todo[] = [];
  newTodo: Todo = this.emptyTodo();
  editingTodo: Todo | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.loadTodos();
  }

  //load the data using getAllTodos
  loadTodos() : void {
    this.isLoading = true;
    this.todoService.getAllTodos().subscribe({
      next : (data) => { this.todos = data; this.isLoading = false},
      error: () => { this.errorMessage = 'Failed to load. Is the backeng running?';
        this.isLoading = false;
      }
    });
  }

  //Add the data
  addTodo() : void {
    if(!this.newTodo.title.trim()) return;
    this.todoService.createTodo(this.newTodo).subscribe({
      next: (created) => { this.todos.push(created);
        this.newTodo = this.emptyTodo();},
      error: (err) => {
        console.error("Create Todo Error:", err);
        this.errorMessage = 'Failed to create todo.';}
    });
  }

  startEdit(todo : Todo) : void {
    this.editingTodo = {...todo};
  }

  saveEdit() : void {
    if (!this.editingTodo?.id) return;
    this.todoService.updateTodo(this.editingTodo, this.editingTodo.id).subscribe({
      next: (updated) => {
        const i = this.todos.findIndex(t => t.id === updated.id);
        if(i !== -1) this.todos[i] = updated;
        this.editingTodo = null;
      }
    });
  }


  deleteTodo(id: number | undefined) : void{
    if( !id || !confirm('Delete this todo?')) return;
    this.todoService.deleteTodo(id).subscribe({
      next: () => {this.todos = this.todos.filter(t => t.id !== id);}
    });
  }

  cancelEdit(): void {this.editingTodo = null;}

  private emptyTodo() : Todo {
    return { title: '',description: '', completed: false};
  }
}
