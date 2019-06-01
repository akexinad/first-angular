import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// formsModule needs to be imported in order to use ngModel.
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product_list.component';
import ConvertToSpacesPipe from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
