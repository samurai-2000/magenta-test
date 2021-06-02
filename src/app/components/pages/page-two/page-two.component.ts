import { Component, OnInit } from '@angular/core';
import { objects } from 'src/app/data/objects';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  public array = this.store.get('dataPageTwo') || objects 
  public statePageTwo = this.store.get('statePageTwo') || {dateFrom: '', dateTo: '', search: ''}

  constructor(private store: StoreService) { }

  ngOnInit(): void {
  }

  public getFilterData(event: any) {
    this.array = event.data
    this.store.set('statePageTwo', event.state)
    this.store.set('dataPageTwo', this.array)
    this.statePageTwo = this.store.get('statePageTwo')
  }

  public clearFilterData() {
    this.array = objects
    this.store.clear('dataPageTwo')
    this.store.clear('statePageTwo')
    this.statePageTwo = {dateFrom: '', dateTo: '', search: ''}
  }

}
