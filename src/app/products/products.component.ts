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

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onViewDetail(id: number){
    this.router.navigateByUrl('/products/detail/'+id);
  }
}
