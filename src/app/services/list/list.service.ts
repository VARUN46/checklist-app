import { Injectable } from '@angular/core';
import { ListItem } from './listItem';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  itemsList: ListItem[];
  private id: number;
  constructor() {
    this.itemsList = this.getItems();
    if (this.itemsList === null) {
      this.itemsList = [];
      this.id = 0;
    } else {
      const idItem  = this.itemsList[this.itemsList.length - 1];
      this.id = idItem.id;
    }
   }

  addItem(item: ListItem) {
    this.id = this.id + 1;
    item.id = this.id;
    this.itemsList.push(item);
    this.pushToStorage();
  }

  removeItem(id: number) {

    const tempList: ListItem[] = [];

    this.itemsList.forEach(( entry , index) => {
      if (entry.id !== id) {
        tempList.push(entry);
      }
    });

    this.itemsList = tempList;

    this.pushToStorage();
  }

  getItems() {
    return JSON.parse(localStorage.getItem('itemsListStore'));
  }


  pushToStorage() {
    localStorage.setItem('itemsListStore', JSON.stringify(this.itemsList));
  }

  toggleItemChecked(id: number){
    const items: ListItem[] = this.getItems();
    items.forEach((entry, index) => {
      if (entry.id === id) {
        items[index].checked = items[index].checked ? false : true;
      }
    });
    this.itemsList = items;
    this.pushToStorage();
  }

}
