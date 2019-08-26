import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ChecklistPrintComponent } from './components/checklist-print/checklist-print.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'print', component: ChecklistPrintComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatTableModule],
  exports: [RouterModule, FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatTableModule]
})
export class AppRoutingModule { }
