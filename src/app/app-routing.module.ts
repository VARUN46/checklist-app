import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistItemsComponent } from './checklist-items/checklist-items.component';
import { WhyThisAppComponent } from './why-this-app/why-this-app.component';


const routes: Routes = [
  {path: '', component: ChecklistItemsComponent},
  {path: 'about', component: WhyThisAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
