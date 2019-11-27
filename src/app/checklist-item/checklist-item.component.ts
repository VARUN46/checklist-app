import { Component, OnInit, Input } from '@angular/core';
import { ItemsManagerService } from '../services/items-manager.service';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css']
})
export class ChecklistItemComponent implements OnInit {

  @Input()
  title = 'Replace this with Title';

  @Input()
  isChecked = false;

  @Input()
  id = '';

  checkedString = '';

  constructor(public svc: ItemsManagerService) { }

  ngOnInit() {
    if (this.isChecked) {
      this.checkedString = 'btn btn-success';
    } else {
      this.checkedString = 'btn btn-primary';
    }
  }

  deleteItem(id: string) {
    this.svc.deleteItem(id);
  }

  changeCheckStateOfItem(id: string) {
    this.svc.changeCheckStateOfItem(id);
  }
}
