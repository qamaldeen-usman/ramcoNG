import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-legacy',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './legacy.html',
  styleUrl: './legacy.scss',
})
export class Legacy {}
