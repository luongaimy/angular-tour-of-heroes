import { Component } from '@angular/core';
import { TodoList } from './features/todo/components/todo-list/todo-list';
import { TodoForm } from "./features/todo/components/todo-form/todo-form";
import { TodoReactiveForm } from "./features/todo/components/todo-reactive-form/todo-reactive-form";

@Component({
  selector: 'app-root',
  imports: [
    TodoList,
    TodoForm,
    TodoReactiveForm
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todos-app';
}
