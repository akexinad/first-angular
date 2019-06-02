import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

// A MODULE is a class with an NgModule decorator
// It's purpose is:
  // to organise the peieces of the application.
  // arrange them into blocks.
  // extend our application with capabilities from external libraries. 
  // provide a template resolution environment.
  // aggregate and re-export.

@NgModule({
  // DECLARATIONS.
  // Every component, directive and pipe must belong to one AND ONLY ONE angular module.
  // Only declare directives, components and pipes.
  // All directives, components and pipes are private by default.
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      
    ]),
    ProductModule
  ],
  // Every app must at least bootstrap one component.
  // The boostrap array must always be declared in the root application module.
  bootstrap: [AppComponent]
})
export class AppModule { }
