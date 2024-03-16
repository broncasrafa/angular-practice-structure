import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
