import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from './customers.objects';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = CUSTOMERS;
  newCustomer: Customer = {id: 0, firstName: '', lastName:'', birthDate: '', imageUrl: 'assets/images/pro-thumbnail.png', bio: ''};
  displayProfile = "none";
  displayAdd = "none";
  selectedId!: number;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  openAdd() {
    this.displayAdd = "block";
  }

  openProfile(idIn: number) {
    this.selectedId = idIn;
  }
  
  onCloseHandled() {
    this.displayAdd = "none";
    this.displayProfile = "none";
  }

  delete(id: number){
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == id) {
        this.customers.splice(i, 1);
        break;
      }
    }
    this.router.navigateByUrl('/customers')
  }

  add(customerIn: NgForm){
    this.newCustomer.firstName = customerIn.value.firstname;
    this.newCustomer.lastName = customerIn.value.lastname;
    this.newCustomer.bio = customerIn.value.bio;
    this.newCustomer.birthDate = customerIn.value.birthDate;
    this.customers.push(this.newCustomer);
    this.onCloseHandled();
    this.router.navigateByUrl('/customers');
  }

}
