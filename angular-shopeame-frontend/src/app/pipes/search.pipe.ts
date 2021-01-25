import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProducts = [];
    for(const product of value){
      if (product.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProducts.push(product);
      };
    };
    return resultProducts;
  }

}
