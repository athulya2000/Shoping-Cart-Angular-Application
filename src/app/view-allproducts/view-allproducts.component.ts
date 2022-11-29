import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allproducts',
  templateUrl: './view-allproducts.component.html',
  styleUrls: ['./view-allproducts.component.css']
})
export class ViewAllproductsComponent {
  constructor(private api:ApiService){
    api.fetchShopping().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[]
}