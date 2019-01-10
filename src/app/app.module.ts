import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { ContactComponent } from './routes/contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './routes/products/products.component';
import { CartComponent } from './routes/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySectionComponent,
    ProductItemComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'products', component: ProductsComponent},
      { path:'cart', component: CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
