import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { Card } from "./card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly API = `https://api.pokemontcg.io/v2/cards`;
  private readonly isLocal = true;
  private readonly httpClient = inject(HttpClient);

  load() {
    return this.httpClient.get<{ data: Card[] }>(this.API).pipe(
      shareReplay(),
      map(({ data }) => data.map(card => ({
        name: card.name,
        id: card.id,
        image: card.images.small,
      })))
    )
  }

}
