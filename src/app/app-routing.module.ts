import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazyLoaging
  {
    path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'products',
    loadChildren:()=>import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'post',
    loadChildren:()=>import('./modules/post/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
