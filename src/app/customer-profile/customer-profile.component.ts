import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOMERS } from '../customers/customers.objects';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  selectedCustomer: any;
  customers = CUSTOMERS;
  displayUpdatePage = "none";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let customer of this.customers){
          if (customer.id == param['id']){ this.selectedCustomer = customer; break;}
        }
      }
    )
  }

  updateProfile(){
    this.displayUpdatePage = "block"
  }

  onCloseHandled() {
    this.displayUpdatePage = "none";
  }

  update(updateIn: NgForm){
    this.selectedCustomer.firstName = updateIn.value.firstname;
    this.selectedCustomer.lastName = updateIn.value.lastname;
    this.selectedCustomer.bio = updateIn.value.bio;
    this.selectedCustomer.birthDate = updateIn.value.birthDate;
    this.onCloseHandled();
    this.router.navigateByUrl('/customers/'+this.selectedCustomer.id);
  }

}
