import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// formsModule needs to be imported in order to use ngModel.
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product_list.component';
import ConvertToSpacesPipe from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

// A MODULE is a class with an NgModule decorator
// It's purpose is:
  // to organise the peieces of the application.
  // arrange them into blocks.
  // extend our application with capabilities from external libraries. 
  // provide a template resolution environment.
  // aggregate and re-export.

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // PLEASE NOTE: THIS ORDER IS IMPORTANT
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
          canActivate: [ ProductDetailGuard ],
          component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  // Every app must at least bootstrap one component.
  // The boostrap array must always be declared in the root application module.
  bootstrap: [AppComponent]
})
export class AppModule { }
