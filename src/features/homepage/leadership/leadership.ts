import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-leadership',
  imports: [NgOptimizedImage],
  templateUrl: './leadership.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './leadership.scss',
})
export class Leadership {}
