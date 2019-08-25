import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css']
})
export class ChecklistItemComponent implements OnInit {

  @Input() id: number;
  @Input() itemChecked: boolean;
  @Input() itemContent: string;

  constructor(private svc: ListService) {
    this.itemChecked = false;
   }

  ngOnInit() {
  }

  removeItem(id: number) {
    this.svc.removeItem(id);
    console.log(id);
  }

  toggleItemChecked(id: number) {
    console.log(id);
    this.svc.toggleItemChecked(id);
  }

}
