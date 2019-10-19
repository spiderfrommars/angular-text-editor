import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SynonymsInteractionService } from '../../services/synonyms-interaction/synonyms-interaction.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnInit{
  selectedWord: string;
  constructor(private synonymsInteractionService: SynonymsInteractionService) {}

  ngOnInit() {
    this.synonymsInteractionService.controlSynonyms$
      .subscribe(word => {
        this.replaceWordBySynonym(word);
      });
  }

  setTextBold() {
    document.execCommand('bold');
  }

  setTextItalic() {
    document.execCommand('italic');
  }

  setTextUnderline() {
    document.execCommand('underline');
  }

  getSynonymsOfSelectedWord() {
    // Get selected word in order to get its synonyms
    this.selectedWord = window.getSelection().toString();
    this.synonymsInteractionService.sendWord(this.selectedWord);
  }

  replaceWordBySynonym(word: string) {
    // Replace selected word by the selected synonym
    console.log(word);
    console.log(this.selectedWord);
  }
}
