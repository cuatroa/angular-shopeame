import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output('search') searchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('');

}
