import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistItemComponent } from './components/checklist-item/checklist-item.component';
import { ChecklistItemsCollectionComponent } from './components/checklist-items-collection/checklist-items-collection.component';
import { ChecklistItemCreatorComponent } from './components/checklist-item-creator/checklist-item-creator.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChecklistPrintComponent } from './components/checklist-print/checklist-print.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistItemComponent,
    ChecklistItemsCollectionComponent,
    ChecklistItemCreatorComponent,
    HomeComponent,
    ChecklistPrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
