import { Component } from "@angular/core";

// The decorator is where all your metadata goes.
// NOTE: Decorator is a function, so you begin with parentheses.
@Component({
  // The selector gives the component a position in the structure. This component is the root component.
  selector: 'pm-root',
  // The template value will tell is what is rendered from this component.
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = "Monty Python Garden Tool Shop"
}