import { Component } from "@angular/core";

// The decorator is where all your metadata goes.
// NOTE: Decorator is a function, so you begin with parentheses.
@Component({
  // The selector gives the component a position in the structure. This component is the root component.
  selector: 'pm-root',
  // The template value will tell is what is rendered from this component.
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']" >Home</a></li>
        <li><a class="nav-link" [routerLink]="['/products']" >Product List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = "The Monty Python Garden Tool Shop"
}