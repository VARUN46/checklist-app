import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/services/list/listItem';
import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-checklist-items-collection',
  templateUrl: './checklist-items-collection.component.html',
  styleUrls: ['./checklist-items-collection.component.css']
})
export class ChecklistItemsCollectionComponent implements OnInit {

  constructor(public svc: ListService) {
  }

  ngOnInit() {
  }


  trackByIndex(index, item) {
    return index;
  }
}
