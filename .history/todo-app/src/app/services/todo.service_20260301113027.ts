import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
