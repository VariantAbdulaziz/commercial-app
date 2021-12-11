import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS} from './products.objects'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  newProduct: Product | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onViewDetail(id: number){
    this.router.navigateByUrl('/products/detail/'+id);
  }

  add(){
    
  }

  delete(id: number){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products.splice(i, 1);
        break;
      }
    }
    this.router.navigateByUrl('')
  }
}
