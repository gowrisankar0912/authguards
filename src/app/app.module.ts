import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { AddproductComponent } from './Components/products/addproduct/addproduct.component';
import { GetproductsComponent } from './Components/products/getproducts/getproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './Components/products/productdetails/productdetails.component';
import { BrandsComponent } from './Components/products/brands/brands.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './Components/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PagenotfoundComponent,
    AddproductComponent,
    GetproductsComponent,
    ProductdetailsComponent,
    BrandsComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
