import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { ProductDetailComponent } from './details/details';
import { ProfileComponent } from './user/user';
import { ContactUs } from './contact-us/contact-us';
import { AboutsUs } from './abouts-us/abouts-us';
import { HomeComponent } from './home/home';
import { Register } from './register/register';
import { LoginComponent } from './login/login';
import { ProductSerach } from './product-serach/product-serach';
import { ProductsComponent, ProductsComponent as productsPage} from './productsAPI/products/products';
import { LoginAuthComponent } from './productsAPI/auth-login/auth-login';
import { authGuard } from './productsAPI/guards/auth-guard';
import { guestGuard } from './productsAPI/guards/guest-guard';
import { ProductsApiSearch } from './productsAPI/products-api-search/products-api-search';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

   { path: 'home',component:HomeComponent},
   { path: 'about',component:AboutsUs},
   { path: 'contact',component:ContactUs},
   { path: 'profile',component:ProfileComponent},
   { path: 'products',component:ProductsComponent,canActivate:[authGuard]},
   { path: 'search',component:ProductsApiSearch},
   { path: 'products/:id',component:ProductDetailComponent},
   { path: 'register',component:Register,canActivate:[guestGuard]},
//    { path: 'login',component:LoginComponent},
   { path: 'login',component:LoginAuthComponent,canActivate:[guestGuard]},


   
   { path: '**', component:NotFound }
];


