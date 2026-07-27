import { Component, ChangeDetectionStrategy } from '@angular/core';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly form = form;
}
