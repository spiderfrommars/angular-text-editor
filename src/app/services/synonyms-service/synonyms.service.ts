import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Synonym } from '../../models/synonym/Synonym';

@Injectable({
  providedIn: 'root'
})
export class SynonymsService {
  url: string = 'https://api.datamuse.com/words?ml=';
  max: string = '&max=10';

  constructor(private http: HttpClient) { }

  getSynonyms(word: string): Observable<Synonym[]> {
    return this.http.get<Synonym[]>(`${this.url}${word}${this.max}`);
  }
}
