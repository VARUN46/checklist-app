import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ListService } from 'src/app/services/list/list.service';
import { PrintService } from 'src/app/services/print/print.service';
import { Router } from '@angular/router';
import { ListItem } from 'src/app/services/list/listItem';
import { delay } from 'q';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-checklist-print',
  templateUrl: './checklist-print.component.html',
  styleUrls: ['./checklist-print.component.css']
})
export class ChecklistPrintComponent implements OnInit, AfterViewInit {

  listItems: ListItem[];
  displayedColumns: string[] = ['id', 'content', 'checked'];
  constructor(public svc: ListService, public printSvc: PrintService, public route: Router) {
    if (this.printSvc.title === null || typeof(this.printSvc.title) === 'undefined' || this.printSvc.title.length === 0) {
      this.route.navigate(['']);
    }

    this.listItems = this.svc.getItems();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    (async () => {
      await delay(2000);
      window.print();
    })();
  }

}
