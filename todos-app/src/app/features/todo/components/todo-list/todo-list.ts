import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../core/services/todo-service';
import { filter, merge, Observable, switchMap } from 'rxjs';
import { Todo, Todos } from '../../../../core/models/todo';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MessageQueueService } from '../../../../core/services/message-queue-service';
import { Action } from '../../../../core/models/action';
import { Actions } from '../../../../core/enums/actions';

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
export class TodoList implements OnInit, AfterViewInit {
  todoService: TodoService = inject(TodoService);
  messageQueueService: MessageQueueService = inject(MessageQueueService);

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
    const delete$ = this.messageQueueService.bus$.pipe(
      filter((action: Action) => action.type === Actions.DELETE_TODO),
      switchMap((action: Action) => this.todoService.delete(action.payload))
    );

    const add$ = this.messageQueueService.bus$.pipe(
      filter((action: Action) => action.type === Actions.NEW_TODO),
      switchMap((action: Action) => this.todoService.save(action.payload))
    );

    const load$ = this.messageQueueService.bus$.pipe(
      filter((action: Action) => action.type === Actions.LOAD_TODOS)
    );

    this.todos$ = merge(delete$, add$, load$).pipe(
      switchMap(() => this.todoService.getAll())
    );

    // this.todos$ = this.todoService.getAll();
    // this.messageQueueService.bus$.subscribe((action: Action) => {
    //   console.log('TodoList', action);
    //   this.todos$ = this.todoService.getAll()
    // });
  }

  ngAfterViewInit(): void {
    this.messageQueueService.dispatch({
      type: Actions.LOAD_TODOS,
    });
  }

  delete(todo: Todo) {
    this.messageQueueService.dispatch({
      type: Actions.DELETE_TODO,
      payload: todo,
    });

    // this.todos$ = this.todoService
    //   .delete(todo)
    //   .pipe(switchMap(() => this.todoService.getAll()));

    // this.todoService
    //   .delete(todo)
    //   .subscribe(response => {
    //     this.todos$ = this.todoService.getAll();
    //   });
  }
}
