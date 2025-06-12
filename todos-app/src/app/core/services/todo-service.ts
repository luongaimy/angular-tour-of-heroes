import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, Todos } from '../models/todo';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http: HttpClient = inject(HttpClient);

  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAll(): Observable<Todos> {
    return this.http.get<Todos>(environment.url_todos);
  }

  delete(todo: Todo): Observable<void> {
    const url = `${environment.url_todos}/${todo.id}`;
    return this.http.delete<void>(url);
  }

  save(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.url_todos, todo, this.httpOptions);
  }
}
