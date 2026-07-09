import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-image-comparison-slider',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './image-comparison-slider.html',
})
export class ImageComparisonSlider {
  @Input({ required: true }) beforeImage!: string;
  @Input({ required: true }) afterImage!: string;
  @Input() labelBefore: string = 'Antes';
  @Input() labelAfter: string = 'Después';
  @Input() title: string = '';
  @Input() beforeStyle?: { [key: string]: any };
  @Input() afterStyle?: { [key: string]: any };

  sliderPosition: number = 50;

  onSliderInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.sliderPosition = Number(input.value);
  }
}
