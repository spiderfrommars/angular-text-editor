import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FileComponent } from './components/file/file.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './services/text-service/text.service';
import { FooterComponent } from './components/footer/footer.component';
import { SynonymsComponent } from './components/synonyms/synonyms.component';
import { SynonymItemComponent } from './components/synonym-item/synonym-item.component';
import { SynonymsService } from './services/synonyms-service/synonyms.service';
import { SynonymsInteractionService } from './services/synonyms-interaction/synonyms-interaction.service';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    SynonymsComponent,
    SynonymItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TextService,
    SynonymsService,
    SynonymsInteractionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
