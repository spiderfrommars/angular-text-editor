import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Synonym } from '../../models/synonym/Synonym';

@Component({
  selector: 'app-synonym-item',
  templateUrl: './synonym-item.component.html',
  styleUrls: ['./synonym-item.component.scss']
})
export class SynonymItemComponent implements OnInit {
  @Input() synonym: Synonym;
  @Output() changeBySynonym: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectSynonym(synonym) {
    this.changeBySynonym.emit(synonym);
  }
}
