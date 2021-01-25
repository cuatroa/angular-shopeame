import { ShopeameService } from './../../../shopeame.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  products;

  constructor(public shopeame: ShopeameService) { }

  ngOnInit(): void {
    this.shopeame.getProducts().subscribe( (res: any) => {

      this.products = res;
      console.log(res);
    });
  }

  searchName = '';

}
