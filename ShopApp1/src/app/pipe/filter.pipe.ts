import { Product } from '../model/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class FilterPipe implements PipeTransform {
  transform(product: Product[], filterText: string): Product[] {
    filterText = filterText.toLocaleLowerCase();
    return filterText ? product.filter(
          (p: Product) =>
            p.title.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            p.description.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : product;
  }
}
