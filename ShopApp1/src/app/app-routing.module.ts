import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { CardComponent } from './component/card/card.component';
import { ProductsComponent } from './component/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'products', pathMatch:'full'},
  {path:'products',component:ProductsComponent,},
  {path:'card',component:CardComponent,},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
