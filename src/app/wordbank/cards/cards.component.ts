import { Component } from '@angular/core';
import { BackLinkComponent } from '../../back-link/back-link.component';
import { NgIcon } from '@ng-icons/core';
import {Card} from "../../models";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [BackLinkComponent, NgIcon],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  cardsList: Card[] = []
}
