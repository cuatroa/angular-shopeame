import { ShopeameService } from './../../../shopeame.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input () product;

  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  constructor(private shopeame : ShopeameService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  enter(i) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i) {
    this.rating = i;
  }

}
