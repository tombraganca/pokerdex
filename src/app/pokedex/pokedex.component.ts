import { Component, inject, OnInit, Signal } from '@angular/core';
import { CardsService } from '../card/cards.service';

import { toSignal } from '@angular/core/rxjs-interop'
import { Card } from '../card/card';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  providers: [CardsService, HttpClient],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements OnInit {

  cards!: Signal<{
    name: string;
    id: string;
    image: string;
  }[] | undefined>;

  constructor(private readonly cardsService: CardsService) {
    this.cards = toSignal(this.cardsService.load());
  }

  ngOnInit() {

  }
}
