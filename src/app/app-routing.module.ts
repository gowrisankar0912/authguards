import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AddproductComponent } from './Components/products/addproduct/addproduct.component';
import { GetproductsComponent } from './Components/products/getproducts/getproducts.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ProductdetailsComponent } from './Components/products/productdetails/productdetails.component';
import { Guards } from './Service/guards';
import { BrandsComponent } from './Components/products/brands/brands.component';
import { ApiComponent } from './Components/api/api.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [Guards],
    children: [{ path: 'brands', component: BrandsComponent }],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'addproduct',
    component: AddproductComponent,
    canActivate: [Guards],
    canDeactivate: [Guards],
  },
  {
    path: 'getproducts',
    component: GetproductsComponent,
    canActivate: [Guards],
    canActivateChild: [Guards],
    children: [{ path: 'brands', component: BrandsComponent }],
  },
  {
    path: 'getproducts/:id',
    component: ProductdetailsComponent,
    canActivate: [Guards],
  },
  { path: 'api', component: ApiComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
