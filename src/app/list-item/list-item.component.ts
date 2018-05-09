import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input() item: any = null;
  @Input() detailsRouterLink: any = null;
  @Input() updateRouterLink: any = null;

  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  deleteItem() {
    this.delete.emit(this.item);
  }

}
