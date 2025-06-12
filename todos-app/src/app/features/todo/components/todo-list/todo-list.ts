import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../core/services/todo-service';
import { Observable, switchMap } from 'rxjs';
import { Todo, Todos } from '../../../../core/models/todo';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  todoService: TodoService = inject(TodoService);

  todos$!: Observable<Todos>;

  displayedColumns: string[] = [
    'id',
    'userId',
    'title',
    'completed',
    'checkCompleted',
    'delete',
  ];

  ngOnInit(): void {
    this.todos$ = this.todoService.getAll();
  }

  delete(todo: Todo) {
    this.todos$ = this.todoService.delete(todo).pipe(
      switchMap(() => this.todoService.getAll())
    )

    // this.todoService
    //   .delete(todo)
    //   .subscribe(response => {
    //     this.todos$ = this.todoService.getAll();
    //   });
    
  }
}
