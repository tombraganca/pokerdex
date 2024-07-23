import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../card/card';
import { NgIf, provideImgixLoader } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  providers: [
    provideImgixLoader('https://images.pokemontcg.io'),
  ],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss'
})
export class CardPokemonComponent {

  imageLoaded = false;

  @Input({ required: true }) pokemon: Pokemon | undefined;

  onLoad() {
    this.imageLoaded = true;
  }

  onError() {
    this.imageLoaded = true;
  }

}
