import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { ProductDetailComponent } from './details/details';
import { ProductsComponent } from './models/models';
import { ProfileComponent } from './user/user';
import { ContactUs } from './contact-us/contact-us';
import { AboutsUs } from './abouts-us/abouts-us';
import { HomeComponent } from './home/home';
import { Register } from './register/register';
import { LoginComponent } from './login/login';
import { ProductSerach } from './product-serach/product-serach';
import { ProductApiComponent } from './productsAPI/products/products';
import { LoginAuthComponent } from './productsAPI/auth-login/auth-login';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

   { path: 'home',component:HomeComponent},
   { path: 'about',component:AboutsUs},
   { path: 'contact',component:ContactUs},
   { path: 'profile',component:ProfileComponent},
   { path: 'productsApi',component:ProductApiComponent},
   { path: 'search',component:ProductSerach},
   { path: 'products/:id',component:ProductDetailComponent},
   { path: 'register',component:Register},
//    { path: 'login',component:LoginComponent},
   { path: 'login',component:LoginAuthComponent},


   
   { path: '**', component:NotFound }
];


