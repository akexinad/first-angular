import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
import { ProductListComponent } from './product_list.component';
import { ProductDetailComponent } from './product-detail.component';

import ConvertToSpacesPipe from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
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
    ]),
    SharedModule
  ]
})
export class ProductModule { }
