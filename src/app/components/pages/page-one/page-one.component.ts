import { Component, OnInit } from '@angular/core';
import { objects } from 'src/app/data/objects';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  public array = this.store.get('dataPageOne') || objects 
  public statePageOne = this.store.get('statePageOne') || {dateFrom: '', dateTo: '', search: ''}

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

  public getFilterData(event: any) {
    this.array = event.data
    this.store.set('statePageOne', event.state)
    this.store.set('dataPageOne', this.array)
    this.statePageOne = this.store.get('statePageOne')
  }

  public clearFilterData() {
    this.array = objects
    this.store.clear('dataPageOne')
    this.store.clear('statePageOne')
    this.statePageOne = {dateFrom: '', dateTo: '', search: ''}
  }

}
