import { Injectable } from '@angular/core';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsManagerService {

  public cacheKey = 'CachedData';
  public InMemoryViewData: Array<Item> = new Array<Item>(); /** Not to be reassigned, memory reference must remain constant */

  constructor() {
    this.syncInMemoryData(this.getAll());
  }


  generateUUID() {
    return Date.now().toString();
  }


  addItem(item: Item) {
    const items: Array<Item> = this.getAll();
    const itemNew: Item = new Item();
    itemNew.taskName = item.taskName;
    itemNew.isChecked = false;
    itemNew.id = this.generateUUID();
    items.push(itemNew);
    this.localCacheData(items);
  }

  clear() {
    const items: Array<Item> = this.getAll();
    items.splice(0, items.length);
    this.localCacheData(items);
  }

  getAll() {
    const items: Array<Item> = this.readCacheData();
    return items;
  }


  changeCheckStateOfItem(id: string) {
    const items: Array<Item> = this.getAll();
    items.forEach((item, index) => {
      if (item.id === id) {
        items[index].isChecked = !items[index].isChecked;
      }
    });
    this.localCacheData(items);

  }

  deleteItem(id: string) {
    const items: Array<Item> = this.getAll();
    const workingItems: Array<Item> = new Array<Item>();
    items.forEach((item, index) => {
      if (item.id !== id) {
        workingItems.push(item);
      }
    });
    this.localCacheData(workingItems);
  }

  localCacheData(data: Array<Item>) {
    const stringData: string = JSON.stringify(data);
    localStorage.setItem(this.cacheKey, stringData);
    this.syncInMemoryData(data);
  }

  readCacheData() {
    let data: Array<Item> = JSON.parse(localStorage.getItem(this.cacheKey));
    if (data == null) {
      data = new Array<Item>();
    }
    this.syncInMemoryData(data);
    return data;
  }

  resetActivityState() {
    const items: Array<Item> = this.getAll();
    items.forEach((item, index) => {
      items[index].isChecked = false;
    });
    this.localCacheData(items);
  }

  syncInMemoryData(data: Array<Item>) {
    this.InMemoryViewData.splice(0, this.InMemoryViewData.length);
    data.forEach((item, index) => {
      this.InMemoryViewData.push(item);
    });
  }
}
