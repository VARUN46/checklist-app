import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list/list.service';
import { PrintService } from 'src/app/services/print/print.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist-items-collection',
  templateUrl: './checklist-items-collection.component.html',
  styleUrls: ['./checklist-items-collection.component.css']
})
export class ChecklistItemsCollectionComponent implements OnInit {

  constructor(public svc: ListService,
              public printSvc: PrintService,
              public router: Router) {
  }

  ngOnInit() {
  }


  trackByIndex(index, item) {
    return index;
  }

  resetItemsCheck() {
    this.svc.resetItemsChecklist();
  }

  printChecklist() {
    this.router.navigate(['/print']);
  }

}
