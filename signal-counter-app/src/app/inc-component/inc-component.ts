import { Component, inject } from '@angular/core';
import { CountSignalService } from '../count-signal-service';

@Component({
  selector: 'app-inc-component',
  imports: [],
  templateUrl: './inc-component.html',
  styleUrl: './inc-component.css'
})
export class IncComponent {

  countSignalService: CountSignalService = inject(CountSignalService)

  inc(){
    this.countSignalService.inc()
  }
}
