import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Synonym } from '../../models/synonym/Synonym';
import { SynonymsService } from '../../services/synonyms-service/synonyms.service';
import { SynonymsInteractionService } from '../../services/synonyms-interaction/synonyms-interaction.service';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynonymsComponent implements OnInit {
  synonyms: Synonym[];
  constructor(
    private synonymService: SynonymsService,
    private synonymsInteractionService: SynonymsInteractionService
  ) { }

  ngOnInit() {
    this.synonymsInteractionService.controlSynonyms$
      .subscribe(word => {
        this.getSynonymsByWord(word);
      });
    this.synonyms = [{ word: 'hello'}, { word: 'hi'}, { word: 'hey'}];
  }

  getSynonymsByWord(word: string) {
    // Get synonyms of corresponding word
    this.synonymService.getSynonyms(word)
      .subscribe(synonyms => {
        this.synonyms = synonyms;
      });
  }

  changeWordForSynonym(word: string) {
    this.synonymsInteractionService.sendWord(word);
  }
}
