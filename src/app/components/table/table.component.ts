import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public data!: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
