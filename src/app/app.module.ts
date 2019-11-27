import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';
import { WhyThisAppComponent } from './why-this-app/why-this-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ChecklistItemComponent,
    ChecklistItemsComponent,
    WhyThisAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
