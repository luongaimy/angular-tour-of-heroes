import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MessageQueueService } from '../../../../core/services/message-queue-service';
import { Actions } from '../../../../core/enums/actions';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './todo-reactive-form.html',
  styleUrl: './todo-reactive-form.css',
})
export class TodoReactiveForm {
  private formBuilder: FormBuilder = inject(FormBuilder);
  messageQueueService: MessageQueueService = inject(MessageQueueService);

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    completed: [false],
  });

  submitToDo() {
    this.messageQueueService.dispatch({
      type: Actions.NEW_TODO,
      payload: this.todoForm.value,
    });
  }
}
