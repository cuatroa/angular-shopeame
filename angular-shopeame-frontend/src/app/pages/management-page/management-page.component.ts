import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public product: any = {};

  public productForm;

  onKeyName(parameter: any) {
    this.product.name = parameter;
  }

  onKeyPrecio(parameter: any) {
    this.product.price = parameter;
  }

  onKeyDescripcion(parameter: any) {
    this.product.description = parameter;
  }

  onKeyImagen(parameter: any) {
    this.product.image = parameter;
  }

  onKeyOpinion(parameter: any) {
    this.product.stars = parameter;
  }


}
