import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [{
  path: '', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule],
  exports: [RouterModule, FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule]
})
export class AppRoutingModule { }
