import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSignalService {

  private counter: WritableSignal<number>= signal(0)

  readonly count: Signal<number>= this.counter.asReadonly();

  inc(){
    this.counter.update(value => value + 1)
  }

  
}
