import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../products/products.objects';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  selectedProduct: any;
  products = PRODUCTS;
  

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.products){
          if (product.id == param['id']){ this.selectedProduct = product; }
        }
      }
    )
  }

  updateProduct(updateIn: NgForm): void {
    this.selectedProduct.name = updateIn.value.name
    this.selectedProduct.price = updateIn.value.price
    this.router.navigateByUrl('');
  }

}
