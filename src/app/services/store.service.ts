import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  public get(key: string) {
    return JSON.parse(sessionStorage.getItem(key) as string)
  }

  public clear(key?: string) {
    key ? 
    sessionStorage.removeItem(key) :
    sessionStorage.clear()
  }
}
