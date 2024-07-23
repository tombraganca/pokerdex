import { Component, inject, OnInit, Signal } from '@angular/core';
import { CardsService } from '../card/cards.service';

import { toSignal } from '@angular/core/rxjs-interop'
import { Pokemon } from '../card/card';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, CardPokemonComponent],
  providers: [CardsService, HttpClient],
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {

  cards!: Signal<Pokemon[] | undefined>;

  constructor(private readonly cardsService: CardsService) {
    this.cards = toSignal(this.cardsService.load());

  }

  ngOnInit() {

  }
}
