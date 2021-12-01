import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input('rating') rating: number = 0;
  @Input('loading') loading: boolean = false;
  @Output('rate') rateEvent = new EventEmitter<number>();

  hoveredStar = 0;

  constructor() {}

  ngOnInit(): void {}

  range(n: number) {
    return new Array(n).fill(0).map((_, i) => i);
  }

  handleStarHover(star: number) {
    this.hoveredStar = star;
  }

  handleStarMouseout() {
    this.hoveredStar = 0;
  }

  rate(r: number) {
    this.rateEvent.emit(r);
  }
}
