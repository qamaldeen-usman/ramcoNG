import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-legacy',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './legacy.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './legacy.scss',
})
export class Legacy {}
