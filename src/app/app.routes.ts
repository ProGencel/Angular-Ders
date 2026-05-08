import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';

//Uygulamanin yonlendirmeleri burada tutulur (component yonlendirmeleri)

export const routes: Routes = [
  {path: '', component: Login},
  {path: 'register', component: Register}
];
