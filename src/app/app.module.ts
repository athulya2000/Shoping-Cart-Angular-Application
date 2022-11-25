import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllproductsComponent } from './view-allproducts/view-allproducts.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewAllproductsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewAllproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
