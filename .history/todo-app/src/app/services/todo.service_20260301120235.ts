import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //The base url of our spring boot backend
  private apiUrl = 'http://localhost:8080/api/todos';

  //Angular automatique injection via const
  constructor(private http : HttpClient) { }

  //Using Observable as an async strean
  getAllTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  getTodoById(id : number) : Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  createTodo(todo : Todo) : Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodo(todo : Todo, id : number) : Observable<Todo>{
    return this.http.put<Todo>(`${this.apiUrl}/${id}`,todo);
  }

  deleteTodo(id : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
