import { Component, OnInit } from "@angular/core";
import IProduct from "./productInterface";

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
    // any[] means ANY DATA TYPE
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "./assets/images/leaf_rake.jpg"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "./assets/images/garden_cart.jpg"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2016",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "./assets/images/hammer.jpg"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2016",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "./assets/images/saw.jpg"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "./assets/images/video_game_controller.jpg"
        }
    ];

    // Event handlers.
    // No return type will be shown, thus you write void.
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      console.log('In OnInit');
      
    }
}