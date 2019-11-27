import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { ItemsManagerService } from '../services/items-manager.service';


@Component({
  selector: 'app-checklist-items',
  templateUrl: './checklist-items.component.html',
  styleUrls: ['./checklist-items.component.css']
})
export class ChecklistItemsComponent implements OnInit {

  items: Array<Item> = [];
  item: Item = new Item();

  constructor(private svc: ItemsManagerService) {
    this.items = this.svc.InMemoryViewData;
   }

  ngOnInit() {
  }

  addNewItem(item: Item) {
    this.svc.addItem(item);
  }

  resetAcivityState() {
    this.svc.resetActivityState();
  }

  removeAll() {
    this.svc.clear();
  }

}
