import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list/list.service';
import { ListItem } from 'src/app/services/list/listItem';

@Component({
  selector: 'app-checklist-item-creator',
  templateUrl: './checklist-item-creator.component.html',
  styleUrls: ['./checklist-item-creator.component.css']
})
export class ChecklistItemCreatorComponent implements OnInit {

  itemContent: string;
  constructor(private svc: ListService) {
  }

  ngOnInit() {
  }

  addItem() {
    const item: ListItem = new ListItem();
    item.content = this.itemContent;
    this.svc.addItem(item);
  }


}
