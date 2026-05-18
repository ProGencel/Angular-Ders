import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { MainLayout } from './layout/main-layout/main-layout';
import { Products } from './products/products';
import { authGuard } from './auth-guard';
import { notAuthGuard } from './not-auth-guard';
import { Notes } from './notes/notes';
import { ProducSearch } from './product-search/product-search';
import { ProductDetail } from './product-detail/product-detail';

//Uygulamanin yonlendirmeleri burada tutulur (component yonlendirmeleri)

export const routes: Routes = [
  {path: '', component: Login, canActivate: [notAuthGuard]},
  {path: 'register', component: Register, canActivate: [notAuthGuard]},
  {
    path:'', //Burasi asagidaki products notes gibi path lerin sonuna gelecek kisim
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {path: 'products', component: Products},
      {path: 'notes', component: Notes},
      {path: 'products/:id', component: ProductDetail},
      {path: 'product-search', component: ProducSearch},
    ]
  }
];
