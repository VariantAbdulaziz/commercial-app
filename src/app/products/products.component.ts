import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, PRODUCTS} from './products.objects'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products = PRODUCTS;
  display = "none";
  newProduct: Product = {id: 0, name: '', price: 0,imageUrl: 'assets/images/puma.png', description: ''};

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onViewDetail(id: number){
    this.router.navigateByUrl('/products/detail/'+id);
  }

  add(productIn: NgForm){
    this.newProduct.name = productIn.value.name;
    this.newProduct.price = productIn.value.price;
    this.newProduct.description = productIn.value.description;
    this.newProduct.id = this.products.length + 1;
    this.products.push(this.newProduct);
    this.router.navigateByUrl('');
    this.onCloseHandled();
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
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
