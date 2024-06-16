import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-back-link',
  standalone: true,
  imports: [RouterLink, NgIcon],
  templateUrl: './back-link.component.html',
  styleUrl: './back-link.component.css',
})
export class BackLinkComponent {
  @Input() path = '../';
}
