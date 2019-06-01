import { Component, OnInit } from "@angular/core";
import IProduct from "./productInterface";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product_list.component.html',
    styleUrls: [ './product_list.component.css' ]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    // Below are two examples of property binding.
    imageWidth: number = 50;
    imageMargin: number = 2;
    // Event flags
    showImage: boolean = true;

    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
      
    }

    // Third: Where necessary attach the RatingClicked() event, give it another name, such as onRatingClicked() below and pass in the $event argument so the data passed from the start component is visible to the parent product list component.
    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
 
      return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // Event handlers.
    // No return type will be shown, thus you write void.
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
    }
}