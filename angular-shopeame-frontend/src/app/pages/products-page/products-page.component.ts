import { ShopeameService } from './../../shopeame.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(private shopeame: ShopeameService) { }

  ngOnInit(): void {
  }

}
