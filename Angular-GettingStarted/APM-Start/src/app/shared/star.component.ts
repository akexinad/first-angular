import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    // First we call the @Output decorator to create an EventEmitter called ratingClicked.
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    // Second: Create the onClick() event and attach it to the html template where necessary. Decide what data needs to be emitted from this event. From here we go the parent product list component html template where you attach will attach the ratingClicked() function accordingly
    onClick(): void {
        this.ratingClicked.emit(`The rating ${ this.rating } was clicked!`);
    }
}