import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './esqueleto/footer/footer.component';
import { HeaderComponent } from './esqueleto/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { NavBarComponent } from './esqueleto/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './pages/products-page/gallery/gallery.component';
import { ProductComponent } from './pages/products-page/product/product.component';
import { StarComponent } from './pages/products-page/product/star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ProductsPageComponent,
    ManagementPageComponent,
    NavBarComponent,
    GalleryComponent,
    ProductComponent,
    StarComponent,
    SearchComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
