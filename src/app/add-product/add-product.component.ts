import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
 image=""
 titile=""
 description=""
 rate=""
 sellerName=""
 quntity=""

 readValues=()=>
 {
  let data:any={"image":this.image,"titile":this.titile,"description":this.description,"rate":this.rate,"sellerName":this.sellerName,"quntity":this.quntity}
  console.log(data)
 }
}
