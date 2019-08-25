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
    const dataForId = this.getItems()[this.getItems().length - 1];
    if (typeof(dataForId) === 'undefined'){
      this.id = 0;
    } else {
      this.id = dataForId.id;
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
