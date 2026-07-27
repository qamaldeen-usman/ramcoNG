import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgOptimizedImage],
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './team.scss',
})
export class Team {}
