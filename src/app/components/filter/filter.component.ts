import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mg-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  @Input() public data!: any[]
  @Input() public state!: any
  @Output() private onFilter = new EventEmitter()
  @Output() private onSearch = new EventEmitter()
  @Output() private onClear = new EventEmitter()

  public filterData = this.state || {dateFrom: '', dateTo: '', search: ''}

  constructor() {
  }

  ngOnInit(): void {
  }

  public dataFilterResult() {

    if (
      this.filterData.dateFrom == '' && 
      this.filterData.dateTo == ''
    ) {
      return this.onFilter.emit({
        data: this.data,
        state: this.filterData
    } )}

    else {
      this.dataFilter()
      this.dataSort()
      return this.onFilter.emit({
        data: this.data,
        state: this.filterData
      })
    }
    
  }

  public dataSearch() {

    if(this.filterData.search !== '') {
      this.data = this.data.filter(elem => {
        return elem.name.toLowerCase() == this.filterData.search.toLowerCase()
      })
      return this.onSearch.emit({
        data: this.data,
        state: this.filterData
      })
    }
    
  }

  public clearDataFilter() {

    this.filterData.dateFrom = ''
    this.filterData.dateTo = ''
    this.filterData.search = ''
    this.onClear.emit(true)

  }

  private dataFilter() {

    this.data = this.data.filter(elem => {
      return (
        elem.date == this.filterData.dateFrom.split('-').reverse().join('-') ||
        elem.date == this.filterData.dateTo.split('-').reverse().join('-')
      ) 
    })

  }

  private dataSort() {

    this.data.sort((a:any, b:any) => {
      if(a.date.split('-')[2] == b.date.split('-')[2]) {
        if(a.date.split('-')[1] == b.date.split('-')[1]) {
          return a.date.split('-')[0] - b.date.split('-')[0]
        } else {
          return a.date.split('-')[1] - b.date.split('-')[1]
        }
      } else {return a.date.split('-')[2] - b.date.split('-')[2]}
    })

  }

}
