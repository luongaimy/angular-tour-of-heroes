import { Component, inject } from '@angular/core';
import { CountSignalService } from '../count-signal-service';

@Component({
  selector: 'app-show-component',
  imports: [],
  templateUrl: './show-component.html',
  styleUrl: './show-component.css',
})
export class ShowComponent {
  countSignalService: CountSignalService = inject(CountSignalService);

  count = this.countSignalService.count;
}
