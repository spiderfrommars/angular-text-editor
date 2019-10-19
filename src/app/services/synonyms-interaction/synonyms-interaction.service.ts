import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SynonymsInteractionService {
  private controlSynonymsInteraction = new Subject<string>();
  controlSynonyms$ = this.controlSynonymsInteraction.asObservable();
  constructor() { }

  sendWord(message: string) {
    this.controlSynonymsInteraction.next(message);
  }
}
