import { Component } from '@angular/core';
import { TodoList } from './features/todo/components/todo-list/todo-list';
import { TodoForm } from "./features/todo/components/todo-form/todo-form";

@Component({
  selector: 'app-root',
  imports: [
    TodoList,
    TodoForm
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todos-app';
}
