import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// formsModule needs to be imported in order to use ngModel.
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
import { ProductListComponent } from './product_list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';

import ConvertToSpacesPipe from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
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
  ]
})
export class ProductModule { }
