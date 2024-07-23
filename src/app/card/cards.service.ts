import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Pokemon } from "./card";
import { map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private readonly API = `https://api.pokemontcg.io/v2/cards`;
  private readonly httpClient = inject(HttpClient);

  load() {
    return of(this.retorno as Pokemon[] );
    return this.httpClient.get<{ data: Pokemon[] }>(this.API).pipe(
      map(response => response.data)
    )
  }

  retorno = [

    {
      "id": "hgss4-1",
      "name": "Aggron",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Metal"
      ],
      "evolvesFrom": "Lairon",
      "attacks": [
        {
          "name": "Second Strike",
          "cost": [
            "Metal",
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage."
        },
        {
          "name": "Guard Claw",
          "cost": [
            "Metal",
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance)."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "hgss4",
        "name": "HS—Triumphant",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 102,
        "total": 103,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TM",
        "releaseDate": "2010/11/03",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss4/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.",
      "nationalPokedexNumbers": [
        306
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss4/1.png",
        "large": "https://images.pokemontcg.io/hgss4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.69,
            "mid": 2.99,
            "high": 3.95,
            "market": 3,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.99,
            "mid": 2.43,
            "high": 4.8,
            "market": 2.4,
            "directLow": 2.75
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.33,
          "lowPrice": 0.3,
          "trendPrice": 1.63,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.83,
          "reverseHoloLow": 0.8,
          "reverseHoloTrend": 2.79,
          "lowPriceExPlus": 1.3,
          "avg1": 1.19,
          "avg7": 1.87,
          "avg30": 3.72,
          "reverseHoloAvg1": 3.2,
          "reverseHoloAvg7": 2.85,
          "reverseHoloAvg30": 2.97
        }
      }
    },
    {
      "id": "xy5-1",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Multiply",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy5",
        "name": "Primal Clash",
        "series": "XY",
        "printedTotal": 160,
        "total": 164,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PRC",
        "releaseDate": "2015/02/04",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy5/symbol.png",
          "logo": "https://images.pokemontcg.io/xy5/logo.png"
        }
      },
      "number": "1",
      "artist": "Midori Harada",
      "rarity": "Common",
      "flavorText": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy5/1.png",
        "large": "https://images.pokemontcg.io/xy5/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.15,
            "high": 2,
            "market": 0.12,
            "directLow": 0.07
          },
          "reverseHolofoil": {
            "low": 0.23,
            "mid": 0.49,
            "high": 20.34,
            "market": 0.61,
            "directLow": 1
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.11,
          "lowPrice": 0.02,
          "trendPrice": 0.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.25,
          "reverseHoloLow": 0.12,
          "reverseHoloTrend": 0.72,
          "lowPriceExPlus": 0.02,
          "avg1": 0.05,
          "avg7": 0.1,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.99,
          "reverseHoloAvg7": 0.54,
          "reverseHoloAvg30": 0.48
        }
      }
    },
    {
      "id": "pl1-1",
      "name": "Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "57",
      "hp": "130",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flaaffy",
      "abilities": [
        {
          "name": "Damage Bind",
          "text": "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Gigavolt",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30+",
          "text": "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Reflect Energy",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+30"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pl1",
        "name": "Platinum",
        "series": "Platinum",
        "printedTotal": 127,
        "total": 133,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PL",
        "releaseDate": "2009/02/11",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
          "logo": "https://images.pokemontcg.io/pl1/logo.png"
        }
      },
      "number": "1",
      "artist": "Atsuko Nishida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl1/1.png",
        "large": "https://images.pokemontcg.io/pl1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4,
            "mid": 5.53,
            "high": 16.23,
            "market": 12.98,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4,
            "mid": 5.47,
            "high": 8.39,
            "market": 6.41,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.87,
          "lowPrice": 0.6,
          "trendPrice": 3.99,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 2.13,
          "lowPriceExPlus": 1.5,
          "avg1": 1.5,
          "avg7": 4.2,
          "avg30": 3.48,
          "reverseHoloAvg1": 1,
          "reverseHoloAvg7": 1.74,
          "reverseHoloAvg30": 3.09
        }
      }
    },
    {
      "id": "dp3-1",
      "name": "Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "52",
      "hp": "130",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flaaffy",
      "abilities": [
        {
          "name": "Jamming",
          "text": "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Cluster Bolt",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+30"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "dp3",
        "name": "Secret Wonders",
        "series": "Diamond & Pearl",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SW",
        "releaseDate": "2007/11/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp3/symbol.png",
          "logo": "https://images.pokemontcg.io/dp3/logo.png"
        }
      },
      "number": "1",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "flavorText": "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp3/1.png",
        "large": "https://images.pokemontcg.io/dp3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.2,
            "mid": 14.81,
            "high": 44.99,
            "market": 15.38,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.88,
            "mid": 4.52,
            "high": 15.5,
            "market": 12.3,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.02,
          "lowPrice": 0.09,
          "trendPrice": 1.52,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 6,
          "reverseHoloLow": 0.29,
          "reverseHoloTrend": 2.57,
          "lowPriceExPlus": 1.49,
          "avg1": 0.75,
          "avg7": 0.92,
          "avg30": 1.31,
          "reverseHoloAvg1": 6,
          "reverseHoloAvg7": 3.23,
          "reverseHoloAvg30": 2.99
        }
      }
    },
    {
      "id": "det1-1",
      "name": "Bulbasaur",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Ivysaur"
      ],
      "attacks": [
        {
          "name": "Find a Friend",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "det1",
        "name": "Detective Pikachu",
        "series": "Sun & Moon",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DET",
        "releaseDate": "2019/04/05",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/det1/symbol.png",
          "logo": "https://images.pokemontcg.io/det1/logo.png"
        }
      },
      "number": "1",
      "artist": "MPC Film",
      "rarity": "Common",
      "flavorText": "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      "nationalPokedexNumbers": [
        1
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/det1/1.png",
        "large": "https://images.pokemontcg.io/det1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/det1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.19,
            "mid": 0.4,
            "high": 5.03,
            "market": 0.3,
            "directLow": 0.26
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/det1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.24,
          "lowPrice": 0.02,
          "trendPrice": 0.25,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.48,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.5,
          "lowPriceExPlus": 0.02,
          "avg1": 0.39,
          "avg7": 0.32,
          "avg30": 0.3,
          "reverseHoloAvg1": 0.6,
          "reverseHoloAvg7": 0.46,
          "reverseHoloAvg30": 0.41
        }
      }
    },
    {
      "id": "dv1-1",
      "name": "Dratini",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Dragon"
      ],
      "evolvesTo": [
        "Dragonair"
      ],
      "attacks": [
        {
          "name": "Wrap",
          "cost": [
            "Grass",
            "Lightning"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Dragon",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dv1",
        "name": "Dragon Vault",
        "series": "Black & White",
        "printedTotal": 20,
        "total": 21,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRV",
        "releaseDate": "2012/10/05",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dv1/symbol.png",
          "logo": "https://images.pokemontcg.io/dv1/logo.png"
        }
      },
      "number": "1",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "flavorText": "It is called the \"Mirage Pokémon\" because so few have seen it. Its shed skin has been found.",
      "nationalPokedexNumbers": [
        147
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dv1/1.png",
        "large": "https://images.pokemontcg.io/dv1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dv1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.75,
            "mid": 1.31,
            "high": 6.58,
            "market": 1.35,
            "directLow": 0.87
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dv1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.45,
          "lowPrice": 0.15,
          "trendPrice": 1.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.5,
          "reverseHoloLow": 0.29,
          "reverseHoloTrend": 1.45,
          "lowPriceExPlus": 0.25,
          "avg1": 0.75,
          "avg7": 1.86,
          "avg30": 1.87,
          "reverseHoloAvg1": 0.5,
          "reverseHoloAvg7": 0.93,
          "reverseHoloAvg30": 1.08
        }
      }
    },
    {
      "id": "mcd19-1",
      "name": "Caterpie",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Metapod"
      ],
      "attacks": [
        {
          "cost": [
            "Grass"
          ],
          "name": "Surprise Attack",
          "text": "Flip a coin. If tails, this attack does nothing.",
          "damage": "20",
          "convertedEnergyCost": 1
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "mcd19",
        "name": "McDonald's Collection 2019",
        "series": "Other",
        "printedTotal": 12,
        "total": 12,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "releaseDate": "2019/10/15",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/mcd19/symbol.png",
          "logo": "https://images.pokemontcg.io/mcd19/logo.png"
        }
      },
      "number": "1",
      "artist": "Sekio",
      "flavorText": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
      "nationalPokedexNumbers": [
        10
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/mcd19/1.png",
        "large": "https://images.pokemontcg.io/mcd19/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/mcd19-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.2,
            "mid": 5.39,
            "high": 6.02,
            "market": 5.8,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/mcd19-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.23,
          "lowPrice": 0.02,
          "trendPrice": 1.53,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 1.71,
          "lowPriceExPlus": 1.69,
          "avg1": 1,
          "avg7": 1.64,
          "avg30": 1.98,
          "reverseHoloAvg1": 0.5,
          "reverseHoloAvg7": 1.71,
          "reverseHoloAvg30": 1.37
        }
      }
    },
    {
      "id": "pl3-1",
      "name": "Absol G",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "SP"
      ],
      "level": "59",
      "hp": "70",
      "types": [
        "Darkness"
      ],
      "attacks": [
        {
          "name": "Feint Attack",
          "cost": [
            "Darkness"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."
        },
        {
          "name": "Doom News",
          "cost": [
            "Darkness",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pl3",
        "name": "Supreme Victors",
        "series": "Platinum",
        "printedTotal": 147,
        "total": 153,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SV",
        "releaseDate": "2009/08/19",
        "updatedAt": "2018/03/07 22:40:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl3/symbol.png",
          "logo": "https://images.pokemontcg.io/pl3/logo.png"
        }
      },
      "number": "1",
      "artist": "Yusuke Ishikawa",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        359
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl3/1.png",
        "large": "https://images.pokemontcg.io/pl3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3,
            "mid": 6.25,
            "high": 12.95,
            "market": 7.48,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 3,
            "mid": 6.59,
            "high": 10.96,
            "market": 8.1,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.56,
          "lowPrice": 1.99,
          "trendPrice": 7,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 6.25,
          "reverseHoloLow": 2,
          "reverseHoloTrend": 7.92,
          "lowPriceExPlus": 2.85,
          "avg1": 2.5,
          "avg7": 6.28,
          "avg30": 7.26,
          "reverseHoloAvg1": 4.85,
          "reverseHoloAvg7": 5.74,
          "reverseHoloAvg30": 6.55
        }
      }
    },
    {
      "id": "ex12-1",
      "name": "Aerodactyl",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Mysterious Fossil",
      "abilities": [
        {
          "name": "Reactive Protection",
          "text": "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Power Blow",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl."
        },
        {
          "name": "Speed Stroke",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "set": {
        "id": "ex12",
        "name": "Legend Maker",
        "series": "EX",
        "printedTotal": 92,
        "total": 93,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LM",
        "releaseDate": "2006/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex12/symbol.png",
          "logo": "https://images.pokemontcg.io/ex12/logo.png"
        }
      },
      "number": "1",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        142
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex12/1.png",
        "large": "https://images.pokemontcg.io/ex12/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex12-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 15.99,
            "mid": 17.85,
            "high": 30,
            "market": 18.59,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 17.01,
            "mid": 26.82,
            "high": 39.97,
            "market": 36.25,
            "directLow": 39.97
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex12-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.01,
          "lowPrice": 2,
          "trendPrice": 8.24,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 15.5,
          "reverseHoloLow": 3,
          "reverseHoloTrend": 25.02,
          "lowPriceExPlus": 6,
          "avg1": 16,
          "avg7": 6.99,
          "avg30": 7.56,
          "reverseHoloAvg1": 80,
          "reverseHoloAvg7": 24.71,
          "reverseHoloAvg30": 24.61
        }
      }
    },
    {
      "id": "ex3-1",
      "name": "Absol",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Darkness"
      ],
      "attacks": [
        {
          "name": "Bad News",
          "cost": [
            "Darkness"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose."
        },
        {
          "name": "Prize Count",
          "cost": [
            "Darkness",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20+",
          "text": "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex3",
        "name": "Dragon",
        "series": "EX",
        "printedTotal": 97,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DR",
        "releaseDate": "2003/11/24",
        "updatedAt": "2023/02/16 05:47:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex3/symbol.png",
          "logo": "https://images.pokemontcg.io/ex3/logo.png"
        }
      },
      "number": "1",
      "artist": "Naoyo Kimura",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        359
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex3/1.png",
        "large": "https://images.pokemontcg.io/ex3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 21.36,
            "mid": 42.54,
            "high": 47.06,
            "market": 36.29,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 9,
            "mid": 19.51,
            "high": 27.09,
            "market": 21.46,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 16.33,
          "lowPrice": 1.97,
          "trendPrice": 21.32,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.5,
          "reverseHoloLow": 1.97,
          "reverseHoloTrend": 22.4,
          "lowPriceExPlus": 5.99,
          "avg1": 10,
          "avg7": 17.94,
          "avg30": 18.01,
          "reverseHoloAvg1": 19.5,
          "reverseHoloAvg7": 18.86,
          "reverseHoloAvg30": 16.16
        }
      }
    },
    {
      "id": "ru1-1",
      "name": "Venusaur",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Ivysaur",
      "attacks": [
        {
          "name": "Giga Drain",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "ru1",
        "name": "Pokémon Rumble",
        "series": "Other",
        "printedTotal": 16,
        "total": 16,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/12/02",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ru1/symbol.png",
          "logo": "https://images.pokemontcg.io/ru1/logo.png"
        }
      },
      "number": "1",
      "artist": "Pokemon Rumble",
      "nationalPokedexNumbers": [
        3
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ru1/1.png",
        "large": "https://images.pokemontcg.io/ru1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ru1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 60,
            "mid": 69.99,
            "high": 105.66,
            "market": 40,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ru1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 17.99,
          "lowPrice": 18.99,
          "trendPrice": 38.55,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 11.03,
          "lowPriceExPlus": 25,
          "avg1": 17.99,
          "avg7": 63.25,
          "avg30": 40.37,
          "reverseHoloAvg1": 22.84,
          "reverseHoloAvg7": 11.09,
          "reverseHoloAvg30": 5.39
        }
      }
    },
    {
      "id": "ecard2-H1",
      "name": "Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flaaffy",
      "attacks": [
        {
          "name": "Thundershock",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Reflect Energy",
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ecard2",
        "name": "Aquapolis",
        "series": "E-Card",
        "printedTotal": 147,
        "total": 182,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AQ",
        "releaseDate": "2003/01/15",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ecard2/symbol.png",
          "logo": "https://images.pokemontcg.io/ecard2/logo.png"
        }
      },
      "number": "H1",
      "artist": "Shin-ichi Yoshida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ecard2/H1.png",
        "large": "https://images.pokemontcg.io/ecard2/H1_hires.png"
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ecard2-H1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 27.99,
          "lowPrice": 8,
          "trendPrice": 32.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 14.11,
          "lowPriceExPlus": 35,
          "avg1": 19,
          "avg7": 26.86,
          "avg30": 29.4,
          "reverseHoloAvg1": 39.99,
          "reverseHoloAvg7": 18.13,
          "reverseHoloAvg30": 18.1
        }
      }
    },
    {
      "id": "base4-1",
      "name": "Alakazam",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "42",
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Kadabra",
      "abilities": [
        {
          "name": "Damage Swap",
          "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Confuse Ray",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base4",
        "name": "Base Set 2",
        "series": "Base",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "B2",
        "releaseDate": "2000/02/24",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base4/symbol.png",
          "logo": "https://images.pokemontcg.io/base4/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
      "nationalPokedexNumbers": [
        65
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base4/1.png",
        "large": "https://images.pokemontcg.io/base4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 16.5,
            "mid": 25,
            "high": 159.99,
            "market": 25.57,
            "directLow": 24.69
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 32.63,
          "lowPrice": 6,
          "trendPrice": 36.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 22.63,
          "lowPriceExPlus": 20,
          "avg1": 16,
          "avg7": 28.1,
          "avg30": 26.13,
          "reverseHoloAvg1": 19.95,
          "reverseHoloAvg7": 22.81,
          "reverseHoloAvg30": 21.3
        }
      }
    },
    {
      "id": "hgss1-1",
      "name": "Arcanine",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "110",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Growlithe",
      "attacks": [
        {
          "name": "Sharp Fang",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "50",
          "text": ""
        },
        {
          "name": "Fire Mane",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "90",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "hgss1",
        "name": "HeartGold & SoulSilver",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 123,
        "total": 124,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HS",
        "releaseDate": "2010/02/10",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss1/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss1/logo.png"
        }
      },
      "number": "1",
      "artist": "Naoki Saito",
      "rarity": "Rare Holo",
      "flavorText": "This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane.",
      "nationalPokedexNumbers": [
        59
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss1/1.png",
        "large": "https://images.pokemontcg.io/hgss1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 14.97,
            "mid": 22.99,
            "high": 35,
            "market": 26.32,
            "directLow": 26.6
          },
          "reverseHolofoil": {
            "low": 10.5,
            "mid": 23.38,
            "high": 46.12,
            "market": 23.38,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.61,
          "lowPrice": 0.45,
          "trendPrice": 6.28,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 5.38,
          "reverseHoloLow": 0.59,
          "reverseHoloTrend": 5.59,
          "lowPriceExPlus": 1.5,
          "avg1": 5,
          "avg7": 7.11,
          "avg30": 4.93,
          "reverseHoloAvg1": 7.99,
          "reverseHoloAvg7": 7,
          "reverseHoloAvg30": 5.36
        }
      }
    },
    {
      "id": "ex11-1",
      "name": "Beedrill δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "90",
      "types": [
        "Grass",
        "Metal"
      ],
      "evolvesFrom": "Kakuna",
      "rules": [
        "This Pokémon is both Grass Metal type."
      ],
      "abilities": [
        {
          "name": "Final Sting",
          "text": "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending Pokémon. That Pokémon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Super Slash",
          "cost": [
            "Grass",
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50+",
          "text": "If the Defending Pokémon is an Evolved Pokémon, this attack does 50 damage plus 30 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "set": {
        "id": "ex11",
        "name": "Delta Species",
        "series": "EX",
        "printedTotal": 113,
        "total": 114,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DS",
        "releaseDate": "2005/10/31",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex11/symbol.png",
          "logo": "https://images.pokemontcg.io/ex11/logo.png"
        }
      },
      "number": "1",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        15
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex11/1.png",
        "large": "https://images.pokemontcg.io/ex11/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex11-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 12.99,
            "mid": 16.97,
            "high": 25.18,
            "market": 15.87,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 12.43,
            "mid": 22.01,
            "high": 26.99,
            "market": 19.27,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex11-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.5,
          "lowPrice": 2,
          "trendPrice": 7.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7.78,
          "reverseHoloLow": 2.5,
          "reverseHoloTrend": 10.24,
          "lowPriceExPlus": 5,
          "avg1": 2.5,
          "avg7": 6.95,
          "avg30": 7.91,
          "reverseHoloAvg1": 9.25,
          "reverseHoloAvg7": 10.01,
          "reverseHoloAvg30": 9.82
        }
      }
    },
    {
      "id": "ex7-1",
      "name": "Azumarill",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Marill",
      "abilities": [
        {
          "name": "Froth",
          "text": "Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Water Punch",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20+",
          "text": "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex7",
        "name": "Team Rocket Returns",
        "series": "EX",
        "printedTotal": 109,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TRR",
        "releaseDate": "2004/11/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex7/symbol.png",
          "logo": "https://images.pokemontcg.io/ex7/logo.png"
        }
      },
      "number": "1",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        184
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex7/1.png",
        "large": "https://images.pokemontcg.io/ex7/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 13.75,
            "mid": 17.57,
            "high": 29.99,
            "market": 21.49,
            "directLow": 16.55
          },
          "reverseHolofoil": {
            "low": 27.49,
            "mid": 28.72,
            "high": 51.98,
            "market": 27.49,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 10.33,
          "lowPrice": 0.98,
          "trendPrice": 10.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 25,
          "reverseHoloLow": 8,
          "reverseHoloTrend": 14.5,
          "lowPriceExPlus": 2,
          "avg1": 3.95,
          "avg7": 9.63,
          "avg30": 6.59,
          "reverseHoloAvg1": 25,
          "reverseHoloAvg7": 13.04,
          "reverseHoloAvg30": 12
        }
      }
    },
    {
      "id": "gym1-1",
      "name": "Blaine's Moltres",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "44",
      "hp": "90",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Phoenix Flame",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 5,
          "damage": "90",
          "text": "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage)."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "gym1",
        "name": "Gym Heroes",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G1",
        "releaseDate": "2000/08/14",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym1/symbol.png",
          "logo": "https://images.pokemontcg.io/gym1/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        146
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym1/1.png",
        "large": "https://images.pokemontcg.io/gym1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 182.8,
            "mid": 186.49,
            "high": 186.49,
            "market": 171.33,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 31.82,
            "mid": 44.99,
            "high": 63.25,
            "market": 60.14,
            "directLow": 44.99
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 43.66,
          "lowPrice": 12,
          "trendPrice": 56.22,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 39.55,
          "lowPriceExPlus": 27.9,
          "avg1": 62.75,
          "avg7": 46.05,
          "avg30": 50.39,
          "reverseHoloAvg1": 29.99,
          "reverseHoloAvg7": 46.31,
          "reverseHoloAvg30": 39.25
        }
      }
    },
    {
      "id": "base3-1",
      "name": "Aerodactyl",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "28",
      "hp": "60",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Mysterious Fossil",
      "abilities": [
        {
          "name": "Prehistoric Power",
          "text": "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Wing Attack",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "base3",
        "name": "Fossil",
        "series": "Base",
        "printedTotal": 62,
        "total": 62,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "FO",
        "releaseDate": "1999/10/10",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base3/symbol.png",
          "logo": "https://images.pokemontcg.io/base3/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "A ferocious prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.",
      "nationalPokedexNumbers": [
        142
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base3/1.png",
        "large": "https://images.pokemontcg.io/base3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 44,
            "mid": 63.85,
            "high": 79.99,
            "market": 63.97,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 11,
            "mid": 15.06,
            "high": 33.29,
            "market": 20.75,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 36.62,
          "lowPrice": 2.5,
          "trendPrice": 36.89,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 15.82,
          "lowPriceExPlus": 8.97,
          "avg1": 14.5,
          "avg7": 18.92,
          "avg30": 24.61,
          "reverseHoloAvg1": 19.9,
          "reverseHoloAvg7": 15.6,
          "reverseHoloAvg30": 18.73
        }
      }
    },
    {
      "id": "sm9-1",
      "name": "Celebi & Venusaur-GX",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "TAG TEAM",
        "GX"
      ],
      "hp": "270",
      "types": [
        "Grass"
      ],
      "rules": [
        "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards."
      ],
      "attacks": [
        {
          "name": "Pollen Hazard",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned."
        },
        {
          "name": "Solar Beam",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "150",
          "text": ""
        },
        {
          "name": "Evergreen-GX",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "180",
          "text": "Heal all damage from this Pokémon. If this Pokémon has at least 1 extra Grass Energy attached to it (in addition to this attack's cost), shuffle all cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "sm9",
        "name": "Team Up",
        "series": "Sun & Moon",
        "printedTotal": 181,
        "total": 198,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "TEU",
        "releaseDate": "2019/02/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm9/symbol.png",
          "logo": "https://images.pokemontcg.io/sm9/logo.png"
        }
      },
      "number": "1",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo GX",
      "nationalPokedexNumbers": [
        3,
        251
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm9/1.png",
        "large": "https://images.pokemontcg.io/sm9/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 7.88,
            "mid": 11.07,
            "high": 18,
            "market": 11.48,
            "directLow": 16.99
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 14.19,
          "lowPrice": 4,
          "trendPrice": 15.47,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 5.88,
          "lowPriceExPlus": 5,
          "avg1": 10,
          "avg7": 17.11,
          "avg30": 12.15,
          "reverseHoloAvg1": 6.46,
          "reverseHoloAvg7": 6.39,
          "reverseHoloAvg30": 7.36
        }
      }
    },
    {
      "id": "xy2-1",
      "name": "Caterpie",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Metapod"
      ],
      "abilities": [
        {
          "name": "Adaptive Evolution",
          "text": "This Pokémon can evolve during your first turn or the turn you play it.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Bug Bite",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy2",
        "name": "Flashfire",
        "series": "XY",
        "printedTotal": 106,
        "total": 110,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FLF",
        "releaseDate": "2014/05/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy2/symbol.png",
          "logo": "https://images.pokemontcg.io/xy2/logo.png"
        }
      },
      "number": "1",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Common",
      "flavorText": "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
      "nationalPokedexNumbers": [
        10
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy2/1.png",
        "large": "https://images.pokemontcg.io/xy2/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.19,
            "high": 2.04,
            "market": 0.12,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.15,
            "mid": 0.46,
            "high": 3.05,
            "market": 0.53,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.06,
          "lowPrice": 0.02,
          "trendPrice": 0.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.4,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.45,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.06,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.4,
          "reverseHoloAvg7": 0.38,
          "reverseHoloAvg30": 0.4
        }
      }
    },
    {
      "id": "pop6-1",
      "name": "Bastiodon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "51",
      "hp": "130",
      "types": [
        "Metal"
      ],
      "evolvesFrom": "Shieldon",
      "abilities": [
        {
          "name": "Protective Wall",
          "text": "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Anger Revenge",
          "cost": [
            "Metal",
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "+40"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pop6",
        "name": "POP Series 6",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/09/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop6/symbol.png",
          "logo": "https://images.pokemontcg.io/pop6/logo.png"
        }
      },
      "number": "1",
      "artist": "Kazuyuki Kano",
      "rarity": "Rare",
      "flavorText": "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.",
      "nationalPokedexNumbers": [
        411
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop6/1.png",
        "large": "https://images.pokemontcg.io/pop6/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop6-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 1,
            "mid": 1.45,
            "high": 4.99,
            "market": 1.44,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop6-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.25,
          "lowPrice": 0.49,
          "trendPrice": 1.36,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 0.84,
          "avg1": 2,
          "avg7": 1.21,
          "avg30": 1.39,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "ecard2-H2",
      "name": "Arcanine",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Growlithe",
      "abilities": [
        {
          "name": "Extreme Speed",
          "text": "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Fire Blow",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30+",
          "text": "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "ecard2",
        "name": "Aquapolis",
        "series": "E-Card",
        "printedTotal": 147,
        "total": 182,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AQ",
        "releaseDate": "2003/01/15",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ecard2/symbol.png",
          "logo": "https://images.pokemontcg.io/ecard2/logo.png"
        }
      },
      "number": "H2",
      "artist": "Kyoko Umemoto",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        59
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ecard2/H2.png",
        "large": "https://images.pokemontcg.io/ecard2/H2_hires.png"
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ecard2-H2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 67.57,
          "lowPrice": 13,
          "trendPrice": 28.31,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 48.34,
          "lowPriceExPlus": 35,
          "avg1": 24,
          "avg7": 67.57,
          "avg30": 90.6,
          "reverseHoloAvg1": 10,
          "reverseHoloAvg7": 56.53,
          "reverseHoloAvg30": 37.03
        }
      }
    },
    {
      "id": "hgss4-2",
      "name": "Altaria",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Swablu",
      "attacks": [
        {
          "name": "Midnight Eyes",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "The Defending Pokémon is now Asleep."
        },
        {
          "name": "Stadium Power",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40+",
          "text": "If there is any Stadium card in play, this attack does 40 damage plus 30 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "set": {
        "id": "hgss4",
        "name": "HS—Triumphant",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 102,
        "total": 103,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TM",
        "releaseDate": "2010/11/03",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss4/logo.png"
        }
      },
      "number": "2",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "flavorText": "It flies gracefully through the sky. Its melodic humming makes you feel like you're in a dream.",
      "nationalPokedexNumbers": [
        334
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss4/2.png",
        "large": "https://images.pokemontcg.io/hgss4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.98,
            "mid": 1.79,
            "high": 3.49,
            "market": 1.78,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.45,
            "mid": 2.5,
            "high": 11.5,
            "market": 1.53,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.61,
          "lowPrice": 0.5,
          "trendPrice": 2.63,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.25,
          "reverseHoloLow": 0.8,
          "reverseHoloTrend": 5.66,
          "lowPriceExPlus": 0.95,
          "avg1": 2,
          "avg7": 2.62,
          "avg30": 2.39,
          "reverseHoloAvg1": 11.2,
          "reverseHoloAvg7": 6.52,
          "reverseHoloAvg30": 3.16
        }
      }
    },
    {
      "id": "pl1-2",
      "name": "Blastoise",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "60",
      "hp": "130",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Wartortle",
      "abilities": [
        {
          "name": "Dig Well",
          "text": "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose as many Water Energy cards as you like, and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Blastoise is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Aqua Press",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20+",
          "text": "Does 20 damage plus 10 more damage for each Energy attached to all Pokémon (both yours and your opponent's)."
        },
        {
          "name": "Double Launcher",
          "cost": [
            "Water",
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "",
          "text": "Discard 2 Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "+30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pl1",
        "name": "Platinum",
        "series": "Platinum",
        "printedTotal": 127,
        "total": 133,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PL",
        "releaseDate": "2009/02/11",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
          "logo": "https://images.pokemontcg.io/pl1/logo.png"
        }
      },
      "number": "2",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        9
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl1/2.png",
        "large": "https://images.pokemontcg.io/pl1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 8.38,
            "mid": 10.81,
            "high": 29.99,
            "market": 17.67,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 10,
            "mid": 12,
            "high": 34.99,
            "market": 11.05,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.61,
          "lowPrice": 1,
          "trendPrice": 7.52,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.99,
          "reverseHoloLow": 2.49,
          "reverseHoloTrend": 4.02,
          "lowPriceExPlus": 5,
          "avg1": 10.25,
          "avg7": 8.71,
          "avg30": 6.54,
          "reverseHoloAvg1": 8.5,
          "reverseHoloAvg7": 4.77,
          "reverseHoloAvg30": 5.1
        }
      }
    },
    {
      "id": "ex3-2",
      "name": "Altaria",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Swablu",
      "attacks": [
        {
          "name": "Dragon Dance",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance)."
        },
        {
          "name": "Dragon Song",
          "cost": [
            "Water",
            "Lightning"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Each Defending Pokémon is now Asleep."
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Grass",
          "value": "-30"
        },
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex3",
        "name": "Dragon",
        "series": "EX",
        "printedTotal": 97,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DR",
        "releaseDate": "2003/11/24",
        "updatedAt": "2023/02/16 05:47:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex3/symbol.png",
          "logo": "https://images.pokemontcg.io/ex3/logo.png"
        }
      },
      "number": "2",
      "artist": "Atsuko Nishida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        334
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex3/2.png",
        "large": "https://images.pokemontcg.io/ex3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 15.26,
            "mid": 19.78,
            "high": 23.95,
            "market": 23.09,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 6.85,
            "mid": 8.09,
            "high": 29.99,
            "market": 6.74,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.92,
          "lowPrice": 1.94,
          "trendPrice": 9.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7.73,
          "reverseHoloLow": 2.25,
          "reverseHoloTrend": 5.99,
          "lowPriceExPlus": 3.99,
          "avg1": 4,
          "avg7": 9.89,
          "avg30": 10.02,
          "reverseHoloAvg1": 13.95,
          "reverseHoloAvg7": 5.84,
          "reverseHoloAvg30": 4.53
        }
      }
    },
    {
      "id": "dp3-2",
      "name": "Blastoise",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "52",
      "hp": "120",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Wartortle",
      "abilities": [
        {
          "name": "Waterlog",
          "text": "Once during your turn (before your attack), you may attach as many basic Water Energy cards from your hand to any of your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Blastoise is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Hydro Pump",
          "cost": [
            "Water",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50+",
          "text": "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "+30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "dp3",
        "name": "Secret Wonders",
        "series": "Diamond & Pearl",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SW",
        "releaseDate": "2007/11/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp3/symbol.png",
          "logo": "https://images.pokemontcg.io/dp3/logo.png"
        }
      },
      "number": "2",
      "artist": "Daisuke Ito",
      "rarity": "Rare Holo",
      "flavorText": "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
      "nationalPokedexNumbers": [
        9
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp3/2.png",
        "large": "https://images.pokemontcg.io/dp3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 15.05,
            "mid": 38.99,
            "high": 45.98,
            "market": 36.49,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 9.66,
            "mid": 14.49,
            "high": 21.08,
            "market": 21.08,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.83,
          "lowPrice": 1.9,
          "trendPrice": 7.24,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 13,
          "reverseHoloLow": 2,
          "reverseHoloTrend": 10.81,
          "lowPriceExPlus": 5,
          "avg1": 4.3,
          "avg7": 7.83,
          "avg30": 8.41,
          "reverseHoloAvg1": 13,
          "reverseHoloAvg7": 10.73,
          "reverseHoloAvg30": 8.97
        }
      }
    },
    {
      "id": "base3-2",
      "name": "Articuno",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "35",
      "hp": "70",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Freeze Dry",
          "cost": [
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Blizzard",
          "cost": [
            "Water",
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "base3",
        "name": "Fossil",
        "series": "Base",
        "printedTotal": 62,
        "total": 62,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "FO",
        "releaseDate": "1999/10/10",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base3/symbol.png",
          "logo": "https://images.pokemontcg.io/base3/logo.png"
        }
      },
      "number": "2",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
      "nationalPokedexNumbers": [
        144
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base3/2.png",
        "large": "https://images.pokemontcg.io/base3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 75,
            "mid": 97.97,
            "high": 126.37,
            "market": 120.16,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 18.99,
            "mid": 28,
            "high": 40.49,
            "market": 31.42,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 34.86,
          "lowPrice": 4.5,
          "trendPrice": 27.19,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 24.47,
          "lowPriceExPlus": 20,
          "avg1": 9.5,
          "avg7": 23.76,
          "avg30": 32.83,
          "reverseHoloAvg1": 20,
          "reverseHoloAvg7": 28.45,
          "reverseHoloAvg30": 25.68
        }
      }
    },
    {
      "id": "pl3-2",
      "name": "Blaziken FB",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "SP"
      ],
      "level": "50",
      "hp": "80",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Luring Flame",
          "cost": [
            "Fire"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned."
        },
        {
          "name": "Vapor Kick",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30+",
          "text": "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pl3",
        "name": "Supreme Victors",
        "series": "Platinum",
        "printedTotal": 147,
        "total": 153,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SV",
        "releaseDate": "2009/08/19",
        "updatedAt": "2018/03/07 22:40:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl3/symbol.png",
          "logo": "https://images.pokemontcg.io/pl3/logo.png"
        }
      },
      "number": "2",
      "artist": "Motofumi Fujiwara",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        257
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl3/2.png",
        "large": "https://images.pokemontcg.io/pl3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 5.1,
            "mid": 8,
            "high": 16.99,
            "market": 9.71,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4.97,
            "mid": 10.89,
            "high": 17.39,
            "market": 13.74,
            "directLow": 4.74
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 4.74,
          "lowPrice": 0.5,
          "trendPrice": 4.99,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 6.88,
          "reverseHoloLow": 1.35,
          "reverseHoloTrend": 4.74,
          "lowPriceExPlus": 2.8,
          "avg1": 3.01,
          "avg7": 3.19,
          "avg30": 4.86,
          "reverseHoloAvg1": 2,
          "reverseHoloAvg7": 5.5,
          "reverseHoloAvg30": 4.33
        }
      }
    },
    {
      "id": "ex11-2",
      "name": "Crobat δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "90",
      "types": [
        "Grass",
        "Metal"
      ],
      "evolvesFrom": "Golbat",
      "rules": [
        "This Pokémon is both Grass Metal type."
      ],
      "attacks": [
        {
          "name": "Radar Jam",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn."
        },
        {
          "name": "Target Attack",
          "cost": [
            "Grass",
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "set": {
        "id": "ex11",
        "name": "Delta Species",
        "series": "EX",
        "printedTotal": 113,
        "total": 114,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DS",
        "releaseDate": "2005/10/31",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex11/symbol.png",
          "logo": "https://images.pokemontcg.io/ex11/logo.png"
        }
      },
      "number": "2",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        169
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex11/2.png",
        "large": "https://images.pokemontcg.io/ex11/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex11-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.9,
            "mid": 6.01,
            "high": 16.79,
            "market": 6.77,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 9.99,
            "mid": 13.39,
            "high": 16.79,
            "market": 13.97,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex11-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.73,
          "lowPrice": 0.25,
          "trendPrice": 1.54,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.48,
          "reverseHoloLow": 1.09,
          "reverseHoloTrend": 21.68,
          "lowPriceExPlus": 2,
          "avg1": 2,
          "avg7": 1.73,
          "avg30": 3.71,
          "reverseHoloAvg1": 1.4,
          "reverseHoloAvg7": 32.4,
          "reverseHoloAvg30": 12.05
        }
      }
    },
    {
      "id": "pop6-2",
      "name": "Lucario",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "30",
      "hp": "90",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Riolu",
      "attacks": [
        {
          "name": "Feint",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "This attack's damage isn't affected by Resistance."
        },
        {
          "name": "Aura Sphere",
          "cost": [
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop6",
        "name": "POP Series 6",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/09/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop6/symbol.png",
          "logo": "https://images.pokemontcg.io/pop6/logo.png"
        }
      },
      "number": "2",
      "artist": "Kouki Saitou",
      "rarity": "Rare",
      "flavorText": "It has the ability to sense the auras of all things. It understands human speech.",
      "nationalPokedexNumbers": [
        448
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop6/2.png",
        "large": "https://images.pokemontcg.io/pop6/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop6-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 1.74,
            "mid": 2.79,
            "high": 9.75,
            "market": 3.88,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop6-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 5,
          "lowPrice": 2,
          "trendPrice": 4.58,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 4.49,
          "avg1": 5,
          "avg7": 6.82,
          "avg30": 5.9,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "xy2-2",
      "name": "Metapod",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Caterpie",
      "evolvesTo": [
        "Butterfree"
      ],
      "abilities": [
        {
          "name": "Adaptive Evolution",
          "text": "This Pokémon can evolve during your first turn or the turn you play it.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Harden",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "xy2",
        "name": "Flashfire",
        "series": "XY",
        "printedTotal": 106,
        "total": 110,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FLF",
        "releaseDate": "2014/05/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy2/symbol.png",
          "logo": "https://images.pokemontcg.io/xy2/logo.png"
        }
      },
      "number": "2",
      "artist": "kawayoo",
      "rarity": "Uncommon",
      "flavorText": "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
      "nationalPokedexNumbers": [
        11
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy2/2.png",
        "large": "https://images.pokemontcg.io/xy2/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.25,
            "high": 2.75,
            "market": 0.2,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.35,
            "mid": 0.5,
            "high": 3.05,
            "market": 0.77,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.14,
          "lowPrice": 0.02,
          "trendPrice": 0.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.2,
          "reverseHoloTrend": 0.59,
          "lowPriceExPlus": 0.02,
          "avg1": 0.2,
          "avg7": 0.15,
          "avg30": 0.3,
          "reverseHoloAvg1": 0.65,
          "reverseHoloAvg7": 0.47,
          "reverseHoloAvg30": 0.72
        }
      }
    },
    {
      "id": "base4-2",
      "name": "Blastoise",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "52",
      "hp": "100",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Wartortle",
      "abilities": [
        {
          "name": "Rain Dance",
          "text": "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Hydro Pump",
          "cost": [
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 3,
          "damage": "40+",
          "text": "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base4",
        "name": "Base Set 2",
        "series": "Base",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "B2",
        "releaseDate": "2000/02/24",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base4/symbol.png",
          "logo": "https://images.pokemontcg.io/base4/logo.png"
        }
      },
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
      "nationalPokedexNumbers": [
        9
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base4/2.png",
        "large": "https://images.pokemontcg.io/base4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 55.08,
            "mid": 73.05,
            "high": 107.99,
            "market": 79.64,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 55.73,
          "lowPrice": 18,
          "trendPrice": 53.7,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 119.54,
          "lowPriceExPlus": 59,
          "avg1": 49,
          "avg7": 53.68,
          "avg30": 55.65,
          "reverseHoloAvg1": 20,
          "reverseHoloAvg7": 132.22,
          "reverseHoloAvg30": 93.91
        }
      }
    },
    {
      "id": "gym1-2",
      "name": "Brock's Rhydon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "38",
      "hp": "80",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Brock's Rhyhorn",
      "evolvesTo": [
        "Rhyperior"
      ],
      "abilities": [
        {
          "name": "Bench Guard",
          "text": "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock's Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Lariat",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": "Flip a coin. If tails, this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Lightning",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "gym1",
        "name": "Gym Heroes",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G1",
        "releaseDate": "2000/08/14",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym1/symbol.png",
          "logo": "https://images.pokemontcg.io/gym1/logo.png"
        }
      },
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        112
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym1/2.png",
        "large": "https://images.pokemontcg.io/gym1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 38,
            "mid": 42.99,
            "high": 93.24,
            "market": 74,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 10.36,
            "mid": 13.75,
            "high": 49.95,
            "market": 15.07,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 16.13,
          "lowPrice": 1.99,
          "trendPrice": 19.48,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 12.12,
          "lowPriceExPlus": 8.99,
          "avg1": 26.75,
          "avg7": 16.89,
          "avg30": 15.39,
          "reverseHoloAvg1": 5.39,
          "reverseHoloAvg7": 11.72,
          "reverseHoloAvg30": 11.03
        }
      }
    },
    {
      "id": "hgss1-2",
      "name": "Azumarill",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Marill",
      "attacks": [
        {
          "name": "Waterfall",
          "cost": [
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": ""
        },
        {
          "name": "Bubblebeam",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "hgss1",
        "name": "HeartGold & SoulSilver",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 123,
        "total": 124,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HS",
        "releaseDate": "2010/02/10",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss1/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss1/logo.png"
        }
      },
      "number": "2",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "flavorText": "When it plays in water, it rolls up its elongated ears to prevent their insides from getting wet.",
      "nationalPokedexNumbers": [
        184
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss1/2.png",
        "large": "https://images.pokemontcg.io/hgss1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.45,
            "mid": 3.72,
            "high": 4.88,
            "market": 4.34,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.23,
            "mid": 1.4,
            "high": 3.4,
            "market": 2.61,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 4.75,
          "lowPrice": 0.1,
          "trendPrice": 3.46,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.1,
          "reverseHoloLow": 0.4,
          "reverseHoloTrend": 2.31,
          "lowPriceExPlus": 0.95,
          "avg1": 2,
          "avg7": 3.68,
          "avg30": 2.79,
          "reverseHoloAvg1": 1.4,
          "reverseHoloAvg7": 2.49,
          "reverseHoloAvg30": 2.77
        }
      }
    },
    {
      "id": "det1-2",
      "name": "Ludicolo",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Lombre",
      "abilities": [
        {
          "name": "Table Service",
          "text": "Once during your turn (before your attack), you may heal 30 damage from 1 of your Pokémon.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Punch and Run",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "Switch this Pokémon with 1 of your Benched Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "det1",
        "name": "Detective Pikachu",
        "series": "Sun & Moon",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DET",
        "releaseDate": "2019/04/05",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/det1/symbol.png",
          "logo": "https://images.pokemontcg.io/det1/logo.png"
        }
      },
      "number": "2",
      "artist": "Framestore",
      "rarity": "Rare",
      "flavorText": "If it hears festive music, all its muscles fill with energy. It can't help breaking out into a dance.",
      "nationalPokedexNumbers": [
        272
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/det1/2.png",
        "large": "https://images.pokemontcg.io/det1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/det1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.24,
            "mid": 0.59,
            "high": 3.95,
            "market": 0.53,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/det1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.19,
          "lowPrice": 0.2,
          "trendPrice": 1.22,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 2.06,
          "lowPriceExPlus": 0.2,
          "avg1": 2.99,
          "avg7": 1.13,
          "avg30": 1.38,
          "reverseHoloAvg1": 2,
          "reverseHoloAvg7": 1.73,
          "reverseHoloAvg30": 1.93
        }
      }
    },
    {
      "id": "sm9-2",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Tangle Drag",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon."
        },
        {
          "name": "Bug Bite",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm9",
        "name": "Team Up",
        "series": "Sun & Moon",
        "printedTotal": 181,
        "total": 198,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "TEU",
        "releaseDate": "2019/02/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm9/symbol.png",
          "logo": "https://images.pokemontcg.io/sm9/logo.png"
        }
      },
      "number": "2",
      "artist": "Shibuzoh.",
      "rarity": "Common",
      "flavorText": "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm9/2.png",
        "large": "https://images.pokemontcg.io/sm9/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm9-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.03,
            "mid": 0.19,
            "high": 1.38,
            "market": 0.15,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.18,
            "mid": 0.32,
            "high": 0.99,
            "market": 0.28,
            "directLow": 0.2
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm9-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.47,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.4,
          "lowPriceExPlus": 0.02,
          "avg1": 0.05,
          "avg7": 0.07,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.49,
          "reverseHoloAvg7": 0.42,
          "reverseHoloAvg30": 0.32
        }
      }
    },
    {
      "id": "ex12-2",
      "name": "Aggron",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "110",
      "types": [
        "Metal"
      ],
      "evolvesFrom": "Lairon",
      "attacks": [
        {
          "name": "Heavy Blow",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70-",
          "text": "Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead."
        },
        {
          "name": "Bound Crush",
          "cost": [
            "Fighting",
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Grass",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "ex12",
        "name": "Legend Maker",
        "series": "EX",
        "printedTotal": 92,
        "total": 93,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LM",
        "releaseDate": "2006/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex12/symbol.png",
          "logo": "https://images.pokemontcg.io/ex12/logo.png"
        }
      },
      "number": "2",
      "artist": "Hisao Nakamura",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        306
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex12/2.png",
        "large": "https://images.pokemontcg.io/ex12/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex12-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 5.62,
            "mid": 7.74,
            "high": 19.99,
            "market": 8.94,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 9.3,
            "mid": 12.19,
            "high": 22.18,
            "market": 18.31,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex12-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 5.04,
          "lowPrice": 0.95,
          "trendPrice": 4.89,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.5,
          "reverseHoloLow": 2,
          "reverseHoloTrend": 10.83,
          "lowPriceExPlus": 4,
          "avg1": 5.95,
          "avg7": 5.41,
          "avg30": 5.35,
          "reverseHoloAvg1": 17,
          "reverseHoloAvg7": 8.5,
          "reverseHoloAvg30": 10.83
        }
      }
    },
    {
      "id": "ex7-2",
      "name": "Dark Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Lightning",
        "Darkness"
      ],
      "evolvesFrom": "Dark Flaaffy",
      "rules": [
        "This Pokémon is both Lightning Darkness type."
      ],
      "abilities": [
        {
          "name": "Darkest Impulse",
          "text": "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Ram",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Shock Bolt",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "Discard all Lightning Energy attached to Dark Ampharos."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex7",
        "name": "Team Rocket Returns",
        "series": "EX",
        "printedTotal": 109,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TRR",
        "releaseDate": "2004/11/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex7/symbol.png",
          "logo": "https://images.pokemontcg.io/ex7/logo.png"
        }
      },
      "number": "2",
      "artist": "Emi Miwa",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex7/2.png",
        "large": "https://images.pokemontcg.io/ex7/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 30,
            "mid": 40.63,
            "high": 68.99,
            "market": 41.5,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 42.99,
            "mid": 44.58,
            "high": 70,
            "market": 63.99,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 13.54,
          "lowPrice": 5,
          "trendPrice": 14.61,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 11.99,
          "reverseHoloTrend": 23.19,
          "lowPriceExPlus": 14.99,
          "avg1": 22,
          "avg7": 13.7,
          "avg30": 21.96,
          "reverseHoloAvg1": 26.9,
          "reverseHoloAvg7": 22.03,
          "reverseHoloAvg30": 27.89
        }
      }
    },
    {
      "id": "ru1-2",
      "name": "Cherrim",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Cherubi",
      "attacks": [
        {
          "name": "Solarbeam",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ru1",
        "name": "Pokémon Rumble",
        "series": "Other",
        "printedTotal": 16,
        "total": 16,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/12/02",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ru1/symbol.png",
          "logo": "https://images.pokemontcg.io/ru1/logo.png"
        }
      },
      "number": "2",
      "artist": "Pokemon Rumble",
      "nationalPokedexNumbers": [
        421
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ru1/2.png",
        "large": "https://images.pokemontcg.io/ru1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ru1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 12,
            "mid": 14.98,
            "high": 18.59,
            "market": 12.23,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ru1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.99,
          "lowPrice": 4.45,
          "trendPrice": 7.56,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 12.5,
          "reverseHoloTrend": 5.07,
          "lowPriceExPlus": 5,
          "avg1": 5,
          "avg7": 7.06,
          "avg30": 6.93,
          "reverseHoloAvg1": 4.99,
          "reverseHoloAvg7": 4.16,
          "reverseHoloAvg30": 4.16
        }
      }
    },
    {
      "id": "mcd19-2",
      "name": "Alolan Exeggutor",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "160",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Exeggcute",
      "attacks": [
        {
          "cost": [
            "Grass"
          ],
          "name": "Tropical Shake",
          "text": "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can't add more than 100 damage in this way.",
          "damage": "20+",
          "convertedEnergyCost": 1
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "mcd19",
        "name": "McDonald's Collection 2019",
        "series": "Other",
        "printedTotal": 12,
        "total": 12,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "releaseDate": "2019/10/15",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/mcd19/symbol.png",
          "logo": "https://images.pokemontcg.io/mcd19/logo.png"
        }
      },
      "number": "2",
      "artist": "Satoshi Shirai",
      "flavorText": "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.",
      "nationalPokedexNumbers": [
        103
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/mcd19/2.png",
        "large": "https://images.pokemontcg.io/mcd19/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/mcd19-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.79,
            "mid": 3.46,
            "high": 6.99,
            "market": 3.46,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/mcd19-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.92,
          "lowPrice": 0.19,
          "trendPrice": 1.72,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 2.2,
          "lowPriceExPlus": 0.79,
          "avg1": 3.13,
          "avg7": 1.68,
          "avg30": 1.67,
          "reverseHoloAvg1": 2,
          "reverseHoloAvg7": 2.23,
          "reverseHoloAvg30": 1.54
        }
      }
    },
    {
      "id": "xy5-2",
      "name": "Kakuna",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Weedle",
      "evolvesTo": [
        "Beedrill"
      ],
      "attacks": [
        {
          "name": "Bug Bite",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "xy5",
        "name": "Primal Clash",
        "series": "XY",
        "printedTotal": 160,
        "total": 164,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PRC",
        "releaseDate": "2015/02/04",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy5/symbol.png",
          "logo": "https://images.pokemontcg.io/xy5/logo.png"
        }
      },
      "number": "2",
      "artist": "Kagemaru Himeno",
      "rarity": "Uncommon",
      "flavorText": "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
      "nationalPokedexNumbers": [
        14
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy5/2.png",
        "large": "https://images.pokemontcg.io/xy5/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.21,
            "high": 4.36,
            "market": 0.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.11,
            "mid": 0.32,
            "high": 9.06,
            "market": 0.37,
            "directLow": 0.2
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.13,
          "lowPrice": 0.02,
          "trendPrice": 0.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.41,
          "lowPriceExPlus": 0.02,
          "avg1": 0.08,
          "avg7": 0.12,
          "avg30": 0.28,
          "reverseHoloAvg1": 0.3,
          "reverseHoloAvg7": 0.35,
          "reverseHoloAvg30": 0.37
        }
      }
    },
    {
      "id": "xy11-1",
      "name": "Tangela",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Tangrowth"
      ],
      "attacks": [
        {
          "name": "Slam",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 damage times the number of heads."
        },
        {
          "name": "Mega Drain",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Heal 20 damage from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "xy11",
        "name": "Steam Siege",
        "series": "XY",
        "printedTotal": 114,
        "total": 116,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "STS",
        "releaseDate": "2016/08/03",
        "updatedAt": "2019/04/10 19:59:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy11/symbol.png",
          "logo": "https://images.pokemontcg.io/xy11/logo.png"
        }
      },
      "number": "1",
      "artist": "OOYAMA",
      "rarity": "Common",
      "flavorText": "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
      "nationalPokedexNumbers": [
        114
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy11/1.png",
        "large": "https://images.pokemontcg.io/xy11/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy11-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.15,
            "high": 2,
            "market": 0.08,
            "directLow": 0.07
          },
          "reverseHolofoil": {
            "low": 0.04,
            "mid": 0.25,
            "high": 1.41,
            "market": 0.21,
            "directLow": 0.21
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy11-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.11,
          "lowPrice": 0.02,
          "trendPrice": 0.13,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.43,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.32,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.07,
          "avg30": 0.1,
          "reverseHoloAvg1": 0.43,
          "reverseHoloAvg7": 0.36,
          "reverseHoloAvg30": 0.31
        }
      }
    },
    {
      "id": "ex14-1",
      "name": "Banette",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Shuppet",
      "abilities": [
        {
          "name": "Safeguard",
          "text": "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Night Murmurs",
          "cost": [
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Darkness",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex14",
        "name": "Crystal Guardians",
        "series": "EX",
        "printedTotal": 100,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "CG",
        "releaseDate": "2006/08/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex14/symbol.png",
          "logo": "https://images.pokemontcg.io/ex14/logo.png"
        }
      },
      "number": "1",
      "artist": "Kyoko Umemoto",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        354
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex14/1.png",
        "large": "https://images.pokemontcg.io/ex14/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex14-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.5,
            "mid": 3.84,
            "high": 5.54,
            "market": 4.37,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.5,
            "mid": 5.25,
            "high": 7.48,
            "market": 6.75,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex14-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.95,
          "lowPrice": 0.29,
          "trendPrice": 2.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7.56,
          "reverseHoloLow": 1.25,
          "reverseHoloTrend": 6.17,
          "lowPriceExPlus": 1.85,
          "avg1": 2.25,
          "avg7": 2.51,
          "avg30": 2.9,
          "reverseHoloAvg1": 5.6,
          "reverseHoloAvg7": 7.14,
          "reverseHoloAvg30": 4.74
        }
      }
    },
    {
      "id": "sm12-1",
      "name": "Venusaur & Snivy-GX",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "TAG TEAM",
        "GX"
      ],
      "hp": "270",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Servine"
      ],
      "rules": [
        "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards."
      ],
      "abilities": [
        {
          "name": "Shining Vine",
          "text": "Once during your turn, if this Pokémon is your Active Pokémon, when you attach a Grass Energy card from your hand to it, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Forest Dump",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "160",
          "text": ""
        },
        {
          "name": "Solar Plant-GX",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "This attack does 50 damage to each of your opponent's Pokémon. If this Pokémon has at least 2 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "sm12",
        "name": "Cosmic Eclipse",
        "series": "Sun & Moon",
        "printedTotal": 236,
        "total": 272,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CEC",
        "releaseDate": "2019/11/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm12/symbol.png",
          "logo": "https://images.pokemontcg.io/sm12/logo.png"
        }
      },
      "number": "1",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo GX",
      "nationalPokedexNumbers": [
        3,
        495
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm12/1.png",
        "large": "https://images.pokemontcg.io/sm12/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm12-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4,
            "mid": 5.5,
            "high": 19.99,
            "market": 5.05,
            "directLow": 7.55
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm12-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.27,
          "lowPrice": 2,
          "trendPrice": 9.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.68,
          "lowPriceExPlus": 4.45,
          "avg1": 3.8,
          "avg7": 5.86,
          "avg30": 6.52,
          "reverseHoloAvg1": 3.99,
          "reverseHoloAvg7": 4.5,
          "reverseHoloAvg30": 4.7
        }
      }
    },
    {
      "id": "bw1-1",
      "name": "Snivy",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Servine"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Vine Whip",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw1",
        "name": "Black & White",
        "series": "Black & White",
        "printedTotal": 114,
        "total": 115,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BLW",
        "releaseDate": "2011/04/25",
        "updatedAt": "2018/11/29 19:56:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw1/symbol.png",
          "logo": "https://images.pokemontcg.io/bw1/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Common",
      "flavorText": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
      "nationalPokedexNumbers": [
        495
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw1/1.png",
        "large": "https://images.pokemontcg.io/bw1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.08,
            "mid": 0.23,
            "high": 4,
            "market": 0.22,
            "directLow": 0.11
          },
          "reverseHolofoil": {
            "low": 0.47,
            "mid": 0.62,
            "high": 3.85,
            "market": 1.09,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.98,
          "lowPrice": 0.25,
          "trendPrice": 0.67,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0.65,
          "lowPriceExPlus": 0.45,
          "avg1": 1,
          "avg7": 0.73,
          "avg30": 0.75,
          "reverseHoloAvg1": 0.39,
          "reverseHoloAvg7": 0.54,
          "reverseHoloAvg30": 0.63
        }
      }
    },
    {
      "id": "sm115-1",
      "name": "Caterpie",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Metapod"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm115",
        "name": "Hidden Fates",
        "series": "Sun & Moon",
        "printedTotal": 68,
        "total": 69,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "HIF",
        "releaseDate": "2019/08/23",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm115/symbol.png",
          "logo": "https://images.pokemontcg.io/sm115/logo.png"
        }
      },
      "number": "1",
      "artist": "tetsuya koizumi",
      "rarity": "Common",
      "flavorText": "Perhaps because it would like to grow up quickly, it has a voracious appetite, eating a hundred leaves a day.",
      "nationalPokedexNumbers": [
        10
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm115/1.png",
        "large": "https://images.pokemontcg.io/sm115/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm115-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.04,
            "directLow": 0.03
          },
          "reverseHolofoil": {
            "low": 0.05,
            "mid": 0.2,
            "high": 1.58,
            "market": 0.19,
            "directLow": 0.15
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm115-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.05,
          "lowPrice": 0.02,
          "trendPrice": 0.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.22,
          "reverseHoloLow": 0.07,
          "reverseHoloTrend": 0.18,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.04,
          "avg30": 0.05,
          "reverseHoloAvg1": 0.07,
          "reverseHoloAvg7": 0.22,
          "reverseHoloAvg30": 0.21
        }
      }
    },
    {
      "id": "si1-1",
      "name": "Mew",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "30",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Rainbow Wave",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Choose a type of Energy other than Colorless attached to Mew. This attack does 20 damage to each of your opponent's Pokémon of that type (including Benched Pokémon). Don't apply Weakness and Resistance."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "set": {
        "id": "si1",
        "name": "Southern Islands",
        "series": "Other",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2001/07/31",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/si1/symbol.png",
          "logo": "https://images.pokemontcg.io/si1/logo.png"
        }
      },
      "number": "1",
      "artist": "Keiko Fukuyama",
      "flavorText": "This Pokémon's body is covered by fine hairs that can be seen only under a microscope.",
      "nationalPokedexNumbers": [
        151
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/si1/1.png",
        "large": "https://images.pokemontcg.io/si1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/si1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 81.51,
            "mid": 99.99,
            "high": 158.62,
            "market": 131.01,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/si1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 23,
          "trendPrice": 79.98,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 72.02,
          "lowPriceExPlus": 65,
          "avg1": 65,
          "avg7": 73.64,
          "avg30": 70.56,
          "reverseHoloAvg1": 30,
          "reverseHoloAvg7": 64.85,
          "reverseHoloAvg30": 41.17
        }
      }
    },
    {
      "id": "dp1-1",
      "name": "Dialga",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "68",
      "hp": "90",
      "types": [
        "Metal"
      ],
      "attacks": [
        {
          "name": "Time Bellow",
          "cost": [
            "Metal"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Draw a card."
        },
        {
          "name": "Flash Cannon",
          "cost": [
            "Metal",
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "dp1",
        "name": "Diamond & Pearl",
        "series": "Diamond & Pearl",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp1/symbol.png",
          "logo": "https://images.pokemontcg.io/dp1/logo.png"
        }
      },
      "number": "1",
      "artist": "Nakaoka",
      "rarity": "Rare Holo",
      "flavorText": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
      "nationalPokedexNumbers": [
        483
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp1/1.png",
        "large": "https://images.pokemontcg.io/dp1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3,
            "mid": 9.2,
            "high": 15.68,
            "market": 10.15,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4.8,
            "mid": 6.99,
            "high": 12.99,
            "market": 10.95,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.75,
          "lowPrice": 0.49,
          "trendPrice": 5.49,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.99,
          "reverseHoloLow": 0.7,
          "reverseHoloTrend": 7.76,
          "lowPriceExPlus": 2.99,
          "avg1": 3.75,
          "avg7": 4.65,
          "avg30": 4.61,
          "reverseHoloAvg1": 3.99,
          "reverseHoloAvg7": 7.08,
          "reverseHoloAvg30": 5.33
        }
      }
    },
    {
      "id": "sm3-1",
      "name": "Caterpie",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Metapod"
      ],
      "attacks": [
        {
          "name": "Surprise Attack",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Flip a coin. If tails, this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm3",
        "name": "Burning Shadows",
        "series": "Sun & Moon",
        "printedTotal": 147,
        "total": 177,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BUS",
        "releaseDate": "2017/08/05",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm3/symbol.png",
          "logo": "https://images.pokemontcg.io/sm3/logo.png"
        }
      },
      "number": "1",
      "artist": "Sekio",
      "rarity": "Common",
      "flavorText": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
      "nationalPokedexNumbers": [
        10
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm3/1.png",
        "large": "https://images.pokemontcg.io/sm3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.08,
            "directLow": 0.05
          },
          "reverseHolofoil": {
            "low": 0.05,
            "mid": 0.24,
            "high": 1.35,
            "market": 0.19,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.08,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.14,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.14,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.06,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.12,
          "reverseHoloAvg7": 0.12,
          "reverseHoloAvg30": 0.21
        }
      }
    },
    {
      "id": "pop7-1",
      "name": "Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "52",
      "hp": "130",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flaaffy",
      "abilities": [
        {
          "name": "Jamming",
          "text": "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Cluster Bolt",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+30"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pop7",
        "name": "POP Series 7",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2008/03/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop7/symbol.png",
          "logo": "https://images.pokemontcg.io/pop7/logo.png"
        }
      },
      "number": "1",
      "artist": "Kouki Saitou",
      "rarity": "Rare",
      "flavorText": "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop7/1.png",
        "large": "https://images.pokemontcg.io/pop7/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 2.25,
            "mid": 4.72,
            "high": 7.87,
            "market": 6.74,
            "directLow": null
          },
          "holofoil": {
            "low": 2.8,
            "mid": 5.99,
            "high": 14.57,
            "market": 10.05,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.39,
          "lowPrice": 1.25,
          "trendPrice": 7,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.07,
          "lowPriceExPlus": 2.5,
          "avg1": 2.99,
          "avg7": 6.74,
          "avg30": 5.14,
          "reverseHoloAvg1": 2.25,
          "reverseHoloAvg7": 2.52,
          "reverseHoloAvg30": 2.96
        }
      }
    },
    {
      "id": "gym2-1",
      "name": "Blaine's Arcanine",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "42",
      "hp": "90",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Blaine's Growlithe",
      "attacks": [
        {
          "name": "Heat Tackle",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Blaine's Arcanine does 10 damage to itself."
        },
        {
          "name": "Firestorm",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 4,
          "damage": "120",
          "text": "Discard 3 Fire Energy cards attached to Blaine's Arcanine in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "gym2",
        "name": "Gym Challenge",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G2",
        "releaseDate": "2000/10/16",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym2/symbol.png",
          "logo": "https://images.pokemontcg.io/gym2/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        59
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym2/1.png",
        "large": "https://images.pokemontcg.io/gym2/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 200.42,
            "mid": 232.82,
            "high": 515,
            "market": 210.46,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 40.99,
            "mid": 49.88,
            "high": 78.74,
            "market": 53.54,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 52.72,
          "lowPrice": 4.78,
          "trendPrice": 51.6,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 20.65,
          "lowPriceExPlus": 25,
          "avg1": 47.9,
          "avg7": 38.81,
          "avg30": 40.34,
          "reverseHoloAvg1": 27.5,
          "reverseHoloAvg7": 18.59,
          "reverseHoloAvg30": 33.79
        }
      }
    },
    {
      "id": "col1-1",
      "name": "Clefable",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Clefairy",
      "attacks": [
        {
          "name": "Fairy Power",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Return 1 of your Pokémon and all cards attached to it in your hand."
        },
        {
          "name": "Moon Impact",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "col1",
        "name": "Call of Legends",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 95,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "CL",
        "releaseDate": "2011/02/09",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/col1/symbol.png",
          "logo": "https://images.pokemontcg.io/col1/logo.png"
        }
      },
      "number": "1",
      "artist": "sui",
      "rarity": "Rare Holo",
      "flavorText": "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
      "nationalPokedexNumbers": [
        36
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/col1/1.png",
        "large": "https://images.pokemontcg.io/col1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/col1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.77,
            "mid": 2.76,
            "high": 5,
            "market": 2.91,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.18,
            "mid": 3.19,
            "high": 5.5,
            "market": 3.4,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/col1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.45,
          "lowPrice": 0.59,
          "trendPrice": 5.98,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 14,
          "reverseHoloLow": 0.95,
          "reverseHoloTrend": 6.49,
          "lowPriceExPlus": 1.19,
          "avg1": 8.45,
          "avg7": 5.06,
          "avg30": 5.47,
          "reverseHoloAvg1": 14,
          "reverseHoloAvg7": 6.38,
          "reverseHoloAvg30": 4.96
        }
      }
    },
    {
      "id": "ex9-1",
      "name": "Blaziken",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "110",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Combusken",
      "abilities": [
        {
          "name": "Blaze",
          "text": "As long as Blaziken's remaining HP is 40 or less, Blaziken does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Searing Flame",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "The Defending Pokémon is now Burned."
        },
        {
          "name": "Damage Burn",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50+",
          "text": "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex9",
        "name": "Emerald",
        "series": "EX",
        "printedTotal": 106,
        "total": 107,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "EM",
        "releaseDate": "2005/05/01",
        "updatedAt": "2020/02/08 09:00:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex9/symbol.png",
          "logo": "https://images.pokemontcg.io/ex9/logo.png"
        }
      },
      "number": "1",
      "artist": "Midori Harada",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        257
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex9/1.png",
        "large": "https://images.pokemontcg.io/ex9/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 9.98,
            "mid": 20,
            "high": 20,
            "market": null,
            "directLow": null
          },
          "holofoil": {
            "low": 10.7,
            "mid": 16.05,
            "high": 26.24,
            "market": 17.54,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 50.22,
            "mid": 70,
            "high": 87.95,
            "market": 75,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.21,
          "lowPrice": 0.05,
          "trendPrice": 4.55,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 5.5,
          "reverseHoloLow": 2.45,
          "reverseHoloTrend": 11.62,
          "lowPriceExPlus": 0.5,
          "avg1": 0.7,
          "avg7": 2.94,
          "avg30": 2.85,
          "reverseHoloAvg1": 7.95,
          "reverseHoloAvg7": 10.77,
          "reverseHoloAvg30": 14.04
        }
      }
    },
    {
      "id": "bw10-1",
      "name": "Surskit",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Masquerain"
      ],
      "attacks": [
        {
          "name": "Sweet Scent",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 20 damage from 1 of your Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw10",
        "name": "Plasma Blast",
        "series": "Black & White",
        "printedTotal": 101,
        "total": 105,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLB",
        "releaseDate": "2013/08/14",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw10/symbol.png",
          "logo": "https://images.pokemontcg.io/bw10/logo.png"
        }
      },
      "number": "1",
      "artist": "Naoyo Kimura",
      "rarity": "Common",
      "flavorText": "It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head.",
      "nationalPokedexNumbers": [
        283
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw10/1.png",
        "large": "https://images.pokemontcg.io/bw10/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw10-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.05,
            "mid": 0.23,
            "high": 1.33,
            "market": 0.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.19,
            "mid": 0.31,
            "high": 4.51,
            "market": 0.23,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw10-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.12,
          "lowPrice": 0.02,
          "trendPrice": 0.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.2,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.5,
          "lowPriceExPlus": 0.02,
          "avg1": 0.15,
          "avg7": 0.12,
          "avg30": 0.12,
          "reverseHoloAvg1": 0.15,
          "reverseHoloAvg7": 0.42,
          "reverseHoloAvg30": 0.38
        }
      }
    },
    {
      "id": "swsh35-1",
      "name": "Venusaur V",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "V"
      ],
      "hp": "220",
      "types": [
        "Grass"
      ],
      "rules": [
        "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
      ],
      "attacks": [
        {
          "name": "Pollen Bomb",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Your opponent's Active Pokémon is now Asleep and Poisoned."
        },
        {
          "name": "Solar Typhoon",
          "cost": [
            "Grass",
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "220",
          "text": "During your next turn, this Pokémon can't use Solar Typhoon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "swsh35",
        "name": "Champion's Path",
        "series": "Sword & Shield",
        "printedTotal": 73,
        "total": 80,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CPA",
        "releaseDate": "2020/09/25",
        "updatedAt": "2020/10/25 13:45:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh35/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh35/logo.png"
        }
      },
      "number": "1",
      "artist": "PLANETA Mochizuki",
      "rarity": "Rare Holo V",
      "nationalPokedexNumbers": [
        3
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh35/1.png",
        "large": "https://images.pokemontcg.io/swsh35/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh35-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.95,
            "mid": 1.99,
            "high": 19.99,
            "market": 1.83,
            "directLow": 2.15
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh35-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.05,
          "lowPrice": 1.25,
          "trendPrice": 2.84,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 2.88,
          "lowPriceExPlus": 1.25,
          "avg1": 1.5,
          "avg7": 3.14,
          "avg30": 2.83,
          "reverseHoloAvg1": 2,
          "reverseHoloAvg7": 3.05,
          "reverseHoloAvg30": 3.59
        }
      }
    },
    {
      "id": "xy7-1",
      "name": "Oddish",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Gloom"
      ],
      "attacks": [
        {
          "name": "Trip Over",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy7",
        "name": "Ancient Origins",
        "series": "XY",
        "printedTotal": 98,
        "total": 100,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "AOR",
        "releaseDate": "2015/08/12",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy7/symbol.png",
          "logo": "https://images.pokemontcg.io/xy7/logo.png"
        }
      },
      "number": "1",
      "artist": "MAHOU",
      "rarity": "Common",
      "flavorText": "Its scientific name is \"Oddium Wanderus.\" At night, it is said to walk nearly 1,000 feet on its two roots.",
      "nationalPokedexNumbers": [
        43
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy7/1.png",
        "large": "https://images.pokemontcg.io/xy7/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.02,
            "mid": 0.15,
            "high": 2,
            "market": 0.13,
            "directLow": 0.1
          },
          "reverseHolofoil": {
            "low": 0.18,
            "mid": 0.36,
            "high": 3.55,
            "market": 0.36,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.05,
          "lowPrice": 0.01,
          "trendPrice": 0.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.35,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.3,
          "lowPriceExPlus": 0.01,
          "avg1": 0.04,
          "avg7": 0.05,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.2,
          "reverseHoloAvg7": 0.32,
          "reverseHoloAvg30": 0.43
        }
      }
    },
    {
      "id": "sm1-1",
      "name": "Caterpie",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Metapod"
      ],
      "attacks": [
        {
          "name": "Nap",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 20 damage from this Pokémon."
        },
        {
          "name": "Gnaw",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm1",
        "name": "Sun & Moon",
        "series": "Sun & Moon",
        "printedTotal": 149,
        "total": 173,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "SUM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2019/04/10 19:59:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm1/symbol.png",
          "logo": "https://images.pokemontcg.io/sm1/logo.png"
        }
      },
      "number": "1",
      "artist": "Kanako Eo",
      "rarity": "Common",
      "flavorText": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
      "nationalPokedexNumbers": [
        10
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm1/1.png",
        "large": "https://images.pokemontcg.io/sm1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.05,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.25,
            "high": 1.95,
            "market": 0.19,
            "directLow": 0.21
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.18,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.18,
          "lowPriceExPlus": 0.02,
          "avg1": 0.19,
          "avg7": 0.07,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.24,
          "reverseHoloAvg7": 0.18,
          "reverseHoloAvg30": 0.24
        }
      }
    },
    {
      "id": "ex13-1",
      "name": "Armaldo δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "110",
      "types": [
        "Fighting",
        "Metal"
      ],
      "evolvesFrom": "Anorith",
      "rules": [
        "This Pokémon is both Fighting Metal type."
      ],
      "attacks": [
        {
          "name": "Delta Edge",
          "cost": [
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "70",
          "text": "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70."
        },
        {
          "name": "Fossil Charge",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "You may discard a Claw Fossil, Mysterious Fossil, Root Fossil, or Holon Fossil from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "ex13",
        "name": "Holon Phantoms",
        "series": "EX",
        "printedTotal": 110,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HP",
        "releaseDate": "2006/05/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex13/symbol.png",
          "logo": "https://images.pokemontcg.io/ex13/logo.png"
        }
      },
      "number": "1",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        348
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex13/1.png",
        "large": "https://images.pokemontcg.io/ex13/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex13-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 6.88,
            "mid": 8.5,
            "high": 11.89,
            "market": 8.42,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 8,
            "mid": 11.01,
            "high": 13,
            "market": 11.2,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex13-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.73,
          "lowPrice": 1.5,
          "trendPrice": 7.63,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 5.98,
          "reverseHoloLow": 3,
          "reverseHoloTrend": 20.23,
          "lowPriceExPlus": 4.5,
          "avg1": 7.99,
          "avg7": 7.33,
          "avg30": 6.5,
          "reverseHoloAvg1": 45,
          "reverseHoloAvg7": 29.63,
          "reverseHoloAvg30": 15.23
        }
      }
    },
    {
      "id": "dv1-2",
      "name": "Dratini",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Dragon"
      ],
      "evolvesTo": [
        "Dragonair"
      ],
      "attacks": [
        {
          "name": "Hypnotic Gaze",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "The Defending Pokémon is now Asleep."
        },
        {
          "name": "Tail Whap",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Dragon",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dv1",
        "name": "Dragon Vault",
        "series": "Black & White",
        "printedTotal": 20,
        "total": 21,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRV",
        "releaseDate": "2012/10/05",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dv1/symbol.png",
          "logo": "https://images.pokemontcg.io/dv1/logo.png"
        }
      },
      "number": "2",
      "artist": "Naoki Saito",
      "rarity": "Rare Holo",
      "flavorText": "It is called the \"Mirage Pokémon\" because so few have seen it. Its shed skin has been found.",
      "nationalPokedexNumbers": [
        147
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dv1/2.png",
        "large": "https://images.pokemontcg.io/dv1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dv1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.56,
            "mid": 2.99,
            "high": 24.95,
            "market": 3.43,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dv1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.58,
          "lowPrice": 0.2,
          "trendPrice": 5.52,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 2.5,
          "reverseHoloLow": 0.48,
          "reverseHoloTrend": 3.2,
          "lowPriceExPlus": 0.34,
          "avg1": 4.95,
          "avg7": 7.21,
          "avg30": 3.04,
          "reverseHoloAvg1": 2.5,
          "reverseHoloAvg7": 2.5,
          "reverseHoloAvg30": 1.9
        }
      }
    },
    {
      "id": "ecard2-H3",
      "name": "Ariados",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Spinarak",
      "abilities": [
        {
          "name": "Gluey Slime",
          "text": "As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokémon. Gluey Slime can't make a player pay more than an additional Colorless to retreat a Pokémon, even if there is more than 1 Ariados in play.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Spider Force",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20+",
          "text": "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "set": {
        "id": "ecard2",
        "name": "Aquapolis",
        "series": "E-Card",
        "printedTotal": 147,
        "total": 182,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AQ",
        "releaseDate": "2003/01/15",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ecard2/symbol.png",
          "logo": "https://images.pokemontcg.io/ecard2/logo.png"
        }
      },
      "number": "H3",
      "artist": "Shin-ichi Yoshida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        168
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ecard2/H3.png",
        "large": "https://images.pokemontcg.io/ecard2/H3_hires.png"
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ecard2-H3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 4.99,
          "trendPrice": 22.78,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 18.54,
          "lowPriceExPlus": 16,
          "avg1": 26.5,
          "avg7": 20.93,
          "avg30": 21.02,
          "reverseHoloAvg1": 25,
          "reverseHoloAvg7": 24.75,
          "reverseHoloAvg30": 12.55
        }
      }
    },
    {
      "id": "sm12-2",
      "name": "Oddish",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Gloom"
      ],
      "attacks": [
        {
          "name": "Sweet Scent",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 30 damage from 1 of your Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm12",
        "name": "Cosmic Eclipse",
        "series": "Sun & Moon",
        "printedTotal": 236,
        "total": 272,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CEC",
        "releaseDate": "2019/11/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm12/symbol.png",
          "logo": "https://images.pokemontcg.io/sm12/logo.png"
        }
      },
      "number": "2",
      "artist": "Yumi",
      "rarity": "Common",
      "flavorText": "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
      "nationalPokedexNumbers": [
        43
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm12/2.png",
        "large": "https://images.pokemontcg.io/sm12/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm12-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.03,
            "mid": 0.16,
            "high": 1.3,
            "market": 0.15,
            "directLow": 0.05
          },
          "reverseHolofoil": {
            "low": 0.25,
            "mid": 0.57,
            "high": 2.49,
            "market": 0.56,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm12-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.3,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.33,
          "lowPriceExPlus": 0.02,
          "avg1": 0.04,
          "avg7": 0.1,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.02,
          "reverseHoloAvg7": 0.32,
          "reverseHoloAvg30": 0.37
        }
      }
    },
    {
      "id": "ex9-2",
      "name": "Deoxys",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Psychic"
      ],
      "abilities": [
        {
          "name": "Form Change",
          "text": "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Swift",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "This attack's damage isn't affected by Weakness, Resistance, Poké-Power, Poké-Bodies, or any other effects on the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex9",
        "name": "Emerald",
        "series": "EX",
        "printedTotal": 106,
        "total": 107,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "EM",
        "releaseDate": "2005/05/01",
        "updatedAt": "2020/02/08 09:00:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex9/symbol.png",
          "logo": "https://images.pokemontcg.io/ex9/logo.png"
        }
      },
      "number": "2",
      "artist": "Hironobu Yoshida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        386
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex9/2.png",
        "large": "https://images.pokemontcg.io/ex9/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex9-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 29.99,
            "mid": 29.99,
            "high": 29.99,
            "market": null,
            "directLow": null
          },
          "holofoil": {
            "low": 15.72,
            "mid": 22.99,
            "high": 49.96,
            "market": 24.21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 29,
            "mid": 31.48,
            "high": 44.99,
            "market": 29.27,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex9-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.2,
          "lowPrice": 0.99,
          "trendPrice": 8.42,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 13.48,
          "reverseHoloLow": 1.99,
          "reverseHoloTrend": 28.55,
          "lowPriceExPlus": 3,
          "avg1": 2,
          "avg7": 7.28,
          "avg30": 6.2,
          "reverseHoloAvg1": 12,
          "reverseHoloAvg7": 24.71,
          "reverseHoloAvg30": 19.97
        }
      }
    },
    {
      "id": "bw1-2",
      "name": "Snivy",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Servine"
      ],
      "attacks": [
        {
          "name": "Leaf Blade",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 30 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw1",
        "name": "Black & White",
        "series": "Black & White",
        "printedTotal": 114,
        "total": 115,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BLW",
        "releaseDate": "2011/04/25",
        "updatedAt": "2018/11/29 19:56:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw1/symbol.png",
          "logo": "https://images.pokemontcg.io/bw1/logo.png"
        }
      },
      "number": "2",
      "artist": "5ban Graphics",
      "rarity": "Common",
      "flavorText": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
      "nationalPokedexNumbers": [
        495
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw1/2.png",
        "large": "https://images.pokemontcg.io/bw1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.15,
            "mid": 0.28,
            "high": 1.96,
            "market": 0.27,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.45,
            "mid": 1.45,
            "high": 3.14,
            "market": 1.41,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.14,
          "lowPrice": 0.02,
          "trendPrice": 0.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.8,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 1.63,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.13,
          "avg30": 0.15,
          "reverseHoloAvg1": 5,
          "reverseHoloAvg7": 2.05,
          "reverseHoloAvg30": 0.86
        }
      }
    },
    {
      "id": "base4-3",
      "name": "Chansey",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "55",
      "hp": "120",
      "types": [
        "Colorless"
      ],
      "evolvesTo": [
        "Blissey"
      ],
      "attacks": [
        {
          "name": "Scrunch",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to Chansey during your opponent's next turn. (Any other effects of attacks still happen.)"
        },
        {
          "name": "Double-edge",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": "Chansey does 80 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "base4",
        "name": "Base Set 2",
        "series": "Base",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "B2",
        "releaseDate": "2000/02/24",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base4/symbol.png",
          "logo": "https://images.pokemontcg.io/base4/logo.png"
        }
      },
      "number": "3",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.",
      "nationalPokedexNumbers": [
        113
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base4/3.png",
        "large": "https://images.pokemontcg.io/base4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.69,
            "mid": 8.96,
            "high": 29.99,
            "market": 10.07,
            "directLow": 5
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.36,
          "lowPrice": 3,
          "trendPrice": 5.42,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 9.69,
          "lowPriceExPlus": 7,
          "avg1": 4.5,
          "avg7": 6.85,
          "avg30": 8.33,
          "reverseHoloAvg1": 15,
          "reverseHoloAvg7": 10.73,
          "reverseHoloAvg30": 10.31
        }
      }
    },
    {
      "id": "ru1-3",
      "name": "Ninetales",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Vulpix",
      "attacks": [
        {
          "name": "Flame Tail",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ru1",
        "name": "Pokémon Rumble",
        "series": "Other",
        "printedTotal": 16,
        "total": 16,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/12/02",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ru1/symbol.png",
          "logo": "https://images.pokemontcg.io/ru1/logo.png"
        }
      },
      "number": "3",
      "artist": "Pokemon Rumble",
      "nationalPokedexNumbers": [
        38
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ru1/3.png",
        "large": "https://images.pokemontcg.io/ru1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ru1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 38.99,
            "mid": 38.99,
            "high": 45.99,
            "market": 35.99,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ru1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 12.31,
          "lowPrice": 11.95,
          "trendPrice": 13.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 11.95,
          "reverseHoloTrend": 17.21,
          "lowPriceExPlus": 19.95,
          "avg1": 11.99,
          "avg7": 12.65,
          "avg30": 13.46,
          "reverseHoloAvg1": 19,
          "reverseHoloAvg7": 13.66,
          "reverseHoloAvg30": 13.66
        }
      }
    },
    {
      "id": "xy5-3",
      "name": "Beedrill",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Kakuna",
      "attacks": [
        {
          "name": "Allergic Shock",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "During your next turn, if the Defending Pokémon is damaged by an attack, it is Knocked Out."
        },
        {
          "name": "Twineedle",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "50×",
          "text": "Flip 2 coins. This attack does 50 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "set": {
        "id": "xy5",
        "name": "Primal Clash",
        "series": "XY",
        "printedTotal": 160,
        "total": 164,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PRC",
        "releaseDate": "2015/02/04",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy5/symbol.png",
          "logo": "https://images.pokemontcg.io/xy5/logo.png"
        }
      },
      "number": "3",
      "artist": "Kouki Saitou",
      "rarity": "Rare",
      "flavorText": "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
      "nationalPokedexNumbers": [
        15
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy5/3.png",
        "large": "https://images.pokemontcg.io/xy5/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy5-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.35,
            "high": 2.82,
            "market": 0.33,
            "directLow": 0.2
          },
          "reverseHolofoil": {
            "low": 0.2,
            "mid": 0.68,
            "high": 1.95,
            "market": 0.95,
            "directLow": 0.99
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy5-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.45,
          "lowPrice": 0.05,
          "trendPrice": 0.5,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.55,
          "reverseHoloLow": 0.34,
          "reverseHoloTrend": 1.56,
          "lowPriceExPlus": 0.05,
          "avg1": 0.3,
          "avg7": 0.56,
          "avg30": 0.4,
          "reverseHoloAvg1": 1.55,
          "reverseHoloAvg7": 1.6,
          "reverseHoloAvg30": 1.14
        }
      }
    },
    {
      "id": "pop6-3",
      "name": "Manaphy",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "20",
      "hp": "70",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Call for Family",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
        },
        {
          "name": "Aqua Ring",
          "cost": [
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Switch Manaphy with 1 of your Benched Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop6",
        "name": "POP Series 6",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/09/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop6/symbol.png",
          "logo": "https://images.pokemontcg.io/pop6/logo.png"
        }
      },
      "number": "3",
      "artist": "Atsuko Nishida",
      "rarity": "Rare",
      "flavorText": "Born on a cold seafloor, it will swim great distances to return to its birthplace.",
      "nationalPokedexNumbers": [
        490
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop6/3.png",
        "large": "https://images.pokemontcg.io/pop6/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop6-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.5,
            "mid": 1,
            "high": 5.99,
            "market": 1.03,
            "directLow": null
          },
          "holofoil": {
            "low": 1.96,
            "mid": 3.62,
            "high": 7.79,
            "market": 5.96,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop6-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 0.75,
          "trendPrice": 5.5,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0.19,
          "lowPriceExPlus": 0.99,
          "avg1": 3,
          "avg7": 7.2,
          "avg30": 3.25,
          "reverseHoloAvg1": 0.19,
          "reverseHoloAvg7": 0.79,
          "reverseHoloAvg30": 0.79
        }
      }
    },
    {
      "id": "si1-2",
      "name": "Pidgeot",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "70",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Pidgeotto",
      "attacks": [
        {
          "name": "Supersonic Flight",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": "Flip a coin. If tails, this attack does nothing."
        },
        {
          "name": "Slicing Wind",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "set": {
        "id": "si1",
        "name": "Southern Islands",
        "series": "Other",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2001/07/31",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/si1/symbol.png",
          "logo": "https://images.pokemontcg.io/si1/logo.png"
        }
      },
      "number": "2",
      "artist": "Keiko Fukuyama",
      "flavorText": "This Pokémon searches for food while flying at Mach 2. Its large claws make fearsome weapons.",
      "nationalPokedexNumbers": [
        18
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/si1/2.png",
        "large": "https://images.pokemontcg.io/si1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/si1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 9,
            "mid": 12.91,
            "high": 39.99,
            "market": 12.91,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/si1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 16.6,
          "lowPrice": 10,
          "trendPrice": 17.19,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 7,
          "lowPriceExPlus": 10,
          "avg1": 15.9,
          "avg7": 17.2,
          "avg30": 19.35,
          "reverseHoloAvg1": 7,
          "reverseHoloAvg7": 7,
          "reverseHoloAvg30": 7
        }
      }
    },
    {
      "id": "ex11-3",
      "name": "Dragonite δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Lightning",
        "Metal"
      ],
      "evolvesFrom": "Dragonair",
      "rules": [
        "This Pokémon is both Lightning Metal type."
      ],
      "abilities": [
        {
          "name": "Delta Charge",
          "text": "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Dragonite is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Agility",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Dragonite during your opponent's next turn."
        },
        {
          "name": "Heavy Impact",
          "cost": [
            "Lightning",
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Grass",
          "value": "-30"
        },
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex11",
        "name": "Delta Species",
        "series": "EX",
        "printedTotal": 113,
        "total": 114,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DS",
        "releaseDate": "2005/10/31",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex11/symbol.png",
          "logo": "https://images.pokemontcg.io/ex11/logo.png"
        }
      },
      "number": "3",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        149
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex11/3.png",
        "large": "https://images.pokemontcg.io/ex11/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex11-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 59.95,
            "mid": 85,
            "high": 109.8,
            "market": 115.49,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 116.22,
            "mid": 148.95,
            "high": 148.95,
            "market": 55.98,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex11-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 26.97,
          "lowPrice": 5,
          "trendPrice": 34.67,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 42.95,
          "reverseHoloLow": 8,
          "reverseHoloTrend": 91.33,
          "lowPriceExPlus": 19.98,
          "avg1": 5,
          "avg7": 25.27,
          "avg30": 29.83,
          "reverseHoloAvg1": 35,
          "reverseHoloAvg7": 39.68,
          "reverseHoloAvg30": 64.05
        }
      }
    },
    {
      "id": "pl3-3",
      "name": "Drifblim FB",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "SP"
      ],
      "level": "50",
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "abilities": [
        {
          "name": "Pump Up",
          "text": "If your opponent has 3 or less Prize cards left, Drifblim FB gets +40 HP.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Shadow Ball",
          "cost": [
            "Psychic",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance."
        }
      ],
      "weaknesses": [
        {
          "type": "Darkness",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Colorless",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pl3",
        "name": "Supreme Victors",
        "series": "Platinum",
        "printedTotal": 147,
        "total": 153,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SV",
        "releaseDate": "2009/08/19",
        "updatedAt": "2018/03/07 22:40:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl3/symbol.png",
          "logo": "https://images.pokemontcg.io/pl3/logo.png"
        }
      },
      "number": "3",
      "artist": "Lee HyunJung",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        426
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl3/3.png",
        "large": "https://images.pokemontcg.io/pl3/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.39,
            "mid": 3.74,
            "high": 6.12,
            "market": 5.07,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.75,
            "mid": 3.28,
            "high": 5.7,
            "market": 3.18,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.92,
          "lowPrice": 0.32,
          "trendPrice": 2.9,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.25,
          "reverseHoloLow": 0.32,
          "reverseHoloTrend": 2.78,
          "lowPriceExPlus": 1.75,
          "avg1": 2.28,
          "avg7": 2.34,
          "avg30": 2.94,
          "reverseHoloAvg1": 4,
          "reverseHoloAvg7": 3.51,
          "reverseHoloAvg30": 2.71
        }
      }
    },
    {
      "id": "base3-3",
      "name": "Ditto",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "20",
      "hp": "50",
      "types": [
        "Colorless"
      ],
      "abilities": [
        {
          "name": "Transform",
          "text": "If Ditto is your Active Pokémon, treat it as if it were the same card as the Defending Pokémon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokémon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokémon while Ditto is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "base3",
        "name": "Fossil",
        "series": "Base",
        "printedTotal": 62,
        "total": 62,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "FO",
        "releaseDate": "1999/10/10",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base3/symbol.png",
          "logo": "https://images.pokemontcg.io/base3/logo.png"
        }
      },
      "number": "3",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare Holo",
      "flavorText": "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
      "nationalPokedexNumbers": [
        132
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base3/3.png",
        "large": "https://images.pokemontcg.io/base3/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 38,
            "mid": 68.82,
            "high": 124.99,
            "market": 70.13,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 12.97,
            "mid": 20,
            "high": 41.58,
            "market": 22.11,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 18.57,
          "lowPrice": 2.99,
          "trendPrice": 28.96,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 17.49,
          "lowPriceExPlus": 12,
          "avg1": 13.42,
          "avg7": 30.65,
          "avg30": 21.04,
          "reverseHoloAvg1": 42.5,
          "reverseHoloAvg7": 18.07,
          "reverseHoloAvg30": 17.46
        }
      }
    },
    {
      "id": "hgss1-3",
      "name": "Clefable",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Clefairy",
      "attacks": [
        {
          "name": "Fairy Power",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Return 1 of your Pokémon and all cards attached to it to your hand."
        },
        {
          "name": "Moon Impact",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "hgss1",
        "name": "HeartGold & SoulSilver",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 123,
        "total": 124,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HS",
        "releaseDate": "2010/02/10",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss1/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss1/logo.png"
        }
      },
      "number": "3",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "flavorText": "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
      "nationalPokedexNumbers": [
        36
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss1/3.png",
        "large": "https://images.pokemontcg.io/hgss1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.55,
            "mid": 3.4,
            "high": 9.99,
            "market": 3.85,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.05,
            "mid": 1.19,
            "high": 2.04,
            "market": 3.09,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.14,
          "lowPrice": 0.49,
          "trendPrice": 2.62,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.12,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 1.74,
          "lowPriceExPlus": 1,
          "avg1": 2,
          "avg7": 3.25,
          "avg30": 2.66,
          "reverseHoloAvg1": 0.79,
          "reverseHoloAvg7": 1.71,
          "reverseHoloAvg30": 2.09
        }
      }
    },
    {
      "id": "ex13-2",
      "name": "Cradily δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Darkness",
        "Metal"
      ],
      "evolvesFrom": "Lileep",
      "rules": [
        "This Pokémon is both Darkness Metal type."
      ],
      "attacks": [
        {
          "name": "Harsh Fluid",
          "cost": [
            "Darkness",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn."
        },
        {
          "name": "Poison Tentacles",
          "cost": [
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex13",
        "name": "Holon Phantoms",
        "series": "EX",
        "printedTotal": 110,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HP",
        "releaseDate": "2006/05/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex13/symbol.png",
          "logo": "https://images.pokemontcg.io/ex13/logo.png"
        }
      },
      "number": "2",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        346
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex13/2.png",
        "large": "https://images.pokemontcg.io/ex13/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex13-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.75,
            "mid": 7.54,
            "high": 11.23,
            "market": 6.76,
            "directLow": 7.68
          },
          "reverseHolofoil": {
            "low": 5.3,
            "mid": 6.62,
            "high": 14.57,
            "market": 11.11,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex13-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 10,
          "lowPrice": 1.75,
          "trendPrice": 6.64,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4,
          "reverseHoloLow": 2.5,
          "reverseHoloTrend": 12.63,
          "lowPriceExPlus": 3,
          "avg1": 4.66,
          "avg7": 6.72,
          "avg30": 7.02,
          "reverseHoloAvg1": 3,
          "reverseHoloAvg7": 19.28,
          "reverseHoloAvg30": 13.83
        }
      }
    },
    {
      "id": "hgss4-3",
      "name": "Celebi",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Future Sight",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order."
        },
        {
          "name": "Leaf Bind",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "hgss4",
        "name": "HS—Triumphant",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 102,
        "total": 103,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TM",
        "releaseDate": "2010/11/03",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss4/logo.png"
        }
      },
      "number": "3",
      "artist": "Shin Nagasawa",
      "rarity": "Rare Holo",
      "flavorText": "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
      "nationalPokedexNumbers": [
        251
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss4/3.png",
        "large": "https://images.pokemontcg.io/hgss4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.46,
            "mid": 5.2,
            "high": 13.75,
            "market": 6.17,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 3.49,
            "mid": 5.32,
            "high": 9.21,
            "market": 6.81,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.82,
          "lowPrice": 0.49,
          "trendPrice": 2.49,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.25,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 2.3,
          "lowPriceExPlus": 1,
          "avg1": 0.25,
          "avg7": 3.24,
          "avg30": 2.24,
          "reverseHoloAvg1": 4.75,
          "reverseHoloAvg7": 2.38,
          "reverseHoloAvg30": 3.93
        }
      }
    },
    {
      "id": "xy7-2",
      "name": "Gloom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Oddish",
      "evolvesTo": [
        "Vileplume",
        "Bellossom"
      ],
      "attacks": [
        {
          "name": "Drool",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy7",
        "name": "Ancient Origins",
        "series": "XY",
        "printedTotal": 98,
        "total": 100,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "AOR",
        "releaseDate": "2015/08/12",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy7/symbol.png",
          "logo": "https://images.pokemontcg.io/xy7/logo.png"
        }
      },
      "number": "2",
      "artist": "Masakazu Fukuda",
      "rarity": "Uncommon",
      "flavorText": "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
      "nationalPokedexNumbers": [
        44
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy7/2.png",
        "large": "https://images.pokemontcg.io/xy7/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.17,
            "high": 1.29,
            "market": 0.12,
            "directLow": 0.13
          },
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.41,
            "high": 2,
            "market": 0.42,
            "directLow": 0.42
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.18,
          "lowPrice": 0.02,
          "trendPrice": 0.21,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.31,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.37,
          "lowPriceExPlus": 0.02,
          "avg1": 0.07,
          "avg7": 0.22,
          "avg30": 0.12,
          "reverseHoloAvg1": 0.14,
          "reverseHoloAvg7": 0.4,
          "reverseHoloAvg30": 0.36
        }
      }
    },
    {
      "id": "bw10-2",
      "name": "Masquerain",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1",
        "Team Plasma"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Surskit",
      "abilities": [
        {
          "name": "Tool Reversal",
          "text": "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Bug Bite",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw10",
        "name": "Plasma Blast",
        "series": "Black & White",
        "printedTotal": 101,
        "total": 105,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLB",
        "releaseDate": "2013/08/14",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw10/symbol.png",
          "logo": "https://images.pokemontcg.io/bw10/logo.png"
        }
      },
      "number": "2",
      "artist": "5ban Graphics",
      "rarity": "Rare",
      "flavorText": "Its antennae have eye patterns on them. Its four wings enable it to hover and fly in any direction.",
      "nationalPokedexNumbers": [
        284
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw10/2.png",
        "large": "https://images.pokemontcg.io/bw10/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw10-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.14,
            "mid": 0.35,
            "high": 1.42,
            "market": 0.3,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.29,
            "mid": 0.57,
            "high": 1.99,
            "market": 0.57,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw10-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.37,
          "lowPrice": 0.05,
          "trendPrice": 0.4,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.1,
          "reverseHoloLow": 0.17,
          "reverseHoloTrend": 0.92,
          "lowPriceExPlus": 0.05,
          "avg1": 0.23,
          "avg7": 0.4,
          "avg30": 0.42,
          "reverseHoloAvg1": 0.75,
          "reverseHoloAvg7": 1.12,
          "reverseHoloAvg30": 0.95
        }
      }
    },
    {
      "id": "ex7-3",
      "name": "Dark Crobat",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "90",
      "types": [
        "Grass",
        "Darkness"
      ],
      "evolvesFrom": "Dark Golbat",
      "rules": [
        "This Pokémon is both Grass Darkness type."
      ],
      "abilities": [
        {
          "name": "Black Beam",
          "text": "Once during your turn (before your attack), if Dark Crobat is your Active Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Dark Crobat is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Dark Drain",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove from Dark Crobat a number of damage counters equal to the number of your opponent's Pokémon in play."
        },
        {
          "name": "Skill Dive",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex7",
        "name": "Team Rocket Returns",
        "series": "EX",
        "printedTotal": 109,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TRR",
        "releaseDate": "2004/11/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex7/symbol.png",
          "logo": "https://images.pokemontcg.io/ex7/logo.png"
        }
      },
      "number": "3",
      "artist": "Kyoko Koizumi",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        169
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex7/3.png",
        "large": "https://images.pokemontcg.io/ex7/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 13.21,
            "mid": 19,
            "high": 24.99,
            "market": 19.96,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 17.69,
            "mid": 18.96,
            "high": 34.99,
            "market": 20.12,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 13.69,
          "lowPrice": 2.99,
          "trendPrice": 14.51,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 5,
          "reverseHoloTrend": 27.44,
          "lowPriceExPlus": 8,
          "avg1": 18,
          "avg7": 12.42,
          "avg30": 11.51,
          "reverseHoloAvg1": 69.99,
          "reverseHoloAvg7": 25.25,
          "reverseHoloAvg30": 15.21
        }
      }
    },
    {
      "id": "ex12-3",
      "name": "Cradily",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Lileep",
      "attacks": [
        {
          "name": "Devolution Wave",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Count the number of React Energy cards attached to Cradily and choose up to that number of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from each of those Pokémon, then have your opponent shuffle those cards into his or her deck."
        },
        {
          "name": "Linear Attack",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        },
        {
          "name": "Mud Shot",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex12",
        "name": "Legend Maker",
        "series": "EX",
        "printedTotal": 92,
        "total": 93,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LM",
        "releaseDate": "2006/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex12/symbol.png",
          "logo": "https://images.pokemontcg.io/ex12/logo.png"
        }
      },
      "number": "3",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        346
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex12/3.png",
        "large": "https://images.pokemontcg.io/ex12/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex12-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.22,
            "mid": 3.98,
            "high": 10,
            "market": 4.85,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 6.93,
            "mid": 8.43,
            "high": 10.34,
            "market": 8.43,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex12-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 4.27,
          "lowPrice": 0.6,
          "trendPrice": 3.21,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.5,
          "reverseHoloLow": 0.6,
          "reverseHoloTrend": 6.07,
          "lowPriceExPlus": 2.9,
          "avg1": 9.9,
          "avg7": 4.08,
          "avg30": 3.75,
          "reverseHoloAvg1": 2,
          "reverseHoloAvg7": 6.94,
          "reverseHoloAvg30": 5.89
        }
      }
    },
    {
      "id": "swsh35-2",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Call for Family",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "swsh35",
        "name": "Champion's Path",
        "series": "Sword & Shield",
        "printedTotal": 73,
        "total": 80,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CPA",
        "releaseDate": "2020/09/25",
        "updatedAt": "2020/10/25 13:45:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh35/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh35/logo.png"
        }
      },
      "number": "2",
      "artist": "Yuka Morii",
      "rarity": "Common",
      "flavorText": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh35/2.png",
        "large": "https://images.pokemontcg.io/swsh35/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh35-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 0.05,
            "mid": 0.22,
            "high": 2,
            "market": 0.17,
            "directLow": 0.11
          },
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.07,
            "directLow": 0.05
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh35-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.04,
          "lowPrice": 0.02,
          "trendPrice": 0.05,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.17,
          "reverseHoloLow": 0.04,
          "reverseHoloTrend": 0.22,
          "lowPriceExPlus": 0.02,
          "avg1": 0.06,
          "avg7": 0.04,
          "avg30": 0.05,
          "reverseHoloAvg1": 0.4,
          "reverseHoloAvg7": 0.2,
          "reverseHoloAvg30": 0.21
        }
      }
    },
    {
      "id": "gym2-2",
      "name": "Blaine's Charizard",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "50",
      "hp": "100",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Blaine's Charmeleon",
      "attacks": [
        {
          "name": "Roaring Flames",
          "cost": [
            "Fire"
          ],
          "convertedEnergyCost": 1,
          "damage": "20+",
          "text": "Discard all Fire Energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Fire Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Fire Energy discarded in this way."
        },
        {
          "name": "Flame Jet",
          "cost": [
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "gym2",
        "name": "Gym Challenge",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G2",
        "releaseDate": "2000/10/16",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym2/symbol.png",
          "logo": "https://images.pokemontcg.io/gym2/logo.png"
        }
      },
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        6
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym2/2.png",
        "large": "https://images.pokemontcg.io/gym2/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 350,
            "mid": 874.96,
            "high": 1000,
            "market": 574.95,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 291.52,
            "mid": 291.84,
            "high": 300.35,
            "market": 298.22,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 197.15,
          "lowPrice": 54,
          "trendPrice": 227.88,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 159.26,
          "lowPriceExPlus": 120,
          "avg1": 450,
          "avg7": 228.89,
          "avg30": 206.25,
          "reverseHoloAvg1": 130,
          "reverseHoloAvg7": 120.47,
          "reverseHoloAvg30": 130.94
        }
      }
    },
    {
      "id": "xy2-3",
      "name": "Butterfree",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "130",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Metapod",
      "attacks": [
        {
          "name": "Quiver Dance",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward. If you attached Energy in this way, heal 40 damage from this Pokémon."
        },
        {
          "name": "Gust",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy2",
        "name": "Flashfire",
        "series": "XY",
        "printedTotal": 106,
        "total": 110,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FLF",
        "releaseDate": "2014/05/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy2/symbol.png",
          "logo": "https://images.pokemontcg.io/xy2/logo.png"
        }
      },
      "number": "3",
      "artist": "sui",
      "rarity": "Rare",
      "flavorText": "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
      "nationalPokedexNumbers": [
        12
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy2/3.png",
        "large": "https://images.pokemontcg.io/xy2/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy2-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.14,
            "mid": 0.48,
            "high": 2.67,
            "market": 0.47,
            "directLow": 0.31
          },
          "reverseHolofoil": {
            "low": 0.46,
            "mid": 0.75,
            "high": 3.49,
            "market": 0.78,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy2-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.35,
          "lowPrice": 0.15,
          "trendPrice": 0.54,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.19,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 1.27,
          "lowPriceExPlus": 0.15,
          "avg1": 0.25,
          "avg7": 0.43,
          "avg30": 0.49,
          "reverseHoloAvg1": 2.43,
          "reverseHoloAvg7": 1.28,
          "reverseHoloAvg30": 1.52
        }
      }
    },
    {
      "id": "xy11-2",
      "name": "Tangrowth",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "130",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Tangela",
      "attacks": [
        {
          "name": "Leaf Storm",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Heal 40 damage from each of your Grass Pokémon."
        },
        {
          "name": "Flog",
          "cost": [
            "Grass",
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "110+",
          "text": "Flip a coin. If heads, this attack does 30 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "xy11",
        "name": "Steam Siege",
        "series": "XY",
        "printedTotal": 114,
        "total": 116,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "STS",
        "releaseDate": "2016/08/03",
        "updatedAt": "2019/04/10 19:59:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy11/symbol.png",
          "logo": "https://images.pokemontcg.io/xy11/logo.png"
        }
      },
      "number": "2",
      "artist": "kirisAki",
      "rarity": "Uncommon",
      "flavorText": "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
      "nationalPokedexNumbers": [
        465
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy11/2.png",
        "large": "https://images.pokemontcg.io/xy11/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy11-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.17,
            "high": 2,
            "market": 0.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.2,
            "mid": 0.35,
            "high": 1,
            "market": 0.46,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy11-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.1,
          "lowPrice": 0.02,
          "trendPrice": 0.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.44,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.09,
          "avg30": 0.09,
          "reverseHoloAvg1": 0.35,
          "reverseHoloAvg7": 0.46,
          "reverseHoloAvg30": 0.5
        }
      }
    },
    {
      "id": "det1-3",
      "name": "Morelull",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Shiinotic"
      ],
      "attacks": [
        {
          "name": "Sleep Spore",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Your opponent's Active Pokémon is now Asleep."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "det1",
        "name": "Detective Pikachu",
        "series": "Sun & Moon",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DET",
        "releaseDate": "2019/04/05",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/det1/symbol.png",
          "logo": "https://images.pokemontcg.io/det1/logo.png"
        }
      },
      "number": "3",
      "artist": "MPC Film",
      "rarity": "Common",
      "flavorText": "It scatters its shining spores around itself. Even though they're dangerous, nighttime tours of forests where Morelull live are popular.",
      "nationalPokedexNumbers": [
        755
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/det1/3.png",
        "large": "https://images.pokemontcg.io/det1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/det1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.03,
            "mid": 0.25,
            "high": 4.03,
            "market": 0.2,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/det1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.16,
          "lowPrice": 0.02,
          "trendPrice": 0.13,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.33,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.17,
          "lowPriceExPlus": 0.02,
          "avg1": 0.32,
          "avg7": 0.15,
          "avg30": 0.19,
          "reverseHoloAvg1": 0.1,
          "reverseHoloAvg7": 0.21,
          "reverseHoloAvg30": 0.13
        }
      }
    },
    {
      "id": "ex3-3",
      "name": "Crawdaunt",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Corphish",
      "abilities": [
        {
          "name": "Power Pinchers",
          "text": "As long as Crawdaunt is your Active Pokémon, when any of your Active Pokémon does damage to the Defending Pokémon, the attack does 10 more damage (before applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Guillotine",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex3",
        "name": "Dragon",
        "series": "EX",
        "printedTotal": 97,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DR",
        "releaseDate": "2003/11/24",
        "updatedAt": "2023/02/16 05:47:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex3/symbol.png",
          "logo": "https://images.pokemontcg.io/ex3/logo.png"
        }
      },
      "number": "3",
      "artist": "Hisao Nakamura",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        342
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex3/3.png",
        "large": "https://images.pokemontcg.io/ex3/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.19,
            "mid": 3,
            "high": 9.99,
            "market": 2.93,
            "directLow": 4.99
          },
          "reverseHolofoil": {
            "low": 2.88,
            "mid": 3.96,
            "high": 5.24,
            "market": 3.88,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.65,
          "lowPrice": 0.19,
          "trendPrice": 3.05,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.13,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 4.55,
          "lowPriceExPlus": 0.19,
          "avg1": 8.02,
          "avg7": 3.18,
          "avg30": 3.58,
          "reverseHoloAvg1": 9,
          "reverseHoloAvg7": 4.35,
          "reverseHoloAvg30": 2.96
        }
      }
    },
    {
      "id": "dv1-3",
      "name": "Dragonair",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Dragon"
      ],
      "evolvesFrom": "Dratini",
      "evolvesTo": [
        "Dragonite"
      ],
      "attacks": [
        {
          "name": "Tail Whap",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Dragon Pulse",
          "cost": [
            "Grass",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "Discard the top card of your deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Dragon",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "dv1",
        "name": "Dragon Vault",
        "series": "Black & White",
        "printedTotal": 20,
        "total": 21,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRV",
        "releaseDate": "2012/10/05",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dv1/symbol.png",
          "logo": "https://images.pokemontcg.io/dv1/logo.png"
        }
      },
      "number": "3",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "flavorText": "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
      "nationalPokedexNumbers": [
        148
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dv1/3.png",
        "large": "https://images.pokemontcg.io/dv1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dv1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1,
            "mid": 2.11,
            "high": 19.95,
            "market": 2.3,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dv1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.69,
          "lowPrice": 0.25,
          "trendPrice": 3.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 2.5,
          "reverseHoloLow": 0.4,
          "reverseHoloTrend": 2.54,
          "lowPriceExPlus": 0.4,
          "avg1": 7.95,
          "avg7": 4.19,
          "avg30": 3.12,
          "reverseHoloAvg1": 2,
          "reverseHoloAvg7": 2.43,
          "reverseHoloAvg30": 2.08
        }
      }
    },
    {
      "id": "sm9-3",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Reckless Charge",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "This Pokémon does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm9",
        "name": "Team Up",
        "series": "Sun & Moon",
        "printedTotal": 181,
        "total": 198,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "TEU",
        "releaseDate": "2019/02/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm9/symbol.png",
          "logo": "https://images.pokemontcg.io/sm9/logo.png"
        }
      },
      "number": "3",
      "artist": "SATOSHI NAKAI",
      "rarity": "Common",
      "flavorText": "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm9/3.png",
        "large": "https://images.pokemontcg.io/sm9/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm9-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 0.13,
            "mid": 0.3,
            "high": 1.44,
            "market": 0.25,
            "directLow": 0.25
          },
          "normal": {
            "low": 0.05,
            "mid": 0.16,
            "high": 1.37,
            "market": 0.11,
            "directLow": 0.09
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm9-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.06,
          "lowPrice": 0.02,
          "trendPrice": 0.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.17,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.26,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.08,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.39,
          "reverseHoloAvg7": 0.32,
          "reverseHoloAvg30": 0.31
        }
      }
    },
    {
      "id": "pop7-2",
      "name": "Gallade",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "55",
      "hp": "130",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Kirlia",
      "attacks": [
        {
          "name": "Sonic Blade",
          "cost": [
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Put damage counters on the Defending Pokémon until it is 50 HP away from being Knocked Out. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon."
        },
        {
          "name": "Psychic Cut",
          "cost": [
            "Psychic",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60+",
          "text": "You may choose as many of your face-down Prize cards as you like and put them face up. If you do, this attack does 60 damage plus 20 more damage for each Prize card you chose. (These cards remain face up for the rest of the game.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "+30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop7",
        "name": "POP Series 7",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2008/03/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop7/symbol.png",
          "logo": "https://images.pokemontcg.io/pop7/logo.png"
        }
      },
      "number": "2",
      "artist": "Daisuke Ito",
      "rarity": "Rare",
      "flavorText": "A master of courtesy and swordsmanship, it fights using extending swords on it elbows.",
      "nationalPokedexNumbers": [
        475
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop7/2.png",
        "large": "https://images.pokemontcg.io/pop7/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 4.4,
            "mid": 8.71,
            "high": 15,
            "market": 9.51,
            "directLow": 4.44
          },
          "holofoil": {
            "low": 2.15,
            "mid": 6.25,
            "high": 22,
            "market": 25.56,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.88,
          "lowPrice": 1.49,
          "trendPrice": 7.71,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 3,
          "reverseHoloTrend": 5.04,
          "lowPriceExPlus": 2.99,
          "avg1": 2.99,
          "avg7": 8.05,
          "avg30": 5.55,
          "reverseHoloAvg1": 4.9,
          "reverseHoloAvg7": 5.35,
          "reverseHoloAvg30": 6.44
        }
      }
    },
    {
      "id": "sm1-2",
      "name": "Metapod",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Caterpie",
      "evolvesTo": [
        "Butterfree"
      ],
      "attacks": [
        {
          "name": "Iron Defense",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn."
        },
        {
          "name": "Bug Bite",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "sm1",
        "name": "Sun & Moon",
        "series": "Sun & Moon",
        "printedTotal": 149,
        "total": 173,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "SUM",
        "releaseDate": "2017/02/03",
        "updatedAt": "2019/04/10 19:59:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm1/symbol.png",
          "logo": "https://images.pokemontcg.io/sm1/logo.png"
        }
      },
      "number": "2",
      "artist": "Yuka Morii",
      "rarity": "Uncommon",
      "flavorText": "Its shell is filled with its soft innards. It doesn't move much because of the risk it might carelessly spill its innards out.",
      "nationalPokedexNumbers": [
        11
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm1/2.png",
        "large": "https://images.pokemontcg.io/sm1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.13,
            "high": 1.88,
            "market": 0.11,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.06,
            "mid": 0.25,
            "high": 1.95,
            "market": 0.19,
            "directLow": 0.17
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.11,
          "lowPrice": 0.02,
          "trendPrice": 0.14,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.36,
          "reverseHoloLow": 0.08,
          "reverseHoloTrend": 0.24,
          "lowPriceExPlus": 0.02,
          "avg1": 0.04,
          "avg7": 0.13,
          "avg30": 0.09,
          "reverseHoloAvg1": 0.34,
          "reverseHoloAvg7": 0.31,
          "reverseHoloAvg30": 0.32
        }
      }
    },
    {
      "id": "mcd19-3",
      "name": "Magmar",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Fire"
      ],
      "evolvesTo": [
        "Magmortar"
      ],
      "attacks": [
        {
          "cost": [
            "Fire"
          ],
          "name": "Controlled Burn",
          "text": "Discard the top card of your opponent's deck.",
          "damage": "",
          "convertedEnergyCost": 1
        },
        {
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "name": "Flamethrower",
          "text": "Discard an Energy from this Pokémon.",
          "damage": "80",
          "convertedEnergyCost": 3
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "mcd19",
        "name": "McDonald's Collection 2019",
        "series": "Other",
        "printedTotal": 12,
        "total": 12,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "releaseDate": "2019/10/15",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/mcd19/symbol.png",
          "logo": "https://images.pokemontcg.io/mcd19/logo.png"
        }
      },
      "number": "3",
      "artist": "Yumi",
      "flavorText": "When angered, it spouts brilliant fire from all over its body. It doesn't calm down until its opponent has burned to ash.",
      "nationalPokedexNumbers": [
        126
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/mcd19/3.png",
        "large": "https://images.pokemontcg.io/mcd19/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/mcd19-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.8,
            "mid": 3.75,
            "high": 8.99,
            "market": 3.73,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/mcd19-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.8,
          "lowPrice": 0.04,
          "trendPrice": 0.97,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 2.63,
          "lowPriceExPlus": 0.8,
          "avg1": 1,
          "avg7": 1.33,
          "avg30": 1.78,
          "reverseHoloAvg1": 2.5,
          "reverseHoloAvg7": 2.86,
          "reverseHoloAvg30": 1.69
        }
      }
    },
    {
      "id": "col1-2",
      "name": "Deoxys",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Cell Storm",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Discard 2 Psychic Energy attached to Deoxys and remove 6 damage counters from Deoxys."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "col1",
        "name": "Call of Legends",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 95,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "CL",
        "releaseDate": "2011/02/09",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/col1/symbol.png",
          "logo": "https://images.pokemontcg.io/col1/logo.png"
        }
      },
      "number": "2",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "flavorText": "DNA from a space virus mutated and became a Pokémon. It appears where auroras are seen.",
      "nationalPokedexNumbers": [
        386
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/col1/2.png",
        "large": "https://images.pokemontcg.io/col1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/col1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.27,
            "mid": 6.06,
            "high": 26.44,
            "market": 11.31,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.03,
            "mid": 6.19,
            "high": 17.99,
            "market": 5.53,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/col1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 11.33,
          "lowPrice": 1.08,
          "trendPrice": 9.52,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 24,
          "reverseHoloLow": 1.5,
          "reverseHoloTrend": 12.32,
          "lowPriceExPlus": 2.8,
          "avg1": 16,
          "avg7": 9.73,
          "avg30": 7.28,
          "reverseHoloAvg1": 24,
          "reverseHoloAvg7": 14.5,
          "reverseHoloAvg30": 9.06
        }
      }
    },
    {
      "id": "pl1-3",
      "name": "Blaziken",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "59",
      "hp": "130",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Combusken",
      "abilities": [
        {
          "name": "Fire Breath",
          "text": "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Clutch",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": "The Defending Pokémon can't retreat during your opponent's next turn."
        },
        {
          "name": "Fire Spin",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "100",
          "text": "Discard 2 Energy attached to Blaziken."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pl1",
        "name": "Platinum",
        "series": "Platinum",
        "printedTotal": 127,
        "total": 133,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PL",
        "releaseDate": "2009/02/11",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
          "logo": "https://images.pokemontcg.io/pl1/logo.png"
        }
      },
      "number": "3",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        257
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl1/3.png",
        "large": "https://images.pokemontcg.io/pl1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.99,
            "mid": 5.49,
            "high": 9.68,
            "market": 7.44,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 3.36,
            "mid": 5.86,
            "high": 7.75,
            "market": 5.43,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.4,
          "lowPrice": 0.5,
          "trendPrice": 4.65,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.69,
          "reverseHoloLow": 1.4,
          "reverseHoloTrend": 4.58,
          "lowPriceExPlus": 2,
          "avg1": 5,
          "avg7": 4.27,
          "avg30": 3.61,
          "reverseHoloAvg1": 0.69,
          "reverseHoloAvg7": 3.2,
          "reverseHoloAvg30": 3.46
        }
      }
    },
    {
      "id": "sm115-2",
      "name": "Metapod",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Caterpie",
      "evolvesTo": [
        "Butterfree"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm115",
        "name": "Hidden Fates",
        "series": "Sun & Moon",
        "printedTotal": 68,
        "total": 69,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "HIF",
        "releaseDate": "2019/08/23",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm115/symbol.png",
          "logo": "https://images.pokemontcg.io/sm115/logo.png"
        }
      },
      "number": "2",
      "artist": "Shibuzoh.",
      "rarity": "Uncommon",
      "flavorText": "Its shell is filled with a thick liquid. All of the cells throughout its body are being rebuilt in preparation for evolution.",
      "nationalPokedexNumbers": [
        11
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm115/2.png",
        "large": "https://images.pokemontcg.io/sm115/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm115-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 1.28,
            "market": 0.07,
            "directLow": 0.05
          },
          "reverseHolofoil": {
            "low": 0.05,
            "mid": 0.23,
            "high": 1.32,
            "market": 0.22,
            "directLow": 0.18
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm115-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.05,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.21,
          "reverseHoloLow": 0.08,
          "reverseHoloTrend": 0.2,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.05,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.1,
          "reverseHoloAvg7": 0.22,
          "reverseHoloAvg30": 0.23
        }
      }
    },
    {
      "id": "gym1-3",
      "name": "Erika's Clefable",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "35",
      "hp": "70",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Erika's Clefairy",
      "attacks": [
        {
          "name": "Fairy Power",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, you may return any number of your Pokémon in play and all cards attached to them to your hand."
        },
        {
          "name": "Moon Impact",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "gym1",
        "name": "Gym Heroes",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G1",
        "releaseDate": "2000/08/14",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym1/symbol.png",
          "logo": "https://images.pokemontcg.io/gym1/logo.png"
        }
      },
      "number": "3",
      "artist": "Atsuko Nishida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        36
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym1/3.png",
        "large": "https://images.pokemontcg.io/gym1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 34.84,
            "mid": 45.97,
            "high": 64.14,
            "market": 54.73,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 15,
            "mid": 20.75,
            "high": 49.95,
            "market": 21.59,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 17.12,
          "lowPrice": 5,
          "trendPrice": 17.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 16.98,
          "lowPriceExPlus": 9,
          "avg1": 20,
          "avg7": 16.03,
          "avg30": 17.76,
          "reverseHoloAvg1": 9.97,
          "reverseHoloAvg7": 12.82,
          "reverseHoloAvg30": 21.42
        }
      }
    },
    {
      "id": "dp3-3",
      "name": "Charizard",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "55",
      "hp": "130",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Charmeleon",
      "abilities": [
        {
          "name": "Fury Blaze",
          "text": "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Blast Burn",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "120",
          "text": "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+40"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "dp3",
        "name": "Secret Wonders",
        "series": "Diamond & Pearl",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SW",
        "releaseDate": "2007/11/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp3/symbol.png",
          "logo": "https://images.pokemontcg.io/dp3/logo.png"
        }
      },
      "number": "3",
      "artist": "Daisuke Ito",
      "rarity": "Rare Holo",
      "flavorText": "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles.",
      "nationalPokedexNumbers": [
        6
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp3/3.png",
        "large": "https://images.pokemontcg.io/dp3/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 57.01,
            "mid": 114.69,
            "high": 179.99,
            "market": 119,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 54.42,
            "mid": 73.04,
            "high": 99.99,
            "market": 81.14,
            "directLow": 76.49
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 37.86,
          "lowPrice": 3,
          "trendPrice": 41.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 18.63,
          "reverseHoloLow": 3,
          "reverseHoloTrend": 15.21,
          "lowPriceExPlus": 21.21,
          "avg1": 33,
          "avg7": 32.84,
          "avg30": 34.97,
          "reverseHoloAvg1": 25,
          "reverseHoloAvg7": 22.19,
          "reverseHoloAvg30": 26.77
        }
      }
    },
    {
      "id": "sm2-1",
      "name": "Bellsprout",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Weepinbell"
      ],
      "attacks": [
        {
          "name": "Vine Whip",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm2",
        "name": "Guardians Rising",
        "series": "Sun & Moon",
        "printedTotal": 145,
        "total": 180,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "GRI",
        "releaseDate": "2017/05/05",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm2/symbol.png",
          "logo": "https://images.pokemontcg.io/sm2/logo.png"
        }
      },
      "number": "1",
      "artist": "Aya Kusube",
      "rarity": "Common",
      "flavorText": "Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
      "nationalPokedexNumbers": [
        69
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm2/1.png",
        "large": "https://images.pokemontcg.io/sm2/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.14,
            "high": 2,
            "market": 0.06,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.09,
            "mid": 0.25,
            "high": 2.45,
            "market": 0.22,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.2,
          "reverseHoloLow": 0.03,
          "reverseHoloTrend": 0.17,
          "lowPriceExPlus": 0.02,
          "avg1": 0.2,
          "avg7": 0.05,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.25,
          "reverseHoloAvg7": 0.18,
          "reverseHoloAvg30": 0.17
        }
      }
    },
    {
      "id": "base5-1",
      "name": "Dark Alakazam",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "30",
      "hp": "60",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Dark Kadabra",
      "attacks": [
        {
          "name": "Teleport Blast",
          "cost": [
            "Psychic",
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "You may switch Dark Alakazam with 1 of your Benched Pokémon. (Do the damage before switching the Pokémon.)"
        },
        {
          "name": "Mind Shock",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base5",
        "name": "Team Rocket",
        "series": "Base",
        "printedTotal": 82,
        "total": 83,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TR",
        "releaseDate": "2000/04/24",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base5/symbol.png",
          "logo": "https://images.pokemontcg.io/base5/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "Almost as if it were being controlled by something else, it never changes expressions, even in the middle of battle.",
      "nationalPokedexNumbers": [
        65
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base5/1.png",
        "large": "https://images.pokemontcg.io/base5/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 48.99,
            "mid": 55.99,
            "high": 85.96,
            "market": 78.95,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 22,
            "mid": 30.85,
            "high": 42.59,
            "market": 33.75,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 27.91,
          "lowPrice": 5,
          "trendPrice": 26.98,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 33.85,
          "lowPriceExPlus": 13.99,
          "avg1": 9,
          "avg7": 22.21,
          "avg30": 29.82,
          "reverseHoloAvg1": 20,
          "reverseHoloAvg7": 21.03,
          "reverseHoloAvg30": 33.72
        }
      }
    },
    {
      "id": "xy4-1",
      "name": "Venonat",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Venomoth"
      ],
      "attacks": [
        {
          "name": "Stun Spore",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy4",
        "name": "Phantom Forces",
        "series": "XY",
        "printedTotal": 119,
        "total": 124,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PHF",
        "releaseDate": "2014/11/05",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy4/symbol.png",
          "logo": "https://images.pokemontcg.io/xy4/logo.png"
        }
      },
      "number": "1",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Common",
      "flavorText": "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.",
      "nationalPokedexNumbers": [
        48
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy4/1.png",
        "large": "https://images.pokemontcg.io/xy4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.22,
            "high": 2,
            "market": 0.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.39,
            "high": 20.78,
            "market": 0.26,
            "directLow": 0.19
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.07,
          "lowPrice": 0.02,
          "trendPrice": 0.04,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.25,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 0.44,
          "lowPriceExPlus": 0.02,
          "avg1": 0.1,
          "avg7": 0.07,
          "avg30": 0.09,
          "reverseHoloAvg1": 0.2,
          "reverseHoloAvg7": 0.39,
          "reverseHoloAvg30": 0.33
        }
      }
    },
    {
      "id": "bw11-1",
      "name": "Tangela",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Tangrowth"
      ],
      "attacks": [
        {
          "name": "Beat",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Flog",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "20+",
          "text": "Flip a coin. If heads, this attack does 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "bw11",
        "name": "Legendary Treasures",
        "series": "Black & White",
        "printedTotal": 113,
        "total": 140,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "LTR",
        "releaseDate": "2013/11/06",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw11/symbol.png",
          "logo": "https://images.pokemontcg.io/bw11/logo.png"
        }
      },
      "number": "1",
      "artist": "kirisAki",
      "rarity": "Common",
      "flavorText": "Many writhing vines cover it, so its true identity remains unknown. The blue vines grow its whole life long.",
      "nationalPokedexNumbers": [
        114
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw11/1.png",
        "large": "https://images.pokemontcg.io/bw11/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw11-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.22,
            "high": 1.34,
            "market": 0.21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.3,
            "mid": 0.5,
            "high": 2.75,
            "market": 0.47,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw11-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.14,
          "lowPrice": 0.05,
          "trendPrice": 0.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 2.47,
          "lowPriceExPlus": 0.05,
          "avg1": 0.1,
          "avg7": 0.17,
          "avg30": 0.17,
          "reverseHoloAvg1": 1.75,
          "reverseHoloAvg7": 2.79,
          "reverseHoloAvg30": 1.13
        }
      }
    },
    {
      "id": "ex4-1",
      "name": "Team Aqua's Cacturne",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass",
        "Darkness"
      ],
      "evolvesFrom": "Team Aqua's Cacnea",
      "rules": [
        "This Pokémon is both Grass Darkness type."
      ],
      "attacks": [
        {
          "name": "Dark Bind",
          "cost": [
            "Darkness"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Poison Barb",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex4",
        "name": "Team Magma vs Team Aqua",
        "series": "EX",
        "printedTotal": 95,
        "total": 97,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "MA",
        "releaseDate": "2004/03/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex4/symbol.png",
          "logo": "https://images.pokemontcg.io/ex4/logo.png"
        }
      },
      "number": "1",
      "artist": "K. Utsunomiya",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        332
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex4/1.png",
        "large": "https://images.pokemontcg.io/ex4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 6.6,
            "mid": 9.27,
            "high": 39.03,
            "market": 9.48,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 8.75,
            "mid": 9,
            "high": 10.99,
            "market": 9.9,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.54,
          "lowPrice": 0.3,
          "trendPrice": 7.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7.73,
          "reverseHoloLow": 0.3,
          "reverseHoloTrend": 9.69,
          "lowPriceExPlus": 2.5,
          "avg1": 6,
          "avg7": 7.85,
          "avg30": 6.38,
          "reverseHoloAvg1": 1.95,
          "reverseHoloAvg7": 7.21,
          "reverseHoloAvg30": 8.11
        }
      }
    },
    {
      "id": "bw4-1",
      "name": "Pinsir",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Power Pinch",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip 2 coins. For each heads, discard an Energy attached to the Defending Pokémon."
        },
        {
          "name": "Grip and Squeeze",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "The Defending Pokémon can't retreat during your opponent's next turn."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "bw4",
        "name": "Next Destinies",
        "series": "Black & White",
        "printedTotal": 99,
        "total": 103,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "NXD",
        "releaseDate": "2012/02/08",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw4/symbol.png",
          "logo": "https://images.pokemontcg.io/bw4/logo.png"
        }
      },
      "number": "1",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare",
      "flavorText": "It grips prey with its pincers until the prey is torn in half. What it can't tear, it tosses far.",
      "nationalPokedexNumbers": [
        127
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw4/1.png",
        "large": "https://images.pokemontcg.io/bw4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.24,
            "mid": 0.44,
            "high": 1.64,
            "market": 0.39,
            "directLow": 0.39
          },
          "reverseHolofoil": {
            "low": 0.36,
            "mid": 0.62,
            "high": 1.99,
            "market": 0.62,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.59,
          "lowPrice": 0.1,
          "trendPrice": 0.5,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 0.74,
          "lowPriceExPlus": 0.1,
          "avg1": 0.45,
          "avg7": 0.46,
          "avg30": 0.51,
          "reverseHoloAvg1": 0.18,
          "reverseHoloAvg7": 0.84,
          "reverseHoloAvg30": 0.7
        }
      }
    },
    {
      "id": "bw9-1",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Triple Stab",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10×",
          "text": "Flip 3 coins. This attack does 10 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw9",
        "name": "Plasma Freeze",
        "series": "Black & White",
        "printedTotal": 116,
        "total": 122,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLF",
        "releaseDate": "2013/05/08",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw9/symbol.png",
          "logo": "https://images.pokemontcg.io/bw9/logo.png"
        }
      },
      "number": "1",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Common",
      "flavorText": "It eats its weight in leaves every day. It fends off attackers with the needle on its head.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw9/1.png",
        "large": "https://images.pokemontcg.io/bw9/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.24,
            "high": 2.36,
            "market": 0.22,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.2,
            "mid": 0.69,
            "high": 9.06,
            "market": 0.97,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.13,
          "lowPrice": 0.02,
          "trendPrice": 0.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.35,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.56,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.13,
          "avg30": 0.1,
          "reverseHoloAvg1": 0.39,
          "reverseHoloAvg7": 0.33,
          "reverseHoloAvg30": 0.44
        }
      }
    },
    {
      "id": "base1-1",
      "name": "Alakazam",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "42",
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Kadabra",
      "abilities": [
        {
          "name": "Damage Swap",
          "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Confuse Ray",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base1",
        "name": "Base",
        "series": "Base",
        "printedTotal": 102,
        "total": 102,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "BS",
        "releaseDate": "1999/01/09",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base1/symbol.png",
          "logo": "https://images.pokemontcg.io/base1/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
      "nationalPokedexNumbers": [
        65
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base1/1.png",
        "large": "https://images.pokemontcg.io/base1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 20,
            "mid": 40.28,
            "high": 75,
            "market": 42.79,
            "directLow": 34.79
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 75,
          "lowPrice": 25,
          "trendPrice": 140.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 145,
          "avg1": 75,
          "avg7": 127.14,
          "avg30": 152.69,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "pop3-1",
      "name": "Blastoise",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Wartortle",
      "attacks": [
        {
          "name": "Smash Turn",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "After your attack, you may switch Blastoise with 1 of your Benched Pokémon."
        },
        {
          "name": "Rocket Tackle",
          "cost": [
            "Water",
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Blastoise by attacks during your opponent's next turn."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop3",
        "name": "POP Series 3",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2006/04/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop3/symbol.png",
          "logo": "https://images.pokemontcg.io/pop3/logo.png"
        }
      },
      "number": "1",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        9
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop3/1.png",
        "large": "https://images.pokemontcg.io/pop3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 25,
            "mid": 51,
            "high": 77,
            "market": 75,
            "directLow": null
          },
          "holofoil": {
            "low": 21,
            "mid": 35.85,
            "high": 50.69,
            "market": 58.37,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 30,
          "trendPrice": 87.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 59.99,
          "lowPriceExPlus": 35,
          "avg1": 40,
          "avg7": 103.75,
          "avg30": 51.36,
          "reverseHoloAvg1": 99.99,
          "reverseHoloAvg7": 50,
          "reverseHoloAvg30": 50
        }
      }
    },
    {
      "id": "dp4-1",
      "name": "Blaziken",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "56",
      "hp": "130",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Combusken",
      "attacks": [
        {
          "name": "Fire Dance",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon."
        },
        {
          "name": "Flame Kick",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Discard 2 Fire Energy attached to Blaziken. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dp4",
        "name": "Great Encounters",
        "series": "Diamond & Pearl",
        "printedTotal": 106,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "GE",
        "releaseDate": "2008/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp4/symbol.png",
          "logo": "https://images.pokemontcg.io/dp4/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "Flames spout from its wrists, enveloping its knuckles. Its punches scorch its foes.",
      "nationalPokedexNumbers": [
        257
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp4/1.png",
        "large": "https://images.pokemontcg.io/dp4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.49,
            "mid": 5.99,
            "high": 13,
            "market": 7.42,
            "directLow": 4.15
          },
          "reverseHolofoil": {
            "low": 3,
            "mid": 5.36,
            "high": 6.99,
            "market": 5.87,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 5.64,
          "lowPrice": 0.2,
          "trendPrice": 5.31,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 6.75,
          "reverseHoloLow": 0.75,
          "reverseHoloTrend": 3.8,
          "lowPriceExPlus": 3,
          "avg1": 5.14,
          "avg7": 5.08,
          "avg30": 3.39,
          "reverseHoloAvg1": 12,
          "reverseHoloAvg7": 4.14,
          "reverseHoloAvg30": 3.37
        }
      }
    },
    {
      "id": "bw7-1",
      "name": "Oddish",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Gloom"
      ],
      "attacks": [
        {
          "name": "Absorb",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Heal 10 damage from this Pokémon."
        },
        {
          "name": "Acid",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw7",
        "name": "Boundaries Crossed",
        "series": "Black & White",
        "printedTotal": 149,
        "total": 153,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BCR",
        "releaseDate": "2012/11/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw7/symbol.png",
          "logo": "https://images.pokemontcg.io/bw7/logo.png"
        }
      },
      "number": "1",
      "artist": "Kanako Eo",
      "rarity": "Common",
      "flavorText": "It often plants its root feet in the ground during the day and sows seeds as it walks about at night.",
      "nationalPokedexNumbers": [
        43
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw7/1.png",
        "large": "https://images.pokemontcg.io/bw7/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.14,
            "mid": 0.25,
            "high": 9.06,
            "market": 0.24,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.79,
            "mid": 2.02,
            "high": 2.42,
            "market": 2.18,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw7-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.14,
          "lowPrice": 0.02,
          "trendPrice": 0.15,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 0.92,
          "lowPriceExPlus": 0.02,
          "avg1": 0.15,
          "avg7": 0.12,
          "avg30": 0.13,
          "reverseHoloAvg1": 0.65,
          "reverseHoloAvg7": 0.88,
          "reverseHoloAvg30": 0.67
        }
      }
    },
    {
      "id": "ex8-1",
      "name": "Altaria",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Swablu",
      "abilities": [
        {
          "name": "Safeguard",
          "text": "Prevent all effects of attacks, including damage, done to Altaria by your opponent's Pokémon-ex.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Double Wing Attack",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Does 20 Damage to each Defending Pokémon."
        },
        {
          "name": "Dive",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex8",
        "name": "Deoxys",
        "series": "EX",
        "printedTotal": 107,
        "total": 108,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DX",
        "releaseDate": "2005/02/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex8/symbol.png",
          "logo": "https://images.pokemontcg.io/ex8/logo.png"
        }
      },
      "number": "1",
      "artist": "Kyoko Umemoto",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        334
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex8/1.png",
        "large": "https://images.pokemontcg.io/ex8/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex8-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 12.41,
            "mid": 19.99,
            "high": 29.99,
            "market": 21.73,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 13.76,
            "mid": 18.4,
            "high": 45,
            "market": 19.35,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex8-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 11.31,
          "lowPrice": 0.99,
          "trendPrice": 14.03,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 11.99,
          "reverseHoloLow": 1.8,
          "reverseHoloTrend": 11.06,
          "lowPriceExPlus": 4.98,
          "avg1": 19.99,
          "avg7": 7.85,
          "avg30": 8.02,
          "reverseHoloAvg1": 10.01,
          "reverseHoloAvg7": 11.54,
          "reverseHoloAvg30": 10.38
        }
      }
    },
    {
      "id": "bw5-1",
      "name": "Bulbasaur",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Ivysaur"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Razor Leaf",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "bw5",
        "name": "Dark Explorers",
        "series": "Black & White",
        "printedTotal": 108,
        "total": 111,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DEX",
        "releaseDate": "2012/05/09",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw5/symbol.png",
          "logo": "https://images.pokemontcg.io/bw5/logo.png"
        }
      },
      "number": "1",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "flavorText": "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      "nationalPokedexNumbers": [
        1
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw5/1.png",
        "large": "https://images.pokemontcg.io/bw5/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.92,
            "mid": 1.95,
            "high": 6.33,
            "market": 2.15,
            "directLow": 3
          },
          "reverseHolofoil": {
            "low": 4.74,
            "mid": 5.02,
            "high": 6.64,
            "market": 5.24,
            "directLow": 4.74
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.67,
          "lowPrice": 0.02,
          "trendPrice": 0.77,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.2,
          "reverseHoloTrend": 3.66,
          "lowPriceExPlus": 0.05,
          "avg1": 4.75,
          "avg7": 1.18,
          "avg30": 1.04,
          "reverseHoloAvg1": 4.99,
          "reverseHoloAvg7": 3.48,
          "reverseHoloAvg30": 4.59
        }
      }
    },
    {
      "id": "pop5-1",
      "name": "Ho-Oh",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Fire Wing",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Fire Blast",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "Discard a Fire Energy attached to Ho-Oh."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop5",
        "name": "POP Series 5",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/03/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop5/symbol.png",
          "logo": "https://images.pokemontcg.io/pop5/logo.png"
        }
      },
      "number": "1",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        250
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop5/1.png",
        "large": "https://images.pokemontcg.io/pop5/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 3.29,
            "mid": 5.75,
            "high": 20,
            "market": 3.44,
            "directLow": null
          },
          "holofoil": {
            "low": 8.54,
            "mid": 9.88,
            "high": 36.82,
            "market": 9.89,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 39.95,
          "lowPrice": 14.5,
          "trendPrice": 25.19,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 13.19,
          "lowPriceExPlus": 32.5,
          "avg1": 39.95,
          "avg7": 26.85,
          "avg30": 22.62,
          "reverseHoloAvg1": 12.99,
          "reverseHoloAvg7": 12.81,
          "reverseHoloAvg30": 9.16
        }
      }
    },
    {
      "id": "sm5-1",
      "name": "Exeggcute",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Exeggutor"
      ],
      "attacks": [
        {
          "name": "Continuous Eggsplosion",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20×",
          "text": "Flip a coin until you get tails. This attack does 20 damage for each heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm5",
        "name": "Ultra Prism",
        "series": "Sun & Moon",
        "printedTotal": 156,
        "total": 178,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "UPR",
        "releaseDate": "2018/02/02",
        "updatedAt": "2019/02/19 23:25:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm5/symbol.png",
          "logo": "https://images.pokemontcg.io/sm5/logo.png"
        }
      },
      "number": "1",
      "artist": "kawayoo",
      "rarity": "Common",
      "flavorText": "Its six eggs use telepathy to communicate among themselves. It is believed to carry plant genes and the genes of other species.",
      "nationalPokedexNumbers": [
        102
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm5/1.png",
        "large": "https://images.pokemontcg.io/sm5/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.18,
            "high": 1.35,
            "market": 0.12,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.15,
            "mid": 0.31,
            "high": 3.42,
            "market": 0.31,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm5-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.06,
          "lowPrice": 0.02,
          "trendPrice": 0.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.1,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.16,
          "lowPriceExPlus": 0.02,
          "avg1": 0.03,
          "avg7": 0.03,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.18,
          "reverseHoloAvg7": 0.14,
          "reverseHoloAvg30": 0.3
        }
      }
    },
    {
      "id": "xy10-1",
      "name": "Shuckle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Hide a Berry",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Draw 2 cards. Then, put a card from your hand on the bottom of your deck."
        },
        {
          "name": "Wrap",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy10",
        "name": "Fates Collide",
        "series": "XY",
        "printedTotal": 124,
        "total": 129,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FCO",
        "releaseDate": "2016/05/02",
        "updatedAt": "2018/09/03 11:49:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy10/symbol.png",
          "logo": "https://images.pokemontcg.io/xy10/logo.png"
        }
      },
      "number": "1",
      "artist": "sui",
      "rarity": "Uncommon",
      "flavorText": "It stores Berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still.",
      "nationalPokedexNumbers": [
        213
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy10/1.png",
        "large": "https://images.pokemontcg.io/xy10/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy10-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.19,
            "high": 1.35,
            "market": 0.19,
            "directLow": 0.1
          },
          "reverseHolofoil": {
            "low": 0.22,
            "mid": 0.5,
            "high": 5.01,
            "market": 0.36,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy10-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.2,
          "lowPrice": 0.02,
          "trendPrice": 0.19,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.8,
          "lowPriceExPlus": 0.02,
          "avg1": 0.25,
          "avg7": 0.22,
          "avg30": 0.11,
          "reverseHoloAvg1": 0.35,
          "reverseHoloAvg7": 0.81,
          "reverseHoloAvg30": 0.63
        }
      }
    },
    {
      "id": "sm8-1",
      "name": "Tangela",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Tangrowth"
      ],
      "attacks": [
        {
          "name": "Gentle Slap",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Bind",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm8",
        "name": "Lost Thunder",
        "series": "Sun & Moon",
        "printedTotal": 214,
        "total": 240,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "LOT",
        "releaseDate": "2018/11/02",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm8/symbol.png",
          "logo": "https://images.pokemontcg.io/sm8/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "flavorText": "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
      "nationalPokedexNumbers": [
        114
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm8/1.png",
        "large": "https://images.pokemontcg.io/sm8/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm8-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.18,
            "high": 1.34,
            "market": 0.13,
            "directLow": 0.1
          },
          "reverseHolofoil": {
            "low": 0.16,
            "mid": 0.34,
            "high": 1.5,
            "market": 0.32,
            "directLow": 0.24
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm8-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.44,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 0.45,
          "lowPriceExPlus": 0.02,
          "avg1": 0.35,
          "avg7": 0.12,
          "avg30": 0.12,
          "reverseHoloAvg1": 0.65,
          "reverseHoloAvg7": 0.42,
          "reverseHoloAvg30": 0.34
        }
      }
    },
    {
      "id": "hgss2-1",
      "name": "Jirachi",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Psychic"
      ],
      "abilities": [
        {
          "name": "Stardust Song",
          "text": "Once during your turn, when you put Jirachi from your hand onto your Bench, you may flip 3 coins. For each heads, search your discard pile for a Psychic Energy card and attach it to Jirachi.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Time Hollow",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Choose a number of your opponent's Stage 1 or Stage 2 Evolved Pokémon up to the amount of Energy attached to Jirachi. Remove the highest Stage Evolution card from each of those Pokémon and put those cards back into your opponent's hand."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "hgss2",
        "name": "HS—Unleashed",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 95,
        "total": 96,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "UL",
        "releaseDate": "2010/05/12",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss2/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss2/logo.png"
        }
      },
      "number": "1",
      "artist": "Wataru Kawahara",
      "rarity": "Rare Holo",
      "flavorText": "Generations have believed that any wish written on a note on its head will come true when it awakens.",
      "nationalPokedexNumbers": [
        385
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss2/1.png",
        "large": "https://images.pokemontcg.io/hgss2/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 5.63,
            "mid": 7.87,
            "high": 26.97,
            "market": 7.16,
            "directLow": 7.69
          },
          "reverseHolofoil": {
            "low": 4.9,
            "mid": 6.11,
            "high": 13.49,
            "market": 8.02,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss2-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.64,
          "lowPrice": 0.29,
          "trendPrice": 4.27,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.41,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 3.78,
          "lowPriceExPlus": 0.8,
          "avg1": 5.3,
          "avg7": 4.32,
          "avg30": 3.83,
          "reverseHoloAvg1": 5.79,
          "reverseHoloAvg7": 3.43,
          "reverseHoloAvg30": 3.53
        }
      }
    },
    {
      "id": "dpp-DP01",
      "name": "Turtwig",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "10",
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Grotle"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [],
          "convertedEnergyCost": 0,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Razor Leaf",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "+10"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "dpp",
        "name": "DP Black Star Promos",
        "series": "Diamond & Pearl",
        "printedTotal": 56,
        "total": 56,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR-DPP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dpp/symbol.png",
          "logo": "https://images.pokemontcg.io/dpp/logo.png"
        }
      },
      "number": "DP01",
      "artist": "Masakazu Fukuda",
      "rarity": "Promo",
      "flavorText": "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.",
      "nationalPokedexNumbers": [
        387
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dpp/DP01.png",
        "large": "https://images.pokemontcg.io/dpp/DP01_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dpp-DP01",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.75,
            "mid": 5.04,
            "high": 7.65,
            "market": 6.02,
            "directLow": null
          }
        }
      }
    },
    {
      "id": "swsh1-1",
      "name": "Celebi V",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "V"
      ],
      "hp": "180",
      "types": [
        "Grass"
      ],
      "rules": [
        "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
      ],
      "attacks": [
        {
          "name": "Find a Friend",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck."
        },
        {
          "name": "Line Force",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "50+",
          "text": "This attack does 20 more damage for each of your Benched Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "swsh1",
        "name": "Sword & Shield",
        "series": "Sword & Shield",
        "printedTotal": 202,
        "total": 216,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "SSH",
        "releaseDate": "2020/02/07",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh1/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh1/logo.png"
        }
      },
      "number": "1",
      "artist": "PLANETA Igarashi",
      "rarity": "Rare Holo V",
      "nationalPokedexNumbers": [
        251
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh1/1.png",
        "large": "https://images.pokemontcg.io/swsh1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.45,
            "mid": 0.99,
            "high": 5,
            "market": 0.78,
            "directLow": 0.81
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.79,
          "lowPrice": 0.4,
          "trendPrice": 1.92,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.67,
          "lowPriceExPlus": 0.5,
          "avg1": 1.35,
          "avg7": 1.47,
          "avg30": 1.71,
          "reverseHoloAvg1": 3.45,
          "reverseHoloAvg7": 4.69,
          "reverseHoloAvg30": 4.55
        }
      }
    },
    {
      "id": "basep-1",
      "name": "Pikachu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "16",
      "hp": "60",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Raichu"
      ],
      "attacks": [
        {
          "name": "Growl",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)"
        },
        {
          "name": "Thundershock",
          "cost": [
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "basep",
        "name": "Wizards Black Star Promos",
        "series": "Base",
        "printedTotal": 53,
        "total": 53,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR",
        "releaseDate": "1999/07/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/basep/symbol.png",
          "logo": "https://images.pokemontcg.io/basep/logo.png"
        }
      },
      "number": "1",
      "artist": "Keiji Kinebuchi",
      "rarity": "Promo",
      "flavorText": "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
      "nationalPokedexNumbers": [
        25
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/basep/1.png",
        "large": "https://images.pokemontcg.io/basep/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/basep-1",
        "updatedAt": "2023/03/27"
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/basep-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.86,
          "lowPrice": 2.5,
          "trendPrice": 6.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 16.32,
          "lowPriceExPlus": 5,
          "avg1": 3.5,
          "avg7": 9.1,
          "avg30": 8.16,
          "reverseHoloAvg1": 12,
          "reverseHoloAvg7": 12.83,
          "reverseHoloAvg30": 12.83
        }
      }
    },
    {
      "id": "swsh4-1",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Bug Hunch",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for up to 2 Grass Pokémon, reveal them, and put them into your hand. Then, shuffle your deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "swsh4",
        "name": "Vivid Voltage",
        "series": "Sword & Shield",
        "printedTotal": 185,
        "total": 203,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "VIV",
        "releaseDate": "2020/11/13",
        "updatedAt": "2020/11/13 16:20:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh4/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh4/logo.png"
        }
      },
      "number": "1",
      "artist": "sui",
      "rarity": "Common",
      "flavorText": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh4/1.png",
        "large": "https://images.pokemontcg.io/swsh4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.09,
            "high": 1.31,
            "market": 0.03,
            "directLow": 0.02
          },
          "reverseHolofoil": {
            "low": 0.01,
            "mid": 0.15,
            "high": 2,
            "market": 0.1,
            "directLow": 0.01
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.03,
          "lowPrice": 0.02,
          "trendPrice": 0.02,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.16,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.19,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.02,
          "avg30": 0.03,
          "reverseHoloAvg1": 0.2,
          "reverseHoloAvg7": 0.17,
          "reverseHoloAvg30": 0.16
        }
      }
    },
    {
      "id": "xy1-1",
      "name": "Venusaur-EX",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "EX"
      ],
      "hp": "180",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "M Venusaur-EX"
      ],
      "rules": [
        "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
      ],
      "attacks": [
        {
          "name": "Poison Powder",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Your opponent's Active Pokémon is now Poisoned."
        },
        {
          "name": "Jungle Hammer",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "90",
          "text": "Heal 30 damage from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "xy1",
        "name": "XY",
        "series": "XY",
        "printedTotal": 146,
        "total": 146,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "XY",
        "releaseDate": "2014/02/05",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy1/symbol.png",
          "logo": "https://images.pokemontcg.io/xy1/logo.png"
        }
      },
      "number": "1",
      "artist": "Eske Yoshinob",
      "rarity": "Rare Holo EX",
      "nationalPokedexNumbers": [
        3
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy1/1.png",
        "large": "https://images.pokemontcg.io/xy1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.75,
            "mid": 3.23,
            "high": 12.95,
            "market": 3.51,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.26,
          "lowPrice": 2,
          "trendPrice": 4.92,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.37,
          "lowPriceExPlus": 2.5,
          "avg1": 5,
          "avg7": 4.89,
          "avg30": 4.88,
          "reverseHoloAvg1": 3.99,
          "reverseHoloAvg7": 4.56,
          "reverseHoloAvg30": 4.47
        }
      }
    },
    {
      "id": "pop1-1",
      "name": "Blaziken",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "110",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Combusken",
      "attacks": [
        {
          "name": "Fire Punch",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": ""
        },
        {
          "name": "Double Kick",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50×",
          "text": "Flip 2 coins. This attack does 50 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop1",
        "name": "POP Series 1",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2004/09/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop1/symbol.png",
          "logo": "https://images.pokemontcg.io/pop1/logo.png"
        }
      },
      "number": "1",
      "artist": "Katsura Tabata",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        257
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop1/1.png",
        "large": "https://images.pokemontcg.io/pop1/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 2.67,
            "mid": 5.99,
            "high": 8,
            "market": 7.34,
            "directLow": null
          },
          "holofoil": {
            "low": 3.46,
            "mid": 5.75,
            "high": 9,
            "market": 6.56,
            "directLow": 3.48
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop1-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.95,
          "lowPrice": 4.5,
          "trendPrice": 26.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 11.74,
          "lowPriceExPlus": 6,
          "avg1": 6.99,
          "avg7": 30.13,
          "avg30": 17,
          "reverseHoloAvg1": 9.49,
          "reverseHoloAvg7": 13.1,
          "reverseHoloAvg30": 8.07
        }
      }
    },
    {
      "id": "bw8-1",
      "name": "Turtwig",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Grotle"
      ],
      "attacks": [
        {
          "name": "Nap",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 20 damage from this Pokémon."
        },
        {
          "name": "Razor Leaf",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "bw8",
        "name": "Plasma Storm",
        "series": "Black & White",
        "printedTotal": 135,
        "total": 138,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLS",
        "releaseDate": "2013/02/06",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw8/symbol.png",
          "logo": "https://images.pokemontcg.io/bw8/logo.png"
        }
      },
      "number": "1",
      "artist": "Kouki Saitou",
      "rarity": "Common",
      "flavorText": "The shell on its back is made of soil. On a very healthy Turtwig, the shell should feel moist.",
      "nationalPokedexNumbers": [
        387
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw8/1.png",
        "large": "https://images.pokemontcg.io/bw8/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw8-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.13,
            "mid": 0.29,
            "high": 2.16,
            "market": 0.33,
            "directLow": 0.2
          },
          "reverseHolofoil": {
            "low": 0.92,
            "mid": 1.1,
            "high": 3.14,
            "market": 1.13,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw8-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.15,
          "lowPrice": 0.02,
          "trendPrice": 0.14,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 1.5,
          "lowPriceExPlus": 0.02,
          "avg1": 0.15,
          "avg7": 0.17,
          "avg30": 0.14,
          "reverseHoloAvg1": 0.25,
          "reverseHoloAvg7": 1.6,
          "reverseHoloAvg30": 0.92
        }
      }
    },
    {
      "id": "base6-1",
      "name": "Alakazam",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "42",
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Kadabra",
      "abilities": [
        {
          "name": "Damage Swap",
          "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is affected by a Special Condition.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Confuse Ray",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base6",
        "name": "Legendary Collection",
        "series": "Other",
        "printedTotal": 110,
        "total": 110,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LC",
        "releaseDate": "2002/05/24",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base6/symbol.png",
          "logo": "https://images.pokemontcg.io/base6/logo.png"
        }
      },
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
      "nationalPokedexNumbers": [
        65
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base6/1.png",
        "large": "https://images.pokemontcg.io/base6/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base6-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 14.95,
            "mid": 16.99,
            "high": 37.14,
            "market": 44.48,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 48.98,
            "mid": 70.86,
            "high": 79.99,
            "market": 84.44,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base6-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 32,
          "lowPrice": 4.99,
          "trendPrice": 22.75,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 24.9,
          "reverseHoloLow": 23.99,
          "reverseHoloTrend": 64.2,
          "lowPriceExPlus": 24.99,
          "avg1": 7.9,
          "avg7": 20.27,
          "avg30": 17.06,
          "reverseHoloAvg1": 24.9,
          "reverseHoloAvg7": 81.33,
          "reverseHoloAvg30": 75.62
        }
      }
    },
    {
      "id": "pop9-1",
      "name": "Garchomp",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "64",
      "hp": "130",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Gabite",
      "attacks": [
        {
          "name": "Dragon Rage",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "80",
          "text": "Flip 2 coins. If either of them is tails, this attack does nothing."
        },
        {
          "name": "Jet Sword",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "100",
          "text": "Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "+30"
        }
      ],
      "set": {
        "id": "pop9",
        "name": "POP Series 9",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/03/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop9/symbol.png",
          "logo": "https://images.pokemontcg.io/pop9/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare",
      "flavorText": "It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.",
      "nationalPokedexNumbers": [
        445
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop9/1.png",
        "large": "https://images.pokemontcg.io/pop9/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 4,
            "mid": 7.7,
            "high": 9.72,
            "market": 9.17,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop9-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 3.99,
          "trendPrice": 9.37,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 3.11,
          "lowPriceExPlus": 9.49,
          "avg1": 10,
          "avg7": 9.19,
          "avg30": 8.55,
          "reverseHoloAvg1": 3.11,
          "reverseHoloAvg7": 2,
          "reverseHoloAvg30": 2
        }
      }
    },
    {
      "id": "pop4-1",
      "name": "Chimecho δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Metal"
      ],
      "attacks": [
        {
          "name": "Wrap",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Sonicboom",
          "cost": [
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "This attack's damage isn't affected by Weakness or Resistance."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop4",
        "name": "POP Series 4",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2006/08/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop4/symbol.png",
          "logo": "https://images.pokemontcg.io/pop4/logo.png"
        }
      },
      "number": "1",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        358
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop4/1.png",
        "large": "https://images.pokemontcg.io/pop4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 368.99,
            "mid": 393.99,
            "high": 396,
            "market": 399.99,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 372.5,
          "lowPrice": 350,
          "trendPrice": 174.71,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 50,
          "lowPriceExPlus": 350,
          "avg1": 350,
          "avg7": 174.99,
          "avg30": 77.91,
          "reverseHoloAvg1": 50,
          "reverseHoloAvg7": 50,
          "reverseHoloAvg30": 50
        }
      }
    },
    {
      "id": "neo4-1",
      "name": "Dark Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "36",
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Dark Flaaffy",
      "abilities": [
        {
          "name": "Conductivity",
          "text": "Whenever your opponent attaches an Energy card from his or her hand to a Pokémon, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if you have more than 1 Dark Ampharos in play or while Dark Ampharos is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Shock Bolt",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Discard all Lightning Energy cards attached to Dark Ampharos or this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "neo4",
        "name": "Neo Destiny",
        "series": "Neo",
        "printedTotal": 105,
        "total": 113,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "N4",
        "releaseDate": "2002/02/28",
        "updatedAt": "2020/09/25 10:09:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/neo4/symbol.png",
          "logo": "https://images.pokemontcg.io/neo4/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "Its brightly lit tail can be seen for miles in the dark, even by ships on the sea.",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/neo4/1.png",
        "large": "https://images.pokemontcg.io/neo4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/neo4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 79.99,
            "mid": 104.99,
            "high": 175,
            "market": 109.99,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 41,
            "mid": 68.5,
            "high": 99.99,
            "market": 43.04,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/neo4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 30.36,
          "lowPrice": 7.9,
          "trendPrice": 42.26,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 19.79,
          "lowPriceExPlus": 14,
          "avg1": 59.99,
          "avg7": 38.48,
          "avg30": 45.6,
          "reverseHoloAvg1": 6.8,
          "reverseHoloAvg7": 16.67,
          "reverseHoloAvg30": 21.07
        }
      }
    },
    {
      "id": "neo3-1",
      "name": "Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "46",
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flaaffy",
      "attacks": [
        {
          "name": "Attract Current",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Flip 3 coins. For each heads, you may search your deck for a Lightning Energy card and attach it to 1 of your Lightning Pokémon. Shuffle your deck afterward."
        },
        {
          "name": "Gigavolt",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "40+",
          "text": "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "neo3",
        "name": "Neo Revelation",
        "series": "Neo",
        "printedTotal": 64,
        "total": 66,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "N3",
        "releaseDate": "2001/09/21",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/neo3/symbol.png",
          "logo": "https://images.pokemontcg.io/neo3/logo.png"
        }
      },
      "number": "1",
      "artist": "Toshinao Aoki",
      "rarity": "Rare Holo",
      "flavorText": "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/neo3/1.png",
        "large": "https://images.pokemontcg.io/neo3/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/neo3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 60.84,
            "mid": 77.5,
            "high": 144.85,
            "market": 54.7,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 22,
            "mid": 34.02,
            "high": 48.26,
            "market": 38.29,
            "directLow": 41.54
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/neo3-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 21.03,
          "lowPrice": 4,
          "trendPrice": 20.62,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 16,
          "lowPriceExPlus": 12,
          "avg1": 15,
          "avg7": 21.49,
          "avg30": 18.23,
          "reverseHoloAvg1": 24.19,
          "reverseHoloAvg7": 18.31,
          "reverseHoloAvg30": 14.84
        }
      }
    },
    {
      "id": "pl4-1",
      "name": "Charizard",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "60",
      "hp": "140",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Charmeleon",
      "abilities": [
        {
          "name": "Fire Formation",
          "text": "Each of Charizard's attacks does 10 more damage for each Fire Pokémon on your Bench to your opponent's Active Pokémon (before applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Fire Wing",
          "cost": [
            "Fire"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Burning Tail",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Discard a Fire Energy attached to Charizard."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+30"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pl4",
        "name": "Arceus",
        "series": "Platinum",
        "printedTotal": 99,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AR",
        "releaseDate": "2009/11/04",
        "updatedAt": "2021/07/15 11:30:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl4/symbol.png",
          "logo": "https://images.pokemontcg.io/pl4/logo.png"
        }
      },
      "number": "1",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        6
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl4/1.png",
        "large": "https://images.pokemontcg.io/pl4/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 33.49,
            "mid": 39.68,
            "high": 45.99,
            "market": 40.48,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 33.97,
            "mid": 51.18,
            "high": 70,
            "market": 58.39,
            "directLow": 33.99
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl4-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 16.6,
          "lowPrice": 5,
          "trendPrice": 13.81,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 5.94,
          "reverseHoloTrend": 15.83,
          "lowPriceExPlus": 14,
          "avg1": 5,
          "avg7": 11.58,
          "avg30": 14.79,
          "reverseHoloAvg1": 10,
          "reverseHoloAvg7": 14.98,
          "reverseHoloAvg30": 18.55
        }
      }
    },
    {
      "id": "mcd19-4",
      "name": "Alolan Sandshrew",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Water"
      ],
      "evolvesTo": [
        "Sandslash"
      ],
      "attacks": [
        {
          "cost": [],
          "name": "Fury Swipes",
          "text": "Flip 3 coins. This attack does 10 damage for each heads.",
          "damage": "10",
          "convertedEnergyCost": 0
        }
      ],
      "weaknesses": [
        {
          "type": "Metal",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "mcd19",
        "name": "McDonald's Collection 2019",
        "series": "Other",
        "printedTotal": 12,
        "total": 12,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "releaseDate": "2019/10/15",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/mcd19/symbol.png",
          "logo": "https://images.pokemontcg.io/mcd19/logo.png"
        }
      },
      "number": "4",
      "artist": "Shin Nagasawa",
      "flavorText": "An ancient tradition of Alolan festivals, still carried on to this day, is a competition to slide Sandshrew across ice as far as one can.",
      "nationalPokedexNumbers": [
        27
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/mcd19/4.png",
        "large": "https://images.pokemontcg.io/mcd19/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/mcd19-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.5,
            "mid": 3.89,
            "high": 5.58,
            "market": 3.21,
            "directLow": 3.95
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/mcd19-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.25,
          "lowPrice": 0.19,
          "trendPrice": 1.58,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 2.21,
          "lowPriceExPlus": 0.48,
          "avg1": 1,
          "avg7": 1.54,
          "avg30": 1.45,
          "reverseHoloAvg1": 1.39,
          "reverseHoloAvg7": 2.36,
          "reverseHoloAvg30": 1.67
        }
      }
    },
    {
      "id": "sm115-3",
      "name": "Butterfree",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "130",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Metapod",
      "attacks": [
        {
          "name": "Gust",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "80",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm115",
        "name": "Hidden Fates",
        "series": "Sun & Moon",
        "printedTotal": 68,
        "total": 69,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "HIF",
        "releaseDate": "2019/08/23",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm115/symbol.png",
          "logo": "https://images.pokemontcg.io/sm115/logo.png"
        }
      },
      "number": "3",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare",
      "flavorText": "Its wings are covered in toxic scales. If it finds bird Pokémon going after Caterpie, Butterfree sprinkles its scales on them to drive them off.",
      "nationalPokedexNumbers": [
        12
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm115/3.png",
        "large": "https://images.pokemontcg.io/sm115/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm115-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.07,
            "mid": 0.2,
            "high": 1.35,
            "market": 0.17,
            "directLow": 0.12
          },
          "reverseHolofoil": {
            "low": 0.08,
            "mid": 0.46,
            "high": 2.25,
            "market": 0.41,
            "directLow": 0.45
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm115-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.13,
          "lowPrice": 0.02,
          "trendPrice": 0.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.56,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 0.39,
          "lowPriceExPlus": 0.02,
          "avg1": 0.25,
          "avg7": 0.09,
          "avg30": 0.13,
          "reverseHoloAvg1": 0.3,
          "reverseHoloAvg7": 0.52,
          "reverseHoloAvg30": 0.52
        }
      }
    },
    {
      "id": "base3-4",
      "name": "Dragonite",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "45",
      "hp": "100",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Dragonair",
      "abilities": [
        {
          "name": "Step In",
          "text": "Once during your turn (before your attack), if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Slam",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "40×",
          "text": "Flip 2 coins. This attack does 40 damage times the number of heads."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "base3",
        "name": "Fossil",
        "series": "Base",
        "printedTotal": 62,
        "total": 62,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "FO",
        "releaseDate": "1999/10/10",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base3/symbol.png",
          "logo": "https://images.pokemontcg.io/base3/logo.png"
        }
      },
      "number": "4",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",
      "nationalPokedexNumbers": [
        149
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base3/4.png",
        "large": "https://images.pokemontcg.io/base3/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 299,
            "mid": 374.55,
            "high": 495.95,
            "market": 325.84,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 37.06,
            "mid": 58.75,
            "high": 100,
            "market": 65.06,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 55.43,
          "lowPrice": 9.99,
          "trendPrice": 88.41,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 40.43,
          "lowPriceExPlus": 28.5,
          "avg1": 27.5,
          "avg7": 78.12,
          "avg30": 59.56,
          "reverseHoloAvg1": 81.66,
          "reverseHoloAvg7": 48.96,
          "reverseHoloAvg30": 48.56
        }
      }
    },
    {
      "id": "ex9-3",
      "name": "Exploud",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Loudred",
      "attacks": [
        {
          "name": "Collect",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Draw 3 cards."
        },
        {
          "name": "Body Slam",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Hyper Voice",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        },
        {
          "name": "Mega Throw",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60+",
          "text": "If the Defending Pokémon is Pokémon-ex, this attack does 60 damage plus 40 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex9",
        "name": "Emerald",
        "series": "EX",
        "printedTotal": 106,
        "total": 107,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "EM",
        "releaseDate": "2005/05/01",
        "updatedAt": "2020/02/08 09:00:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex9/symbol.png",
          "logo": "https://images.pokemontcg.io/ex9/logo.png"
        }
      },
      "number": "3",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        295
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex9/3.png",
        "large": "https://images.pokemontcg.io/ex9/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex9-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 8,
            "mid": 14.5,
            "high": 29.99,
            "market": 11.26,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 16,
            "mid": 27.19,
            "high": 29.99,
            "market": 27.37,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex9-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 1,
          "trendPrice": 26.17,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 7.8,
          "avg1": 9.5,
          "avg7": 17.28,
          "avg30": 13.75,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "pop7-3",
      "name": "Latias",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "45",
      "hp": "80",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Miraculous Light",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Remove 2 damage counters and all Special Conditions from Latias."
        },
        {
          "name": "Mist Ball",
          "cost": [
            "Fire",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Discard a Fire and a Water Energy attached to Latias."
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop7",
        "name": "POP Series 7",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2008/03/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop7/symbol.png",
          "logo": "https://images.pokemontcg.io/pop7/logo.png"
        }
      },
      "number": "3",
      "artist": "Daisuke Ito",
      "rarity": "Rare",
      "flavorText": "Its body is covered with a down that can refract light in such a way that it becomes invisible.",
      "nationalPokedexNumbers": [
        380
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop7/3.png",
        "large": "https://images.pokemontcg.io/pop7/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 3.1,
            "mid": 4.78,
            "high": 9.04,
            "market": 6.54,
            "directLow": null
          },
          "holofoil": {
            "low": 1.99,
            "mid": 3.5,
            "high": 7.5,
            "market": 5.94,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.78,
          "lowPrice": 0.79,
          "trendPrice": 3.41,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 2,
          "reverseHoloTrend": 5.65,
          "lowPriceExPlus": 1,
          "avg1": 6.33,
          "avg7": 3.49,
          "avg30": 3.84,
          "reverseHoloAvg1": 6.95,
          "reverseHoloAvg7": 4.85,
          "reverseHoloAvg30": 2.84
        }
      }
    },
    {
      "id": "pop6-4",
      "name": "Pachirisu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "23",
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Minor Errand-Running",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
        },
        {
          "name": "Thunder Jolt",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Flip a coin. If tails, Pachirisu does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop6",
        "name": "POP Series 6",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/09/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop6/symbol.png",
          "logo": "https://images.pokemontcg.io/pop6/logo.png"
        }
      },
      "number": "4",
      "artist": "Atsuko Nishida",
      "rarity": "Rare",
      "flavorText": "It makes fur balls that crackle with static electricity. It stores them with berries in tree holes.",
      "nationalPokedexNumbers": [
        417
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop6/4.png",
        "large": "https://images.pokemontcg.io/pop6/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop6-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.89,
            "mid": 1.83,
            "high": 4.59,
            "market": 2.05,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop6-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.75,
          "lowPrice": 0.29,
          "trendPrice": 0.99,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 20,
          "reverseHoloTrend": 0.86,
          "lowPriceExPlus": 0.4,
          "avg1": 0.82,
          "avg7": 1.14,
          "avg30": 0.74,
          "reverseHoloAvg1": 1.95,
          "reverseHoloAvg7": 0.96,
          "reverseHoloAvg30": 0.8
        }
      }
    },
    {
      "id": "det1-4",
      "name": "Charmander",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Fire"
      ],
      "evolvesTo": [
        "Charmeleon"
      ],
      "attacks": [
        {
          "name": "Reckless Charge",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "This Pokémon does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "det1",
        "name": "Detective Pikachu",
        "series": "Sun & Moon",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DET",
        "releaseDate": "2019/04/05",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/det1/symbol.png",
          "logo": "https://images.pokemontcg.io/det1/logo.png"
        }
      },
      "number": "4",
      "artist": "MPC Film",
      "rarity": "Common",
      "flavorText": "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
      "nationalPokedexNumbers": [
        4
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/det1/4.png",
        "large": "https://images.pokemontcg.io/det1/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/det1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.05,
            "mid": 0.25,
            "high": 5.03,
            "market": 0.23,
            "directLow": 0.21
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/det1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.32,
          "lowPrice": 0.02,
          "trendPrice": 0.27,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.58,
          "reverseHoloLow": 0.04,
          "reverseHoloTrend": 0.39,
          "lowPriceExPlus": 0.02,
          "avg1": 0.33,
          "avg7": 0.18,
          "avg30": 0.3,
          "reverseHoloAvg1": 0.62,
          "reverseHoloAvg7": 0.36,
          "reverseHoloAvg30": 0.47
        }
      }
    },
    {
      "id": "ex4-2",
      "name": "Team Aqua's Crawdaunt",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Water",
        "Darkness"
      ],
      "evolvesFrom": "Team Aqua's Corphish",
      "rules": [
        "This Pokémon is both Water Darkness type."
      ],
      "attacks": [
        {
          "name": "Aqua Reverse",
          "cost": [
            "Darkness",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
        },
        {
          "name": "Deep Impact",
          "cost": [
            "Water",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex4",
        "name": "Team Magma vs Team Aqua",
        "series": "EX",
        "printedTotal": 95,
        "total": 97,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "MA",
        "releaseDate": "2004/03/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex4/symbol.png",
          "logo": "https://images.pokemontcg.io/ex4/logo.png"
        }
      },
      "number": "2",
      "artist": "Nakaoka",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        342
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex4/2.png",
        "large": "https://images.pokemontcg.io/ex4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 7.19,
            "mid": 8.89,
            "high": 10.35,
            "market": 7.57,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 3.08,
            "mid": 13.65,
            "high": 31.48,
            "market": 3.11,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.06,
          "lowPrice": 0.49,
          "trendPrice": 6.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 9.99,
          "lowPriceExPlus": 2.99,
          "avg1": 5,
          "avg7": 6.46,
          "avg30": 5.15,
          "reverseHoloAvg1": 4,
          "reverseHoloAvg7": 9.56,
          "reverseHoloAvg30": 5.86
        }
      }
    },
    {
      "id": "hgss1-4",
      "name": "Gyarados",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "130",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Magikarp",
      "attacks": [
        {
          "name": "Hydro Splash",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        },
        {
          "name": "Hyper Beam",
          "cost": [
            "Water",
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": "Discard an Energy card attached to the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "hgss1",
        "name": "HeartGold & SoulSilver",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 123,
        "total": 124,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HS",
        "releaseDate": "2010/02/10",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss1/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss1/logo.png"
        }
      },
      "number": "4",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
      "nationalPokedexNumbers": [
        130
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss1/4.png",
        "large": "https://images.pokemontcg.io/hgss1/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 6.41,
            "mid": 8.11,
            "high": 23,
            "market": 13.64,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 14.99,
            "mid": 16,
            "high": 21.69,
            "market": 17.34,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.56,
          "lowPrice": 0.5,
          "trendPrice": 6.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 5.24,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 4.25,
          "lowPriceExPlus": 3.5,
          "avg1": 3.75,
          "avg7": 6.61,
          "avg30": 6.79,
          "reverseHoloAvg1": 3.75,
          "reverseHoloAvg7": 5.23,
          "reverseHoloAvg30": 6.15
        }
      }
    },
    {
      "id": "xy1-2",
      "name": "M Venusaur-EX",
      "supertype": "Pokémon",
      "subtypes": [
        "MEGA",
        "EX"
      ],
      "hp": "230",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Venusaur-EX",
      "rules": [
        "Mega Evolution rule: When 1 of your Pokémon becomes a Mega Evolution Pokémon, your turn ends.",
        "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
      ],
      "attacks": [
        {
          "name": "Crisis Vine",
          "cost": [
            "Grass",
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "120",
          "text": "Your opponent's Active Pokémon is now Paralyzed and Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "xy1",
        "name": "XY",
        "series": "XY",
        "printedTotal": 146,
        "total": 146,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "XY",
        "releaseDate": "2014/02/05",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy1/symbol.png",
          "logo": "https://images.pokemontcg.io/xy1/logo.png"
        }
      },
      "number": "2",
      "artist": "5ban Graphics",
      "rarity": "Rare Holo EX",
      "nationalPokedexNumbers": [
        3
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy1/2.png",
        "large": "https://images.pokemontcg.io/xy1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.7,
            "mid": 6.06,
            "high": 16.9,
            "market": 6.39,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 10.61,
          "lowPrice": 3,
          "trendPrice": 11.32,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 11.68,
          "lowPriceExPlus": 7,
          "avg1": 9.98,
          "avg7": 10.14,
          "avg30": 10.14,
          "reverseHoloAvg1": 15.2,
          "reverseHoloAvg7": 10.45,
          "reverseHoloAvg30": 11.12
        }
      }
    },
    {
      "id": "ex8-2",
      "name": "Beautifly",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Silcoon",
      "abilities": [
        {
          "name": "Hunch",
          "text": "As long as Beautifly's remaining HP is 40 or less, Beautifly does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Luring Antenna",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
        },
        {
          "name": "Cutting Wind",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex8",
        "name": "Deoxys",
        "series": "EX",
        "printedTotal": 107,
        "total": 108,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DX",
        "releaseDate": "2005/02/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex8/symbol.png",
          "logo": "https://images.pokemontcg.io/ex8/logo.png"
        }
      },
      "number": "2",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        267
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex8/2.png",
        "large": "https://images.pokemontcg.io/ex8/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex8-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.17,
            "mid": 9.74,
            "high": 13.39,
            "market": 11.51,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 6.29,
            "mid": 12.03,
            "high": 12.76,
            "market": 12.76,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex8-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.86,
          "lowPrice": 0.5,
          "trendPrice": 7.29,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 2.9,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 6.28,
          "lowPriceExPlus": 3,
          "avg1": 5,
          "avg7": 7.27,
          "avg30": 6.16,
          "reverseHoloAvg1": 2.99,
          "reverseHoloAvg7": 2.88,
          "reverseHoloAvg30": 7.45
        }
      }
    },
    {
      "id": "bw5-2",
      "name": "Ivysaur",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Bulbasaur",
      "evolvesTo": [
        "Venusaur"
      ],
      "attacks": [
        {
          "name": "Sleep Powder",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "The Defending Pokémon is now Asleep."
        },
        {
          "name": "Poison Powder",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "bw5",
        "name": "Dark Explorers",
        "series": "Black & White",
        "printedTotal": 108,
        "total": 111,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DEX",
        "releaseDate": "2012/05/09",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw5/symbol.png",
          "logo": "https://images.pokemontcg.io/bw5/logo.png"
        }
      },
      "number": "2",
      "artist": "sui",
      "rarity": "Uncommon",
      "flavorText": "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
      "nationalPokedexNumbers": [
        2
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw5/2.png",
        "large": "https://images.pokemontcg.io/bw5/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 6.41,
            "mid": 8.76,
            "high": 11.11,
            "market": 7.3,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 14.95,
            "mid": 16.99,
            "high": 27.99,
            "market": 14.77,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.23,
          "lowPrice": 0.6,
          "trendPrice": 2.04,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 1.7,
          "reverseHoloTrend": 11.6,
          "lowPriceExPlus": 0.6,
          "avg1": 3.5,
          "avg7": 2.2,
          "avg30": 2.21,
          "reverseHoloAvg1": 1,
          "reverseHoloAvg7": 11.22,
          "reverseHoloAvg30": 6.64
        }
      }
    },
    {
      "id": "dpp-DP02",
      "name": "Chimchar",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "8",
      "hp": "50",
      "types": [
        "Fire"
      ],
      "evolvesTo": [
        "Monferno"
      ],
      "attacks": [
        {
          "name": "Scratch",
          "cost": [],
          "convertedEnergyCost": 0,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Ember",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If tails, discard a Fire Energy attached to Chimchar."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+10"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dpp",
        "name": "DP Black Star Promos",
        "series": "Diamond & Pearl",
        "printedTotal": 56,
        "total": 56,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR-DPP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dpp/symbol.png",
          "logo": "https://images.pokemontcg.io/dpp/logo.png"
        }
      },
      "number": "DP02",
      "artist": "Kagemaru Himeno",
      "rarity": "Promo",
      "flavorText": "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
      "nationalPokedexNumbers": [
        390
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dpp/DP02.png",
        "large": "https://images.pokemontcg.io/dpp/DP02_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dpp-DP02",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.49,
            "mid": 1.95,
            "high": 4.99,
            "market": 3.51,
            "directLow": null
          }
        }
      }
    },
    {
      "id": "sm2-2",
      "name": "Weepinbell",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Bellsprout",
      "evolvesTo": [
        "Victreebel"
      ],
      "attacks": [
        {
          "name": "Muddy Acid",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm2",
        "name": "Guardians Rising",
        "series": "Sun & Moon",
        "printedTotal": 145,
        "total": 180,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "GRI",
        "releaseDate": "2017/05/05",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm2/symbol.png",
          "logo": "https://images.pokemontcg.io/sm2/logo.png"
        }
      },
      "number": "2",
      "artist": "Mina Nakai",
      "rarity": "Uncommon",
      "flavorText": "The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.",
      "nationalPokedexNumbers": [
        70
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm2/2.png",
        "large": "https://images.pokemontcg.io/sm2/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.03,
            "mid": 0.15,
            "high": 2.05,
            "market": 0.07,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.16,
            "mid": 0.25,
            "high": 5.01,
            "market": 0.26,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.09,
          "lowPrice": 0.02,
          "trendPrice": 0.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.24,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.33,
          "lowPriceExPlus": 0.02,
          "avg1": 0.07,
          "avg7": 0.11,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.34,
          "reverseHoloAvg7": 0.24,
          "reverseHoloAvg30": 0.32
        }
      }
    },
    {
      "id": "pop4-2",
      "name": "Deoxys δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Colorless"
      ],
      "abilities": [
        {
          "name": "Form Change",
          "text": "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Crystal Laser",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "During your next turn, Deoxys's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance)."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop4",
        "name": "POP Series 4",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2006/08/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop4/symbol.png",
          "logo": "https://images.pokemontcg.io/pop4/logo.png"
        }
      },
      "number": "2",
      "artist": "Kouki Saitou",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        386
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop4/2.png",
        "large": "https://images.pokemontcg.io/pop4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 8,
            "mid": 14.97,
            "high": 29.58,
            "market": 13.49,
            "directLow": null
          },
          "holofoil": {
            "low": 10.12,
            "mid": 17.99,
            "high": 34.98,
            "market": 9.92,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 16.25,
          "lowPrice": 2.49,
          "trendPrice": 15.88,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 9.95,
          "reverseHoloTrend": 27.77,
          "lowPriceExPlus": 13.5,
          "avg1": 18.5,
          "avg7": 13.77,
          "avg30": 12.82,
          "reverseHoloAvg1": 40,
          "reverseHoloAvg7": 10.43,
          "reverseHoloAvg30": 7.75
        }
      }
    },
    {
      "id": "bw7-2",
      "name": "Gloom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Oddish",
      "evolvesTo": [
        "Vileplume",
        "Bellossom"
      ],
      "attacks": [
        {
          "name": "Foul Odor",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Both this Pokémon and the Defending Pokémon are now Confused."
        },
        {
          "name": "Poison Powder",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw7",
        "name": "Boundaries Crossed",
        "series": "Black & White",
        "printedTotal": 149,
        "total": 153,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BCR",
        "releaseDate": "2012/11/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw7/symbol.png",
          "logo": "https://images.pokemontcg.io/bw7/logo.png"
        }
      },
      "number": "2",
      "artist": "Atsuko Nishida",
      "rarity": "Uncommon",
      "flavorText": "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
      "nationalPokedexNumbers": [
        44
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw7/2.png",
        "large": "https://images.pokemontcg.io/bw7/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.25,
            "high": 1.63,
            "market": 0.26,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.89,
            "mid": 1.06,
            "high": 4.25,
            "market": 1.06,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw7-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.21,
          "lowPrice": 0.02,
          "trendPrice": 0.21,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.25,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.76,
          "lowPriceExPlus": 0.02,
          "avg1": 0.25,
          "avg7": 0.21,
          "avg30": 0.19,
          "reverseHoloAvg1": 0.25,
          "reverseHoloAvg7": 0.67,
          "reverseHoloAvg30": 0.61
        }
      }
    },
    {
      "id": "xy4-2",
      "name": "Venomoth",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Venonat",
      "attacks": [
        {
          "name": "Dizzying Wind",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)"
        },
        {
          "name": "Noxious Scales",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Your opponent's Active Pokémon is now Confused and Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy4",
        "name": "Phantom Forces",
        "series": "XY",
        "printedTotal": 119,
        "total": 124,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PHF",
        "releaseDate": "2014/11/05",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy4/symbol.png",
          "logo": "https://images.pokemontcg.io/xy4/logo.png"
        }
      },
      "number": "2",
      "artist": "5ban Graphics",
      "rarity": "Rare",
      "flavorText": "The scales it scatters will paralyze anyone who touches them, making that person unable to stand.",
      "nationalPokedexNumbers": [
        49
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy4/2.png",
        "large": "https://images.pokemontcg.io/xy4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.28,
            "mid": 0.4,
            "high": 4.55,
            "market": 0.37,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.44,
            "mid": 0.89,
            "high": 5,
            "market": 1.3,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.44,
          "lowPrice": 0.04,
          "trendPrice": 0.32,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 1.47,
          "lowPriceExPlus": 0.08,
          "avg1": 0.08,
          "avg7": 0.37,
          "avg30": 0.35,
          "reverseHoloAvg1": 0.75,
          "reverseHoloAvg7": 1.56,
          "reverseHoloAvg30": 1.53
        }
      }
    },
    {
      "id": "col1-3",
      "name": "Dialga",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "100",
      "types": [
        "Metal"
      ],
      "attacks": [
        {
          "name": "Time Rewind",
          "cost": [
            "Metal",
            "Metal",
            "Metal",
            "Metal"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": "Shuffle your hand into your deck."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "col1",
        "name": "Call of Legends",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 95,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "CL",
        "releaseDate": "2011/02/09",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/col1/symbol.png",
          "logo": "https://images.pokemontcg.io/col1/logo.png"
        }
      },
      "number": "3",
      "artist": "Ayaka Yoshida",
      "rarity": "Rare Holo",
      "flavorText": "This Pokémon completely controls the flow of time. It uses its power to travel at will through the past and future.",
      "nationalPokedexNumbers": [
        483
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/col1/3.png",
        "large": "https://images.pokemontcg.io/col1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/col1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.5,
            "mid": 7,
            "high": 16,
            "market": 9.28,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.82,
            "mid": 3.62,
            "high": 16.38,
            "market": 13,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/col1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 10.25,
          "lowPrice": 0.3,
          "trendPrice": 6.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.89,
          "reverseHoloTrend": 7,
          "lowPriceExPlus": 1,
          "avg1": 7.99,
          "avg7": 6.28,
          "avg30": 6.58,
          "reverseHoloAvg1": 4.48,
          "reverseHoloAvg7": 7.56,
          "reverseHoloAvg30": 5.86
        }
      }
    },
    {
      "id": "ex12-4",
      "name": "Delcatty",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Skitty",
      "abilities": [
        {
          "name": "Reactive Shift",
          "text": "Once during your turn (before your attack), you may move a React Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Delcatty is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Energy Link",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Search your discard pile for an Energy card and attach it to Delcatty."
        },
        {
          "name": "Tail Whap",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex12",
        "name": "Legend Maker",
        "series": "EX",
        "printedTotal": 92,
        "total": 93,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LM",
        "releaseDate": "2006/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex12/symbol.png",
          "logo": "https://images.pokemontcg.io/ex12/logo.png"
        }
      },
      "number": "4",
      "artist": "Naoyo Kimura",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        301
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex12/4.png",
        "large": "https://images.pokemontcg.io/ex12/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex12-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.33,
            "mid": 4.48,
            "high": 6.97,
            "market": 5.02,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 7.91,
            "mid": 8.97,
            "high": 10.67,
            "market": 9.1,
            "directLow": 8.99
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex12-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.82,
          "lowPrice": 0.5,
          "trendPrice": 4.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 6.15,
          "reverseHoloLow": 1.3,
          "reverseHoloTrend": 8.91,
          "lowPriceExPlus": 3.2,
          "avg1": 5,
          "avg7": 4.73,
          "avg30": 3.51,
          "reverseHoloAvg1": 10,
          "reverseHoloAvg7": 7.42,
          "reverseHoloAvg30": 8.77
        }
      }
    },
    {
      "id": "bw11-2",
      "name": "Tangrowth",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "120",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Tangela",
      "attacks": [
        {
          "name": "Bind Down",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "The Defending Pokémon can't retreat during your opponent's next turn."
        },
        {
          "name": "Flog",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60+",
          "text": "Flip a coin. If heads, this attack does 30 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "bw11",
        "name": "Legendary Treasures",
        "series": "Black & White",
        "printedTotal": 113,
        "total": 140,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "LTR",
        "releaseDate": "2013/11/06",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw11/symbol.png",
          "logo": "https://images.pokemontcg.io/bw11/logo.png"
        }
      },
      "number": "2",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare",
      "flavorText": "Even if one of its arms is eaten, it's fine. The Pokémon regenerates quickly and will go right back to normal.",
      "nationalPokedexNumbers": [
        465
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw11/2.png",
        "large": "https://images.pokemontcg.io/bw11/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw11-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.27,
            "high": 2.58,
            "market": 0.25,
            "directLow": 0.13
          },
          "reverseHolofoil": {
            "low": 0.45,
            "mid": 0.72,
            "high": 1.99,
            "market": 0.8,
            "directLow": 0.42
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw11-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.4,
          "lowPrice": 0.1,
          "trendPrice": 0.63,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 2,
          "reverseHoloTrend": 1.07,
          "lowPriceExPlus": 0.18,
          "avg1": 0.95,
          "avg7": 0.51,
          "avg30": 0.54,
          "reverseHoloAvg1": 1,
          "reverseHoloAvg7": 1.02,
          "reverseHoloAvg30": 0.95
        }
      }
    },
    {
      "id": "pl1-4",
      "name": "Delcatty",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "53",
      "hp": "90",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Skitty",
      "abilities": [
        {
          "name": "Power Circulation",
          "text": "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put those cards on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Power Heal",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty."
        },
        {
          "name": "Rear Kick",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pl1",
        "name": "Platinum",
        "series": "Platinum",
        "printedTotal": 127,
        "total": 133,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PL",
        "releaseDate": "2009/02/11",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
          "logo": "https://images.pokemontcg.io/pl1/logo.png"
        }
      },
      "number": "4",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        301
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl1/4.png",
        "large": "https://images.pokemontcg.io/pl1/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.8,
            "mid": 4.05,
            "high": 24.99,
            "market": 4.99,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.06,
            "mid": 3.4,
            "high": 4.65,
            "market": 2.79,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.66,
          "lowPrice": 0.5,
          "trendPrice": 2.3,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.43,
          "reverseHoloLow": 0.79,
          "reverseHoloTrend": 2.1,
          "lowPriceExPlus": 1.4,
          "avg1": 0.5,
          "avg7": 1.88,
          "avg30": 1.94,
          "reverseHoloAvg1": 8.99,
          "reverseHoloAvg7": 2.45,
          "reverseHoloAvg30": 2.2
        }
      }
    },
    {
      "id": "swsh35-3",
      "name": "Kakuna",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Weedle",
      "evolvesTo": [
        "Beedrill"
      ],
      "attacks": [
        {
          "name": "Bug Bite",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "swsh35",
        "name": "Champion's Path",
        "series": "Sword & Shield",
        "printedTotal": 73,
        "total": 80,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CPA",
        "releaseDate": "2020/09/25",
        "updatedAt": "2020/10/25 13:45:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh35/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh35/logo.png"
        }
      },
      "number": "3",
      "artist": "Miki Tanaka",
      "rarity": "Common",
      "flavorText": "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
      "nationalPokedexNumbers": [
        14
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh35/3.png",
        "large": "https://images.pokemontcg.io/swsh35/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh35-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 1.29,
            "market": 0.04,
            "directLow": 0.03
          },
          "reverseHolofoil": {
            "low": 0.05,
            "mid": 0.2,
            "high": 2,
            "market": 0.15,
            "directLow": 0.1
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh35-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.04,
          "lowPrice": 0.02,
          "trendPrice": 0.05,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.13,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.12,
          "lowPriceExPlus": 0.02,
          "avg1": 0.06,
          "avg7": 0.04,
          "avg30": 0.05,
          "reverseHoloAvg1": 0.25,
          "reverseHoloAvg7": 0.14,
          "reverseHoloAvg30": 0.19
        }
      }
    },
    {
      "id": "base5-2",
      "name": "Dark Arbok",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "25",
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Ekans",
      "attacks": [
        {
          "name": "Stare",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.) If that Pokémon has a Pokémon Power, that power stops working until the end of your opponent's next turn."
        },
        {
          "name": "Poison Vapor",
          "cost": [
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 3,
          "damage": "10",
          "text": "The Defending Pokémon is now Poisoned. This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "base5",
        "name": "Team Rocket",
        "series": "Base",
        "printedTotal": 82,
        "total": 83,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TR",
        "releaseDate": "2000/04/24",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base5/symbol.png",
          "logo": "https://images.pokemontcg.io/base5/logo.png"
        }
      },
      "number": "2",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "Freezes its prey with its stare. If you should encounter one, remember not to look into its eyes.",
      "nationalPokedexNumbers": [
        24
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base5/2.png",
        "large": "https://images.pokemontcg.io/base5/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 19,
            "mid": 32.33,
            "high": 99.99,
            "market": 35.17,
            "directLow": 99.99
          },
          "unlimitedHolofoil": {
            "low": 4.15,
            "mid": 5.88,
            "high": 13.86,
            "market": 5.98,
            "directLow": 5.3
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.62,
          "lowPrice": 0.5,
          "trendPrice": 9.42,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 8.04,
          "lowPriceExPlus": 4.8,
          "avg1": 7.31,
          "avg7": 10.62,
          "avg30": 8.43,
          "reverseHoloAvg1": 13.5,
          "reverseHoloAvg7": 7.18,
          "reverseHoloAvg30": 8.33
        }
      }
    },
    {
      "id": "ecard2-H4",
      "name": "Azumarill",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Marill",
      "abilities": [
        {
          "name": "Bubble Turn",
          "text": "Once during your turn (before your attack), if Azumarill is on your Bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Aqua Sonic",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Don't apply Resistance."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ecard2",
        "name": "Aquapolis",
        "series": "E-Card",
        "printedTotal": 147,
        "total": 182,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AQ",
        "releaseDate": "2003/01/15",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ecard2/symbol.png",
          "logo": "https://images.pokemontcg.io/ecard2/logo.png"
        }
      },
      "number": "H4",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        184
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ecard2/H4.png",
        "large": "https://images.pokemontcg.io/ecard2/H4_hires.png"
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ecard2-H4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 22,
          "lowPrice": 5.9,
          "trendPrice": 27.35,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 12.37,
          "lowPriceExPlus": 20,
          "avg1": 16,
          "avg7": 27.29,
          "avg30": 37.68,
          "reverseHoloAvg1": 5,
          "reverseHoloAvg7": 10.2,
          "reverseHoloAvg30": 12.68
        }
      }
    },
    {
      "id": "neo4-2",
      "name": "Dark Crobat",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "39",
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Dark Golbat",
      "abilities": [
        {
          "name": "Surprise Bite",
          "text": "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage to that Pokémon. (Don't apply Weakness and Resistance.)",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Dark Drain",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "set": {
        "id": "neo4",
        "name": "Neo Destiny",
        "series": "Neo",
        "printedTotal": 105,
        "total": 113,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "N4",
        "releaseDate": "2002/02/28",
        "updatedAt": "2020/09/25 10:09:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/neo4/symbol.png",
          "logo": "https://images.pokemontcg.io/neo4/logo.png"
        }
      },
      "number": "2",
      "artist": "Shin-ichi Yoshikawa, CR CG gangs",
      "rarity": "Rare Holo",
      "flavorText": "Although the wings it has evolved on its feet allow it to fly at high speeds, they unfortunately make it difficult to perch.",
      "nationalPokedexNumbers": [
        169
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/neo4/2.png",
        "large": "https://images.pokemontcg.io/neo4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/neo4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 85.69,
            "mid": 85.72,
            "high": 85.75,
            "market": 105,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 34.99,
            "mid": 45,
            "high": 84.99,
            "market": 46.51,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/neo4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 41.43,
          "lowPrice": 9.99,
          "trendPrice": 54.39,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 18.27,
          "lowPriceExPlus": 13.99,
          "avg1": 39.99,
          "avg7": 37.87,
          "avg30": 42.34,
          "reverseHoloAvg1": 9.8,
          "reverseHoloAvg7": 18.89,
          "reverseHoloAvg30": 24.76
        }
      }
    },
    {
      "id": "ex3-4",
      "name": "Flygon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Vibrava",
      "attacks": [
        {
          "name": "Energy Shower",
          "cost": [
            "Grass",
            "Lightning"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like."
        },
        {
          "name": "Rainbow Burn",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30+",
          "text": "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon."
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fire",
          "value": "-30"
        },
        {
          "type": "Lightning",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex3",
        "name": "Dragon",
        "series": "EX",
        "printedTotal": 97,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DR",
        "releaseDate": "2003/11/24",
        "updatedAt": "2023/02/16 05:47:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex3/symbol.png",
          "logo": "https://images.pokemontcg.io/ex3/logo.png"
        }
      },
      "number": "4",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        330
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex3/4.png",
        "large": "https://images.pokemontcg.io/ex3/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 27.83,
            "mid": 30,
            "high": 39.95,
            "market": 27.91,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 12,
            "mid": 14.99,
            "high": 21.04,
            "market": 16.65,
            "directLow": 11.4
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.1,
          "lowPrice": 1.5,
          "trendPrice": 7.57,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 12.33,
          "reverseHoloLow": 1.5,
          "reverseHoloTrend": 9.83,
          "lowPriceExPlus": 4.5,
          "avg1": 17.49,
          "avg7": 8.78,
          "avg30": 10.6,
          "reverseHoloAvg1": 10,
          "reverseHoloAvg7": 11.04,
          "reverseHoloAvg30": 7.5
        }
      }
    },
    {
      "id": "xy2-4",
      "name": "Pineco",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Forretress"
      ],
      "attacks": [
        {
          "name": "Ram",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "xy2",
        "name": "Flashfire",
        "series": "XY",
        "printedTotal": 106,
        "total": 110,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FLF",
        "releaseDate": "2014/05/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy2/symbol.png",
          "logo": "https://images.pokemontcg.io/xy2/logo.png"
        }
      },
      "number": "4",
      "artist": "Suwama Chiaki",
      "rarity": "Common",
      "flavorText": "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
      "nationalPokedexNumbers": [
        204
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy2/4.png",
        "large": "https://images.pokemontcg.io/xy2/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy2-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.05,
            "mid": 0.21,
            "high": 1.35,
            "market": 0.15,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.12,
            "mid": 0.44,
            "high": 1.95,
            "market": 0.37,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy2-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.09,
          "lowPrice": 0.02,
          "trendPrice": 0.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.33,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.08,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.4,
          "reverseHoloAvg7": 0.31,
          "reverseHoloAvg30": 0.31
        }
      }
    },
    {
      "id": "pop5-2",
      "name": "Lugia",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Super Psy Bolt",
          "cost": [
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Aerowing",
          "cost": [
            "Psychic",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Before doing damage, you may flip a coin. If tails, this attack does nothing. If heads, this attack does 60 damage instead."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop5",
        "name": "POP Series 5",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/03/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop5/symbol.png",
          "logo": "https://images.pokemontcg.io/pop5/logo.png"
        }
      },
      "number": "2",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        249
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop5/2.png",
        "large": "https://images.pokemontcg.io/pop5/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 12.01,
            "mid": 14.97,
            "high": 100,
            "market": 19.02,
            "directLow": null
          },
          "holofoil": {
            "low": 25,
            "mid": 50.99,
            "high": 120,
            "market": 48.57,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 34.98,
          "lowPrice": 19.99,
          "trendPrice": 44.96,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 150,
          "reverseHoloTrend": 31.46,
          "lowPriceExPlus": 39.99,
          "avg1": 34.98,
          "avg7": 44.62,
          "avg30": 43.99,
          "reverseHoloAvg1": 25,
          "reverseHoloAvg7": 23.42,
          "reverseHoloAvg30": 23.42
        }
      }
    },
    {
      "id": "base6-2",
      "name": "Articuno",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "35",
      "hp": "70",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Freeze Dry",
          "cost": [
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Blizzard",
          "cost": [
            "Water",
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "base6",
        "name": "Legendary Collection",
        "series": "Other",
        "printedTotal": 110,
        "total": 110,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LC",
        "releaseDate": "2002/05/24",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base6/symbol.png",
          "logo": "https://images.pokemontcg.io/base6/logo.png"
        }
      },
      "number": "2",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
      "nationalPokedexNumbers": [
        144
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base6/2.png",
        "large": "https://images.pokemontcg.io/base6/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base6-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 28.55,
            "mid": 30.08,
            "high": 35.99,
            "market": 33.17,
            "directLow": 30.95
          },
          "reverseHolofoil": {
            "low": 170,
            "mid": 188.99,
            "high": 190,
            "market": 197.48,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base6-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 6,
          "trendPrice": 13.97,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 22.49,
          "reverseHoloLow": 23.9,
          "reverseHoloTrend": 67.52,
          "lowPriceExPlus": 24,
          "avg1": 17.49,
          "avg7": 12.87,
          "avg30": 15.17,
          "reverseHoloAvg1": 20,
          "reverseHoloAvg7": 61.53,
          "reverseHoloAvg30": 64.91
        }
      }
    },
    {
      "id": "dv1-4",
      "name": "Dragonair",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Dragon"
      ],
      "evolvesFrom": "Dratini",
      "evolvesTo": [
        "Dragonite"
      ],
      "attacks": [
        {
          "name": "Healing Melody",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 10 damage from each of your Pokémon."
        },
        {
          "name": "Slam",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Dragon",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "dv1",
        "name": "Dragon Vault",
        "series": "Black & White",
        "printedTotal": 20,
        "total": 21,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRV",
        "releaseDate": "2012/10/05",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dv1/symbol.png",
          "logo": "https://images.pokemontcg.io/dv1/logo.png"
        }
      },
      "number": "4",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
      "nationalPokedexNumbers": [
        148
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dv1/4.png",
        "large": "https://images.pokemontcg.io/dv1/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dv1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.39,
            "mid": 4.97,
            "high": 19.99,
            "market": 5.21,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dv1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 4.57,
          "lowPrice": 0.3,
          "trendPrice": 6.24,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.49,
          "reverseHoloTrend": 4.44,
          "lowPriceExPlus": 0.74,
          "avg1": 37.5,
          "avg7": 7.71,
          "avg30": 4.55,
          "reverseHoloAvg1": 4.5,
          "reverseHoloAvg7": 3.3,
          "reverseHoloAvg30": 2.9
        }
      }
    },
    {
      "id": "ex11-4",
      "name": "Espeon δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Psychic",
        "Metal"
      ],
      "evolvesFrom": "Eevee",
      "rules": [
        "This Pokémon is both Psychic Metal type."
      ],
      "abilities": [
        {
          "name": "Delta Heal",
          "text": "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon that has δ on its card. You can't use more than 1 Delta Heal Poké-Power each turn. This power can't be used if Espeon is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Psyshock",
          "cost": [
            "Psychic",
            "Metal"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex11",
        "name": "Delta Species",
        "series": "EX",
        "printedTotal": 113,
        "total": 114,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DS",
        "releaseDate": "2005/10/31",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex11/symbol.png",
          "logo": "https://images.pokemontcg.io/ex11/logo.png"
        }
      },
      "number": "4",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        196
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex11/4.png",
        "large": "https://images.pokemontcg.io/ex11/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex11-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 45.28,
            "mid": 114.22,
            "high": 220,
            "market": 107.67,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 27.44,
            "mid": 64.65,
            "high": 95.24,
            "market": 94.47,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex11-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.98,
          "lowPrice": 3.5,
          "trendPrice": 27.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 32.75,
          "reverseHoloLow": 7,
          "reverseHoloTrend": 32.85,
          "lowPriceExPlus": 17.99,
          "avg1": 34,
          "avg7": 23.48,
          "avg30": 39.11,
          "reverseHoloAvg1": 26,
          "reverseHoloAvg7": 32.47,
          "reverseHoloAvg30": 44.77
        }
      }
    },
    {
      "id": "dp4-2",
      "name": "Cresselia",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "48",
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Moon Twinkle",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "If there is any Stadium card in play, remove 2 damage counters from Cresselia."
        },
        {
          "name": "Lunar Dance",
          "cost": [
            "Psychic",
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "You may discard 2 Energy attached to Cresselia. If you do, remove all damage counters from 1 of your Benched Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dp4",
        "name": "Great Encounters",
        "series": "Diamond & Pearl",
        "printedTotal": 106,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "GE",
        "releaseDate": "2008/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp4/symbol.png",
          "logo": "https://images.pokemontcg.io/dp4/logo.png"
        }
      },
      "number": "2",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "flavorText": "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.",
      "nationalPokedexNumbers": [
        488
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp4/2.png",
        "large": "https://images.pokemontcg.io/dp4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4,
            "mid": 6.91,
            "high": 9.14,
            "market": 8.31,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.47,
            "mid": 3.98,
            "high": 10,
            "market": 5.99,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.93,
          "lowPrice": 0.2,
          "trendPrice": 2.31,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 2.5,
          "reverseHoloLow": 0.3,
          "reverseHoloTrend": 2.25,
          "lowPriceExPlus": 2,
          "avg1": 0.5,
          "avg7": 1.77,
          "avg30": 2.04,
          "reverseHoloAvg1": 4,
          "reverseHoloAvg7": 2.56,
          "reverseHoloAvg30": 2.25
        }
      }
    },
    {
      "id": "dp1-2",
      "name": "Dusknoir",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "42",
      "hp": "120",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Dusclops",
      "abilities": [
        {
          "name": "Dark Palm",
          "text": "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and shuffle that Pokémon and all cards attached to it into his or her deck. This power can't be used if Dusknoir if affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Hard Feelings",
          "cost": [
            "Psychic",
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Put 5 damage counters on the Defending Pokémon. Then, count the number of Prize cards your opponent has taken and put that many damage counters on the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Darkness",
          "value": "+30"
        }
      ],
      "resistances": [
        {
          "type": "Colorless",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "dp1",
        "name": "Diamond & Pearl",
        "series": "Diamond & Pearl",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp1/symbol.png",
          "logo": "https://images.pokemontcg.io/dp1/logo.png"
        }
      },
      "number": "2",
      "artist": "Takabon",
      "rarity": "Rare Holo",
      "flavorText": "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
      "nationalPokedexNumbers": [
        477
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp1/2.png",
        "large": "https://images.pokemontcg.io/dp1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.55,
            "mid": 6.4,
            "high": 10.08,
            "market": 7.91,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 3.49,
            "mid": 5.63,
            "high": 9.99,
            "market": 7.22,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.11,
          "lowPrice": 0.4,
          "trendPrice": 2.77,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.8,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 3.44,
          "lowPriceExPlus": 1.5,
          "avg1": 5,
          "avg7": 3.36,
          "avg30": 2.72,
          "reverseHoloAvg1": 3,
          "reverseHoloAvg7": 2.79,
          "reverseHoloAvg30": 2.98
        }
      }
    },
    {
      "id": "gym2-3",
      "name": "Brock's Ninetales",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "30",
      "hp": "70",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Brock's Vulpix",
      "abilities": [
        {
          "name": "Shapeshift",
          "text": "Once during your turn (before your attack), you may attach an Evolution card from your hand to Brock's Ninetales. (This doesn't count as evolving Brock's Ninetales.) Treat Brock's Ninetales as if it were that Pokémon instead. It can't evolve, devolve, or use the Pokémon Power of that Pokémon. During your turn, you may discard the Evolution card attached to Brock's Ninetales. This power can't be used if Brock's Ninetales is Asleep, Confused, or Paralyzed. If Brock's Ninetales becomes Asleep, Confused, or Paralyzed, discard all Evolution cards attached to it.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Will-o'-the-wisp",
          "cost": [
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "gym2",
        "name": "Gym Challenge",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G2",
        "releaseDate": "2000/10/16",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym2/symbol.png",
          "logo": "https://images.pokemontcg.io/gym2/logo.png"
        }
      },
      "number": "3",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        38
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym2/3.png",
        "large": "https://images.pokemontcg.io/gym2/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym2-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 64.9,
            "mid": 71.69,
            "high": 106.38,
            "market": 84.42,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 34.82,
            "mid": 42.07,
            "high": 89.88,
            "market": 42.13,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym2-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 30.83,
          "lowPrice": 9,
          "trendPrice": 32,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 20.16,
          "lowPriceExPlus": 13.5,
          "avg1": 29.99,
          "avg7": 34.11,
          "avg30": 33.07,
          "reverseHoloAvg1": 7.99,
          "reverseHoloAvg7": 23.74,
          "reverseHoloAvg30": 22.52
        }
      }
    },
    {
      "id": "pop1-2",
      "name": "Metagross",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Metal"
      ],
      "evolvesFrom": "Metang",
      "attacks": [
        {
          "name": "Metal Claw",
          "cost": [
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Hyper Beam",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": "Flip a coin. If heads, discard 1 Energy attached to the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Grass",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pop1",
        "name": "POP Series 1",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2004/09/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop1/symbol.png",
          "logo": "https://images.pokemontcg.io/pop1/logo.png"
        }
      },
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        376
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop1/2.png",
        "large": "https://images.pokemontcg.io/pop1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.47,
            "mid": 1.78,
            "high": 4.02,
            "market": 2.74,
            "directLow": null
          },
          "holofoil": {
            "low": 1,
            "mid": 2.15,
            "high": 8,
            "market": 3.23,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 3,
          "trendPrice": 11.26,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 5.59,
          "lowPriceExPlus": 8.95,
          "avg1": 12,
          "avg7": 10.2,
          "avg30": 10.49,
          "reverseHoloAvg1": 1,
          "reverseHoloAvg7": 8.85,
          "reverseHoloAvg30": 3.53
        }
      }
    },
    {
      "id": "si1-3",
      "name": "Onix",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "90",
      "types": [
        "Fighting"
      ],
      "evolvesTo": [
        "Steelix"
      ],
      "attacks": [
        {
          "name": "Slam",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20×",
          "text": "Flip 2 coins. This attack does 20 damage times the number of heads."
        },
        {
          "name": "Body Slam",
          "cost": [
            "Fighting",
            "Fighting",
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 4,
          "damage": "40",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "si1",
        "name": "Southern Islands",
        "series": "Other",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2001/07/31",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/si1/symbol.png",
          "logo": "https://images.pokemontcg.io/si1/logo.png"
        }
      },
      "number": "3",
      "artist": "Keiko Fukuyama",
      "flavorText": "This Pokémon burrows through the earth at high speed, looking for food. The tunnels it digs are used by Diglett as nests.",
      "nationalPokedexNumbers": [
        95
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/si1/3.png",
        "large": "https://images.pokemontcg.io/si1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/si1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 12.95,
            "mid": 15.52,
            "high": 39.99,
            "market": 14.5,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/si1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 18.23,
          "lowPrice": 5,
          "trendPrice": 19.27,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.9,
          "lowPriceExPlus": 15,
          "avg1": 19.95,
          "avg7": 18.9,
          "avg30": 20.45,
          "reverseHoloAvg1": 4.9,
          "reverseHoloAvg7": 4.9,
          "reverseHoloAvg30": 4.9
        }
      }
    },
    {
      "id": "dp3-4",
      "name": "Entei",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "43",
      "hp": "80",
      "types": [
        "Fire"
      ],
      "abilities": [
        {
          "name": "Burning Coat",
          "text": "Whenever 1 of your opponent's Pokémon is Knocked Out by damage from Entei's attacks, discard the top 3 cards from your opponent's deck.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Blaze Roar",
          "cost": [
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, discard 2 Fire Energy attached to Entei."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "dp3",
        "name": "Secret Wonders",
        "series": "Diamond & Pearl",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SW",
        "releaseDate": "2007/11/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp3/symbol.png",
          "logo": "https://images.pokemontcg.io/dp3/logo.png"
        }
      },
      "number": "4",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "flavorText": "It is said that when it roars, a volcano erupts somewhere around the globe.",
      "nationalPokedexNumbers": [
        244
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp3/4.png",
        "large": "https://images.pokemontcg.io/dp3/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 7.89,
            "mid": 12.24,
            "high": 15.37,
            "market": 12.14,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4.29,
            "mid": 8.99,
            "high": 13.67,
            "market": 12.18,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.33,
          "lowPrice": 0.25,
          "trendPrice": 3.69,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.5,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 5.54,
          "lowPriceExPlus": 1.9,
          "avg1": 1.09,
          "avg7": 3.44,
          "avg30": 3.5,
          "reverseHoloAvg1": 3,
          "reverseHoloAvg7": 5.36,
          "reverseHoloAvg30": 4.21
        }
      }
    },
    {
      "id": "base4-4",
      "name": "Charizard",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "76",
      "hp": "120",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Charmeleon",
      "abilities": [
        {
          "name": "Energy Burn",
          "text": "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Fire Spin",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard 2 Energy cards attached to Charizard in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base4",
        "name": "Base Set 2",
        "series": "Base",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "B2",
        "releaseDate": "2000/02/24",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base4/symbol.png",
          "logo": "https://images.pokemontcg.io/base4/logo.png"
        }
      },
      "number": "4",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
      "nationalPokedexNumbers": [
        6
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base4/4.png",
        "large": "https://images.pokemontcg.io/base4/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base4-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 186.89,
            "mid": 200,
            "high": 299.99,
            "market": 227.27,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base4-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 189.18,
          "lowPrice": 59.95,
          "trendPrice": 165.67,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 190.22,
          "lowPriceExPlus": 160,
          "avg1": 160,
          "avg7": 175.01,
          "avg30": 184.35,
          "reverseHoloAvg1": 120,
          "reverseHoloAvg7": 233.67,
          "reverseHoloAvg30": 223.79
        }
      }
    },
    {
      "id": "pl4-2",
      "name": "Froslass",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "45",
      "hp": "80",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Snorunt",
      "abilities": [
        {
          "name": "Snow Gift",
          "text": "Once during your turn, when you play Froslass from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Ground Frost",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "50",
          "text": "If there is any Stadium Card in play, this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Metal",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pl4",
        "name": "Arceus",
        "series": "Platinum",
        "printedTotal": 99,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AR",
        "releaseDate": "2009/11/04",
        "updatedAt": "2021/07/15 11:30:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl4/symbol.png",
          "logo": "https://images.pokemontcg.io/pl4/logo.png"
        }
      },
      "number": "2",
      "artist": "TOKIYA",
      "rarity": "Rare Holo",
      "flavorText": "It freezes prey by blowing its -58 degrees F breath. It is said to then secretly display its prey.",
      "nationalPokedexNumbers": [
        478
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl4/2.png",
        "large": "https://images.pokemontcg.io/pl4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.17,
            "mid": 2.94,
            "high": 29.97,
            "market": 3.1,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.74,
            "mid": 3.01,
            "high": 5.49,
            "market": 3.74,
            "directLow": 1.97
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.17,
          "lowPrice": 0.1,
          "trendPrice": 2.47,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.4,
          "reverseHoloTrend": 2.18,
          "lowPriceExPlus": 0.7,
          "avg1": 1.99,
          "avg7": 2.43,
          "avg30": 2.13,
          "reverseHoloAvg1": 2.99,
          "reverseHoloAvg7": 2.2,
          "reverseHoloAvg30": 1.91
        }
      }
    },
    {
      "id": "bw8-2",
      "name": "Grotle",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "100",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Turtwig",
      "evolvesTo": [
        "Torterra"
      ],
      "attacks": [
        {
          "name": "Knock Away",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40+",
          "text": "Flip a coin. If heads, this attack does 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "bw8",
        "name": "Plasma Storm",
        "series": "Black & White",
        "printedTotal": 135,
        "total": 138,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLS",
        "releaseDate": "2013/02/06",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw8/symbol.png",
          "logo": "https://images.pokemontcg.io/bw8/logo.png"
        }
      },
      "number": "2",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Uncommon",
      "flavorText": "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
      "nationalPokedexNumbers": [
        388
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw8/2.png",
        "large": "https://images.pokemontcg.io/bw8/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw8-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.14,
            "mid": 0.41,
            "high": 1.86,
            "market": 0.41,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.33,
            "mid": 2.66,
            "high": 2.83,
            "market": 2.58,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw8-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.21,
          "lowPrice": 0.02,
          "trendPrice": 0.16,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1,
          "reverseHoloLow": 0.25,
          "reverseHoloTrend": 1.69,
          "lowPriceExPlus": 0.02,
          "avg1": 0.19,
          "avg7": 0.21,
          "avg30": 0.19,
          "reverseHoloAvg1": 1,
          "reverseHoloAvg7": 0.94,
          "reverseHoloAvg30": 1.2
        }
      }
    },
    {
      "id": "pop3-2",
      "name": "Flareon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Eevee",
      "attacks": [
        {
          "name": "Quick Attack",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
        },
        {
          "name": "Fire Spin",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": "Discard 2 basic Energy cards attached to Flareon or this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop3",
        "name": "POP Series 3",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2006/04/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop3/symbol.png",
          "logo": "https://images.pokemontcg.io/pop3/logo.png"
        }
      },
      "number": "2",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        136
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop3/2.png",
        "large": "https://images.pokemontcg.io/pop3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 2.2,
            "mid": 5.2,
            "high": 11.72,
            "market": 8.88,
            "directLow": null
          },
          "holofoil": {
            "low": 5.5,
            "mid": 9.74,
            "high": 29.99,
            "market": 9.48,
            "directLow": 16.71
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 9.45,
          "lowPrice": 3,
          "trendPrice": 13.15,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 14.9,
          "reverseHoloTrend": 13.29,
          "lowPriceExPlus": 7.49,
          "avg1": 17.99,
          "avg7": 14.68,
          "avg30": 19.82,
          "reverseHoloAvg1": 14.9,
          "reverseHoloAvg7": 9.77,
          "reverseHoloAvg30": 15.28
        }
      }
    },
    {
      "id": "xy11-3",
      "name": "Hoppip",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Skiploom"
      ],
      "attacks": [
        {
          "name": "Splash",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy11",
        "name": "Steam Siege",
        "series": "XY",
        "printedTotal": 114,
        "total": 116,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "STS",
        "releaseDate": "2016/08/03",
        "updatedAt": "2019/04/10 19:59:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy11/symbol.png",
          "logo": "https://images.pokemontcg.io/xy11/logo.png"
        }
      },
      "number": "3",
      "artist": "Mina Nakai",
      "rarity": "Common",
      "flavorText": "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way.",
      "nationalPokedexNumbers": [
        187
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy11/3.png",
        "large": "https://images.pokemontcg.io/xy11/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy11-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.02,
            "mid": 0.15,
            "high": 2,
            "market": 0.08,
            "directLow": 0.07
          },
          "reverseHolofoil": {
            "low": 0.03,
            "mid": 0.25,
            "high": 1.38,
            "market": 0.14,
            "directLow": 0.15
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy11-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.27,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.32,
          "lowPriceExPlus": 0.02,
          "avg1": 0.06,
          "avg7": 0.06,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.05,
          "reverseHoloAvg7": 0.27,
          "reverseHoloAvg30": 0.28
        }
      }
    },
    {
      "id": "sm3-2",
      "name": "Metapod",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Caterpie",
      "evolvesTo": [
        "Butterfree"
      ],
      "attacks": [
        {
          "name": "Ram",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Shed Skin",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Heal 40 damage from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm3",
        "name": "Burning Shadows",
        "series": "Sun & Moon",
        "printedTotal": 147,
        "total": 177,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BUS",
        "releaseDate": "2017/08/05",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm3/symbol.png",
          "logo": "https://images.pokemontcg.io/sm3/logo.png"
        }
      },
      "number": "2",
      "artist": "Suwama Chiaki",
      "rarity": "Uncommon",
      "flavorText": "Its shell is filled with its soft innards. It doesn't move much because of the risk it might carelessly spill its innards out.",
      "nationalPokedexNumbers": [
        11
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm3/2.png",
        "large": "https://images.pokemontcg.io/sm3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.15,
            "high": 2,
            "market": 0.1,
            "directLow": 0.02
          },
          "reverseHolofoil": {
            "low": 0.04,
            "mid": 0.25,
            "high": 2,
            "market": 0.21,
            "directLow": 0.2
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.18,
          "lowPrice": 0.02,
          "trendPrice": 0.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.23,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.21,
          "lowPriceExPlus": 0.02,
          "avg1": 0.08,
          "avg7": 0.15,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.18,
          "reverseHoloAvg7": 0.25,
          "reverseHoloAvg30": 0.23
        }
      }
    },
    {
      "id": "swsh1-2",
      "name": "Roselia",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Roserade"
      ],
      "attacks": [
        {
          "name": "Absorb",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Heal 10 damage from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "swsh1",
        "name": "Sword & Shield",
        "series": "Sword & Shield",
        "printedTotal": 202,
        "total": 216,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "SSH",
        "releaseDate": "2020/02/07",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh1/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh1/logo.png"
        }
      },
      "number": "2",
      "artist": "sowsow",
      "rarity": "Common",
      "flavorText": "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is.",
      "nationalPokedexNumbers": [
        315
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh1/2.png",
        "large": "https://images.pokemontcg.io/swsh1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 0.04,
            "mid": 0.2,
            "high": 2,
            "market": 0.12,
            "directLow": null
          },
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 1.28,
            "market": 0.03,
            "directLow": 0.02
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.14,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.23,
          "lowPriceExPlus": 0.02,
          "avg1": 0.05,
          "avg7": 0.04,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.39,
          "reverseHoloAvg7": 0.25,
          "reverseHoloAvg30": 0.23
        }
      }
    },
    {
      "id": "pop9-2",
      "name": "Manaphy",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "25",
      "hp": "70",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Dive",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Look at the top 7 cards of your deck, choose 1 of them, and put it into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward."
        },
        {
          "name": "Water Glow",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove from Manaphy the number of damage counters equal to the damage you did to that Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "+20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop9",
        "name": "POP Series 9",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/03/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop9/symbol.png",
          "logo": "https://images.pokemontcg.io/pop9/logo.png"
        }
      },
      "number": "2",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare",
      "flavorText": "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
      "nationalPokedexNumbers": [
        490
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop9/2.png",
        "large": "https://images.pokemontcg.io/pop9/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop9-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.71,
            "mid": 1.55,
            "high": 4,
            "market": 1.69,
            "directLow": null
          },
          "holofoil": {
            "low": 0.99,
            "mid": 1.66,
            "high": 4.54,
            "market": 3.43,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop9-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.5,
          "lowPrice": 0.4,
          "trendPrice": 1.84,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.3,
          "reverseHoloLow": 0.4,
          "reverseHoloTrend": 1.4,
          "lowPriceExPlus": 0.85,
          "avg1": 2.49,
          "avg7": 1.31,
          "avg30": 1.74,
          "reverseHoloAvg1": 0.3,
          "reverseHoloAvg7": 1.28,
          "reverseHoloAvg30": 1.31
        }
      }
    },
    {
      "id": "xy7-3",
      "name": "Vileplume",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "130",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Gloom",
      "abilities": [
        {
          "name": "Irritating Pollen",
          "text": "Each player can't play any Item cards from his or her hand.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Solar Beam",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "xy7",
        "name": "Ancient Origins",
        "series": "XY",
        "printedTotal": 98,
        "total": 100,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "AOR",
        "releaseDate": "2015/08/12",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy7/symbol.png",
          "logo": "https://images.pokemontcg.io/xy7/logo.png"
        }
      },
      "number": "3",
      "artist": "Midori Harada",
      "rarity": "Rare",
      "flavorText": "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
      "nationalPokedexNumbers": [
        45
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy7/3.png",
        "large": "https://images.pokemontcg.io/xy7/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.19,
            "mid": 0.49,
            "high": 3.87,
            "market": 0.49,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.53,
            "mid": 0.8,
            "high": 4.01,
            "market": 0.69,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.92,
          "lowPrice": 0.03,
          "trendPrice": 0.62,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.08,
          "reverseHoloLow": 0.3,
          "reverseHoloTrend": 0.97,
          "lowPriceExPlus": 0.03,
          "avg1": 0.5,
          "avg7": 0.92,
          "avg30": 0.61,
          "reverseHoloAvg1": 1.9,
          "reverseHoloAvg7": 1.33,
          "reverseHoloAvg30": 1.36
        }
      }
    },
    {
      "id": "bw10-3",
      "name": "Lileep",
      "supertype": "Pokémon",
      "subtypes": [
        "Restored"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Root Fossil Lileep",
      "evolvesTo": [
        "Cradily"
      ],
      "rules": [
        "Put this card onto your Bench only with the effect of Root Fossil Lileep"
      ],
      "abilities": [
        {
          "name": "Prehistoric Call",
          "text": "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Spiral Drain",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Heal 10 damage from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "bw10",
        "name": "Plasma Blast",
        "series": "Black & White",
        "printedTotal": 101,
        "total": 105,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLB",
        "releaseDate": "2013/08/14",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw10/symbol.png",
          "logo": "https://images.pokemontcg.io/bw10/logo.png"
        }
      },
      "number": "3",
      "artist": "Suwama Chiaki",
      "rarity": "Uncommon",
      "flavorText": "It lived on the seafloor 100 million years ago and was reanimated scientifically.",
      "nationalPokedexNumbers": [
        345
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw10/3.png",
        "large": "https://images.pokemontcg.io/bw10/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw10-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.2,
            "mid": 0.38,
            "high": 2.11,
            "market": 0.33,
            "directLow": 0.3
          },
          "reverseHolofoil": {
            "low": 0.41,
            "mid": 0.67,
            "high": 1.74,
            "market": 0.58,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw10-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.43,
          "lowPrice": 0.02,
          "trendPrice": 0.23,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.43,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.6,
          "lowPriceExPlus": 0.07,
          "avg1": 0.09,
          "avg7": 0.36,
          "avg30": 0.27,
          "reverseHoloAvg1": 0.1,
          "reverseHoloAvg7": 0.6,
          "reverseHoloAvg30": 0.56
        }
      }
    },
    {
      "id": "bw4-2",
      "name": "Seedot",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Nuzleaf"
      ],
      "attacks": [
        {
          "name": "Trip Over",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw4",
        "name": "Next Destinies",
        "series": "Black & White",
        "printedTotal": 99,
        "total": 103,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "NXD",
        "releaseDate": "2012/02/08",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw4/symbol.png",
          "logo": "https://images.pokemontcg.io/bw4/logo.png"
        }
      },
      "number": "2",
      "artist": "Kagemaru Himeno",
      "rarity": "Common",
      "flavorText": "When it dangles from a tree branch, it looks just like an acorn. It enjoys scaring other Pokémon.",
      "nationalPokedexNumbers": [
        273
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw4/2.png",
        "large": "https://images.pokemontcg.io/bw4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.05,
            "mid": 0.2,
            "high": 2.55,
            "market": 0.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.25,
            "mid": 0.48,
            "high": 3.44,
            "market": 0.38,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.1,
          "lowPrice": 0.02,
          "trendPrice": 0.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.15,
          "reverseHoloLow": 0.09,
          "reverseHoloTrend": 0.35,
          "lowPriceExPlus": 0.02,
          "avg1": 0.05,
          "avg7": 0.1,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.15,
          "reverseHoloAvg7": 0.4,
          "reverseHoloAvg30": 0.33
        }
      }
    },
    {
      "id": "sm9-4",
      "name": "Kakuna",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Weedle",
      "evolvesTo": [
        "Beedrill"
      ],
      "abilities": [
        {
          "name": "Grass Cushion",
          "text": "If this Pokémon has any Grass Energy attached to it, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Bug Bite",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "sm9",
        "name": "Team Up",
        "series": "Sun & Moon",
        "printedTotal": 181,
        "total": 198,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "TEU",
        "releaseDate": "2019/02/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm9/symbol.png",
          "logo": "https://images.pokemontcg.io/sm9/logo.png"
        }
      },
      "number": "4",
      "artist": "Yuka Morii",
      "rarity": "Uncommon",
      "flavorText": "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
      "nationalPokedexNumbers": [
        14
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm9/4.png",
        "large": "https://images.pokemontcg.io/sm9/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm9-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.2,
            "high": 1.4,
            "market": 0.19,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.19,
            "mid": 0.36,
            "high": 1.54,
            "market": 0.35,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm9-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.22,
          "lowPrice": 0.02,
          "trendPrice": 0.2,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.32,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 0.34,
          "lowPriceExPlus": 0.02,
          "avg1": 0.2,
          "avg7": 0.2,
          "avg30": 0.13,
          "reverseHoloAvg1": 0.3,
          "reverseHoloAvg7": 0.4,
          "reverseHoloAvg30": 0.35
        }
      }
    },
    {
      "id": "hgss4-4",
      "name": "Drapion",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "100",
      "types": [
        "Darkness"
      ],
      "evolvesFrom": "Skorupi",
      "attacks": [
        {
          "name": "Toxic Fang",
          "cost": [
            "Darkness",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns."
        },
        {
          "name": "Land Crush",
          "cost": [
            "Darkness",
            "Darkness",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "hgss4",
        "name": "HS—Triumphant",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 102,
        "total": 103,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TM",
        "releaseDate": "2010/11/03",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss4/logo.png"
        }
      },
      "number": "4",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Rare Holo",
      "flavorText": "It attacks people and Pokémon that cross the desert. This has only furthered its bad reputation.",
      "nationalPokedexNumbers": [
        452
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss4/4.png",
        "large": "https://images.pokemontcg.io/hgss4/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.85,
            "mid": 1.78,
            "high": 3,
            "market": 1.78,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.6,
            "mid": 1.51,
            "high": 3.58,
            "market": 1.02,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss4-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.12,
          "lowPrice": 0.1,
          "trendPrice": 1.39,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.95,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 3.61,
          "lowPriceExPlus": 0.5,
          "avg1": 3.99,
          "avg7": 2.41,
          "avg30": 2.35,
          "reverseHoloAvg1": 3.8,
          "reverseHoloAvg7": 3.73,
          "reverseHoloAvg30": 3.04
        }
      }
    },
    {
      "id": "ex13-3",
      "name": "Deoxys δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Darkness"
      ],
      "abilities": [
        {
          "name": "Form Change",
          "text": "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Energy Loop",
          "cost": [
            "Darkness",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Return 2 Energy attached to Deoxys to your hand."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex13",
        "name": "Holon Phantoms",
        "series": "EX",
        "printedTotal": 110,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HP",
        "releaseDate": "2006/05/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex13/symbol.png",
          "logo": "https://images.pokemontcg.io/ex13/logo.png"
        }
      },
      "number": "3",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        386
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex13/3.png",
        "large": "https://images.pokemontcg.io/ex13/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex13-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 9.32,
            "mid": 17.56,
            "high": 25,
            "market": 18.74,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 38.32,
            "mid": 48.78,
            "high": 69.99,
            "market": 38.32,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex13-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 9.25,
          "lowPrice": 1.9,
          "trendPrice": 10.41,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 4.9,
          "reverseHoloTrend": 32.74,
          "lowPriceExPlus": 8.5,
          "avg1": 9.6,
          "avg7": 10.23,
          "avg30": 12.13,
          "reverseHoloAvg1": 80,
          "reverseHoloAvg7": 22.7,
          "reverseHoloAvg30": 25.27
        }
      }
    },
    {
      "id": "sm5-2",
      "name": "Yanma",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Yanmega"
      ],
      "attacks": [
        {
          "name": "Super Speed",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm5",
        "name": "Ultra Prism",
        "series": "Sun & Moon",
        "printedTotal": 156,
        "total": 178,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "UPR",
        "releaseDate": "2018/02/02",
        "updatedAt": "2019/02/19 23:25:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm5/symbol.png",
          "logo": "https://images.pokemontcg.io/sm5/logo.png"
        }
      },
      "number": "2",
      "artist": "Akira Komayama",
      "rarity": "Common",
      "flavorText": "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area.",
      "nationalPokedexNumbers": [
        193
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm5/2.png",
        "large": "https://images.pokemontcg.io/sm5/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.02,
            "mid": 0.15,
            "high": 1.3,
            "market": 0.06,
            "directLow": 0.03
          },
          "reverseHolofoil": {
            "low": 0.08,
            "mid": 0.25,
            "high": 1.99,
            "market": 0.2,
            "directLow": 0.17
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm5-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.04,
          "lowPrice": 0.02,
          "trendPrice": 0.04,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.32,
          "reverseHoloLow": 0.08,
          "reverseHoloTrend": 0.32,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.03,
          "avg30": 0.04,
          "reverseHoloAvg1": 0.49,
          "reverseHoloAvg7": 0.3,
          "reverseHoloAvg30": 0.3
        }
      }
    },
    {
      "id": "sm75-1",
      "name": "Charmander",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Fire"
      ],
      "evolvesTo": [
        "Charmeleon"
      ],
      "attacks": [
        {
          "name": "Fire Fang",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Your opponent's Active Pokémon is now Burned."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm75",
        "name": "Dragon Majesty",
        "series": "Sun & Moon",
        "printedTotal": 70,
        "total": 80,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRM",
        "releaseDate": "2018/09/07",
        "updatedAt": "2018/10/01 21:54:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm75/symbol.png",
          "logo": "https://images.pokemontcg.io/sm75/logo.png"
        }
      },
      "number": "1",
      "artist": "tetsuya koizumi",
      "rarity": "Common",
      "flavorText": "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
      "nationalPokedexNumbers": [
        4
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm75/1.png",
        "large": "https://images.pokemontcg.io/sm75/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm75-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 2.31,
            "mid": 6.49,
            "high": 17.11,
            "market": 6.46,
            "directLow": null
          },
          "normal": {
            "low": 0.25,
            "mid": 0.78,
            "high": 2.99,
            "market": 0.77,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm75-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.8,
          "lowPrice": 0.02,
          "trendPrice": 0.96,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 3,
          "reverseHoloTrend": 6.73,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.92,
          "avg30": 0.83,
          "reverseHoloAvg1": 15,
          "reverseHoloAvg7": 8.51,
          "reverseHoloAvg30": 6.18
        }
      }
    },
    {
      "id": "ex10-1",
      "name": "Ampharos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Flaaffy",
      "abilities": [
        {
          "name": "Energy Connect",
          "text": "As often as you like during your turn (before your attack), you may move a basic Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Miraculous Thunder",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "You may discard all Lightning Energy attached to Ampharos. If you do, the Defending Pokémon is now Burned and Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex10",
        "name": "Unseen Forces",
        "series": "EX",
        "printedTotal": 115,
        "total": 145,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "UF",
        "releaseDate": "2005/08/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex10/symbol.png",
          "logo": "https://images.pokemontcg.io/ex10/logo.png"
        }
      },
      "number": "1",
      "artist": "Kyoko Umemoto",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        181
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex10/1.png",
        "large": "https://images.pokemontcg.io/ex10/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex10-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 12.03,
            "mid": 21.89,
            "high": 29.99,
            "market": 21.7,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 19.98,
            "mid": 36.98,
            "high": 40.63,
            "market": 36.55,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex10-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.36,
          "lowPrice": 1.58,
          "trendPrice": 5.46,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7.67,
          "reverseHoloLow": 2.88,
          "reverseHoloTrend": 11.69,
          "lowPriceExPlus": 3.99,
          "avg1": 1.58,
          "avg7": 5.84,
          "avg30": 6.11,
          "reverseHoloAvg1": 3.33,
          "reverseHoloAvg7": 11.33,
          "reverseHoloAvg30": 10.55
        }
      }
    },
    {
      "id": "bw6-1",
      "name": "Hoppip",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "30",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Skiploom"
      ],
      "attacks": [
        {
          "name": "Flail Around",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10×",
          "text": "Flip 3 coins. This attack does 10 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw6",
        "name": "Dragons Exalted",
        "series": "Black & White",
        "printedTotal": 124,
        "total": 128,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRX",
        "releaseDate": "2012/08/15",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw6/symbol.png",
          "logo": "https://images.pokemontcg.io/bw6/logo.png"
        }
      },
      "number": "1",
      "artist": "Kouki Saitou",
      "rarity": "Common",
      "flavorText": "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way.",
      "nationalPokedexNumbers": [
        187
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw6/1.png",
        "large": "https://images.pokemontcg.io/bw6/1_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw6-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.09,
            "mid": 0.25,
            "high": 3,
            "market": 0.21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.32,
            "mid": 0.5,
            "high": 4.36,
            "market": 0.38,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw6-1",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.16,
          "lowPrice": 0.02,
          "trendPrice": 0.13,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.45,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.53,
          "lowPriceExPlus": 0.02,
          "avg1": 0.07,
          "avg7": 0.15,
          "avg30": 0.15,
          "reverseHoloAvg1": 0.45,
          "reverseHoloAvg7": 0.38,
          "reverseHoloAvg30": 0.49
        }
      }
    },
    {
      "id": "si1-4",
      "name": "Togepi",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "40",
      "types": [
        "Colorless"
      ],
      "evolvesTo": [
        "Togetic"
      ],
      "attacks": [
        {
          "name": "Bawl",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "si1",
        "name": "Southern Islands",
        "series": "Other",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2001/07/31",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/si1/symbol.png",
          "logo": "https://images.pokemontcg.io/si1/logo.png"
        }
      },
      "number": "4",
      "artist": "Keiko Fukuyama",
      "flavorText": "This Pokémon is still immature. When threatened, it releases poison from its head and tries to drive its enemies away.",
      "nationalPokedexNumbers": [
        175
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/si1/4.png",
        "large": "https://images.pokemontcg.io/si1/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/si1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 29.04,
            "mid": 44.99,
            "high": 59.99,
            "market": 42.41,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/si1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 25.56,
          "lowPrice": 10.99,
          "trendPrice": 28.86,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 26.28,
          "lowPriceExPlus": 25,
          "avg1": 24.99,
          "avg7": 31.92,
          "avg30": 26.72,
          "reverseHoloAvg1": 20,
          "reverseHoloAvg7": 24.55,
          "reverseHoloAvg30": 19.92
        }
      }
    },
    {
      "id": "bw5-3",
      "name": "Venusaur",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Ivysaur",
      "abilities": [
        {
          "name": "Floral Fragrance",
          "text": "Once during your turn (before your attack), you may search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Poison Powder",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "bw5",
        "name": "Dark Explorers",
        "series": "Black & White",
        "printedTotal": 108,
        "total": 111,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DEX",
        "releaseDate": "2012/05/09",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw5/symbol.png",
          "logo": "https://images.pokemontcg.io/bw5/logo.png"
        }
      },
      "number": "3",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "flavorText": "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      "nationalPokedexNumbers": [
        3
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw5/3.png",
        "large": "https://images.pokemontcg.io/bw5/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw5-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.69,
            "mid": 4,
            "high": 15,
            "market": 4.78,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4.99,
            "mid": 7.97,
            "high": 38.21,
            "market": 13.08,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw5-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.98,
          "lowPrice": 1,
          "trendPrice": 3.23,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.78,
          "reverseHoloLow": 1.95,
          "reverseHoloTrend": 6.03,
          "lowPriceExPlus": 1.7,
          "avg1": 4,
          "avg7": 4.14,
          "avg30": 4.34,
          "reverseHoloAvg1": 3.75,
          "reverseHoloAvg7": 8.01,
          "reverseHoloAvg30": 4.94
        }
      }
    },
    {
      "id": "dp1-3",
      "name": "Electivire",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "46",
      "hp": "100",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Electabuzz",
      "abilities": [
        {
          "name": "Intense Voltage",
          "text": "As often as you like during your turn (before your attack), if Elekid is anywhere under Electivire, you may move a Lightning Energy attached to your Pokémon to Electivire. This power can't be used if Electivire is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Giga Impact",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "You may discard all Lightning Energy attached to Electivire. If you do, this attack's base damage is 120 instead of 60."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "dp1",
        "name": "Diamond & Pearl",
        "series": "Diamond & Pearl",
        "printedTotal": 130,
        "total": 130,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp1/symbol.png",
          "logo": "https://images.pokemontcg.io/dp1/logo.png"
        }
      },
      "number": "3",
      "artist": "Nakaoka",
      "rarity": "Rare Holo",
      "flavorText": "It pushes the tips of its two tails against the foe, then lets loose with over 20,000 volts of power.",
      "nationalPokedexNumbers": [
        466
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp1/3.png",
        "large": "https://images.pokemontcg.io/dp1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.74,
            "mid": 3.2,
            "high": 16.2,
            "market": 4.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.95,
            "mid": 4.87,
            "high": 19.98,
            "market": 5.55,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 13.95,
          "trendPrice": 25.78,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 13.95,
          "avg1": 29.99,
          "avg7": 21.66,
          "avg30": 21.66,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "xy11-4",
      "name": "Skiploom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Hoppip",
      "evolvesTo": [
        "Jumpluff"
      ],
      "attacks": [
        {
          "name": "Splash",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy11",
        "name": "Steam Siege",
        "series": "XY",
        "printedTotal": 114,
        "total": 116,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "STS",
        "releaseDate": "2016/08/03",
        "updatedAt": "2019/04/10 19:59:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy11/symbol.png",
          "logo": "https://images.pokemontcg.io/xy11/logo.png"
        }
      },
      "number": "4",
      "artist": "Eri Yamaki",
      "rarity": "Uncommon",
      "flavorText": "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun.",
      "nationalPokedexNumbers": [
        188
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy11/4.png",
        "large": "https://images.pokemontcg.io/xy11/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy11-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.02,
            "mid": 0.15,
            "high": 2,
            "market": 0.11,
            "directLow": 0.1
          },
          "reverseHolofoil": {
            "low": 0.09,
            "mid": 0.35,
            "high": 1.51,
            "market": 0.33,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy11-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.18,
          "lowPrice": 0.02,
          "trendPrice": 0.13,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.44,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.37,
          "lowPriceExPlus": 0.02,
          "avg1": 0.03,
          "avg7": 0.15,
          "avg30": 0.09,
          "reverseHoloAvg1": 0.44,
          "reverseHoloAvg7": 0.35,
          "reverseHoloAvg30": 0.41
        }
      }
    },
    {
      "id": "hgss4-5",
      "name": "Mamoswine",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Piloswine",
      "attacks": [
        {
          "name": "Icy Wind",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "The Defending Pokémon is now Asleep."
        },
        {
          "name": "Snowstorm",
          "cost": [
            "Water",
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": "Does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Metal",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "hgss4",
        "name": "HS—Triumphant",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 102,
        "total": 103,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TM",
        "releaseDate": "2010/11/03",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss4/logo.png"
        }
      },
      "number": "5",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "flavorText": "A frozen Mamoswine was dug from ice dating back 10,000 years. This Pokémon has been around a long, long, long time.",
      "nationalPokedexNumbers": [
        473
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss4/5.png",
        "large": "https://images.pokemontcg.io/hgss4/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.9,
            "mid": 1.68,
            "high": 3.4,
            "market": 1.31,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.8,
            "mid": 1.74,
            "high": 3.59,
            "market": 0.98,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss4-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.7,
          "lowPrice": 0.1,
          "trendPrice": 0.91,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 2.03,
          "reverseHoloLow": 0.2,
          "reverseHoloTrend": 2.17,
          "lowPriceExPlus": 0.35,
          "avg1": 0.29,
          "avg7": 0.65,
          "avg30": 0.96,
          "reverseHoloAvg1": 3.8,
          "reverseHoloAvg7": 2.1,
          "reverseHoloAvg30": 1.57
        }
      }
    },
    {
      "id": "sm12-3",
      "name": "Gloom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Oddish",
      "evolvesTo": [
        "Vileplume",
        "Bellossom"
      ],
      "attacks": [
        {
          "name": "Sleep Powder",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Your opponent's Active Pokémon is now Asleep."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm12",
        "name": "Cosmic Eclipse",
        "series": "Sun & Moon",
        "printedTotal": 236,
        "total": 272,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CEC",
        "releaseDate": "2019/11/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm12/symbol.png",
          "logo": "https://images.pokemontcg.io/sm12/logo.png"
        }
      },
      "number": "3",
      "artist": "sui",
      "rarity": "Uncommon",
      "flavorText": "Smells incredibly foul! However, around one out of a thousand people enjoy sniffing its nose-bending stink.",
      "nationalPokedexNumbers": [
        44
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm12/3.png",
        "large": "https://images.pokemontcg.io/sm12/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm12-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 0.25,
            "mid": 0.44,
            "high": 2,
            "market": 0.43,
            "directLow": 0.44
          },
          "normal": {
            "low": 0.03,
            "mid": 0.15,
            "high": 1.34,
            "market": 0.14,
            "directLow": 0.11
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm12-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.1,
          "lowPrice": 0.02,
          "trendPrice": 0.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.26,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.34,
          "lowPriceExPlus": 0.02,
          "avg1": 0.09,
          "avg7": 0.07,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.11,
          "reverseHoloAvg7": 0.43,
          "reverseHoloAvg30": 0.42
        }
      }
    },
    {
      "id": "ex7-4",
      "name": "Dark Electrode",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Lightning",
        "Darkness"
      ],
      "evolvesFrom": "Voltorb",
      "rules": [
        "This Pokémon is both Lightning Darkness type."
      ],
      "abilities": [
        {
          "name": "Darkness Navigation",
          "text": "Once during your turn (before your attack), if Dark Electrode has no Energy attached to it, you may search your deck for a Darkness or Dark Metal Energy and attach it to Dark Electrode. Shuffle your deck afterward. This power can't be used if Dark Electrode is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Energy Bomb",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "You may move all Energy cards attached to Dark Electrode to your Benched Pokémon in any way you like."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex7",
        "name": "Team Rocket Returns",
        "series": "EX",
        "printedTotal": 109,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "TRR",
        "releaseDate": "2004/11/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex7/symbol.png",
          "logo": "https://images.pokemontcg.io/ex7/logo.png"
        }
      },
      "number": "4",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        101
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex7/4.png",
        "large": "https://images.pokemontcg.io/ex7/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex7-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 14.25,
            "mid": 22.09,
            "high": 40.5,
            "market": 21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 23.39,
            "mid": 38.63,
            "high": 50,
            "market": 38,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex7-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 15.54,
          "lowPrice": 3.99,
          "trendPrice": 14.77,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 31.25,
          "reverseHoloLow": 11.99,
          "reverseHoloTrend": 42.14,
          "lowPriceExPlus": 8,
          "avg1": 24.97,
          "avg7": 16.04,
          "avg30": 15.56,
          "reverseHoloAvg1": 55,
          "reverseHoloAvg7": 52.7,
          "reverseHoloAvg30": 26.6
        }
      }
    },
    {
      "id": "sm5-3",
      "name": "Yanmega",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "120",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Yanma",
      "attacks": [
        {
          "name": "Supersonic",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "Your opponent's Active Pokémon is now Confused."
        },
        {
          "name": "Cutting Wind",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "120",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm5",
        "name": "Ultra Prism",
        "series": "Sun & Moon",
        "printedTotal": 156,
        "total": 178,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "UPR",
        "releaseDate": "2018/02/02",
        "updatedAt": "2019/02/19 23:25:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm5/symbol.png",
          "logo": "https://images.pokemontcg.io/sm5/logo.png"
        }
      },
      "number": "3",
      "artist": "SATOSHI NAKAI",
      "rarity": "Uncommon",
      "flavorText": "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
      "nationalPokedexNumbers": [
        469
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm5/3.png",
        "large": "https://images.pokemontcg.io/sm5/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm5-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.18,
            "high": 1.35,
            "market": 0.06,
            "directLow": 0.07
          },
          "reverseHolofoil": {
            "low": 0.07,
            "mid": 0.3,
            "high": 1.95,
            "market": 0.25,
            "directLow": 0.26
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm5-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.11,
          "lowPrice": 0.02,
          "trendPrice": 0.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.29,
          "reverseHoloLow": 0.08,
          "reverseHoloTrend": 0.29,
          "lowPriceExPlus": 0.02,
          "avg1": 0.03,
          "avg7": 0.1,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.29,
          "reverseHoloAvg7": 0.28,
          "reverseHoloAvg30": 0.32
        }
      }
    },
    {
      "id": "swsh1-3",
      "name": "Roselia",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Roserade"
      ],
      "attacks": [
        {
          "name": "Sweet Scent",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 30 damage from 1 of your Pokémon."
        },
        {
          "name": "Sting",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "swsh1",
        "name": "Sword & Shield",
        "series": "Sword & Shield",
        "printedTotal": 202,
        "total": 216,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "SSH",
        "releaseDate": "2020/02/07",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh1/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh1/logo.png"
        }
      },
      "number": "3",
      "artist": "Naoyo Kimura",
      "rarity": "Common",
      "flavorText": "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is.",
      "nationalPokedexNumbers": [
        315
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh1/3.png",
        "large": "https://images.pokemontcg.io/swsh1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 1.29,
            "market": 0.03,
            "directLow": 0.03
          },
          "reverseHolofoil": {
            "low": 0.02,
            "mid": 0.2,
            "high": 0.99,
            "market": 0.19,
            "directLow": 0.08
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.06,
          "lowPrice": 0.02,
          "trendPrice": 0.04,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.22,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.24,
          "lowPriceExPlus": 0.02,
          "avg1": 0.05,
          "avg7": 0.03,
          "avg30": 0.05,
          "reverseHoloAvg1": 0.39,
          "reverseHoloAvg7": 0.23,
          "reverseHoloAvg30": 0.28
        }
      }
    },
    {
      "id": "pl3-4",
      "name": "Electivire FB",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic",
        "SP"
      ],
      "level": "50",
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Dump and Draw",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards."
        },
        {
          "name": "Electric Current",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Move a Lightning Energy card attached to Electivire FB to 1 of your Benched Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pl3",
        "name": "Supreme Victors",
        "series": "Platinum",
        "printedTotal": 147,
        "total": 153,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SV",
        "releaseDate": "2009/08/19",
        "updatedAt": "2018/03/07 22:40:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl3/symbol.png",
          "logo": "https://images.pokemontcg.io/pl3/logo.png"
        }
      },
      "number": "4",
      "artist": "Hironobu Yoshida",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        466
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl3/4.png",
        "large": "https://images.pokemontcg.io/pl3/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.8,
            "mid": 2.8,
            "high": 6.75,
            "market": 3.47,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.4,
            "mid": 2.39,
            "high": 4.16,
            "market": 2.4,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl3-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.51,
          "lowPrice": 0.5,
          "trendPrice": 2.98,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.5,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 3.01,
          "lowPriceExPlus": 1.5,
          "avg1": 1.29,
          "avg7": 3.24,
          "avg30": 3.26,
          "reverseHoloAvg1": 0.99,
          "reverseHoloAvg7": 3.53,
          "reverseHoloAvg30": 2.72
        }
      }
    },
    {
      "id": "hgss1-5",
      "name": "Hitmontop",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Triple Kick",
          "cost": [
            "Fighting"
          ],
          "convertedEnergyCost": 1,
          "damage": "20×",
          "text": "Flip 3 coins. This attack does 20 damage times the number of heads."
        },
        {
          "name": "Close Combat",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "During your opponent's next turn, any damage done to Hitmontop by attacks is increased by 20 (after applying Weakness and Resistance)."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "hgss1",
        "name": "HeartGold & SoulSilver",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 123,
        "total": 124,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "HS",
        "releaseDate": "2010/02/10",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss1/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss1/logo.png"
        }
      },
      "number": "5",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground.",
      "nationalPokedexNumbers": [
        237
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss1/5.png",
        "large": "https://images.pokemontcg.io/hgss1/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2,
            "mid": 3,
            "high": 13,
            "market": 2.99,
            "directLow": 2.88
          },
          "reverseHolofoil": {
            "low": 1.85,
            "mid": 2.36,
            "high": 5.95,
            "market": 3.71,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.31,
          "lowPrice": 0.29,
          "trendPrice": 1.1,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.55,
          "reverseHoloLow": 0.29,
          "reverseHoloTrend": 2.9,
          "lowPriceExPlus": 0.75,
          "avg1": 1,
          "avg7": 1.59,
          "avg30": 2.34,
          "reverseHoloAvg1": 1.95,
          "reverseHoloAvg7": 2.85,
          "reverseHoloAvg30": 3.08
        }
      }
    },
    {
      "id": "ex12-5",
      "name": "Gengar",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Haunter",
      "abilities": [
        {
          "name": "Shadow Curse",
          "text": "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's Pokémon.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Cursed Reaction",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Put 2 damage counters on your opponent's Pokémon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead."
        },
        {
          "name": "Super Psy Bolt",
          "cost": [
            "Psychic",
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Darkness",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex12",
        "name": "Legend Maker",
        "series": "EX",
        "printedTotal": 92,
        "total": 93,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LM",
        "releaseDate": "2006/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex12/symbol.png",
          "logo": "https://images.pokemontcg.io/ex12/logo.png"
        }
      },
      "number": "5",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        94
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex12/5.png",
        "large": "https://images.pokemontcg.io/ex12/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex12-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 15,
            "mid": 26.66,
            "high": 32.89,
            "market": 28.57,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 49.36,
            "mid": 63.66,
            "high": 89.13,
            "market": 84.81,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex12-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 6.77,
          "lowPrice": 0.99,
          "trendPrice": 4.45,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 35.5,
          "reverseHoloLow": 2,
          "reverseHoloTrend": 25.48,
          "lowPriceExPlus": 3,
          "avg1": 4.95,
          "avg7": 5.55,
          "avg30": 9.32,
          "reverseHoloAvg1": 50,
          "reverseHoloAvg7": 16.91,
          "reverseHoloAvg30": 41.56
        }
      }
    },
    {
      "id": "pl4-3",
      "name": "Heatran",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "58",
      "hp": "100",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Fire Fang",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "The Defending Pokémon is now Burned."
        },
        {
          "name": "Magma Mantle",
          "cost": [
            "Fire",
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60+",
          "text": "Discard the top 3 cards of your deck. This attack does 60 damage plus 20 more damage for each Fire or Metal Energy card you discarded."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pl4",
        "name": "Arceus",
        "series": "Platinum",
        "printedTotal": 99,
        "total": 111,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AR",
        "releaseDate": "2009/11/04",
        "updatedAt": "2021/07/15 11:30:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl4/symbol.png",
          "logo": "https://images.pokemontcg.io/pl4/logo.png"
        }
      },
      "number": "3",
      "artist": "Keiko Moritsugu",
      "rarity": "Rare Holo",
      "flavorText": "Its body is made of rugged steel. However, it is partially melted in spots because of its own heat.",
      "nationalPokedexNumbers": [
        485
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl4/3.png",
        "large": "https://images.pokemontcg.io/pl4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.8,
            "mid": 2,
            "high": 9.97,
            "market": 2.03,
            "directLow": 3
          },
          "reverseHolofoil": {
            "low": 1.24,
            "mid": 1.95,
            "high": 3.59,
            "market": 2.1,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.01,
          "lowPrice": 0.1,
          "trendPrice": 1.01,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.4,
          "reverseHoloTrend": 1.27,
          "lowPriceExPlus": 0.95,
          "avg1": 1.27,
          "avg7": 1.5,
          "avg30": 1.6,
          "reverseHoloAvg1": 1.95,
          "reverseHoloAvg7": 1.42,
          "reverseHoloAvg30": 1.34
        }
      }
    },
    {
      "id": "bw10-4",
      "name": "Cradily",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "120",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Lileep",
      "attacks": [
        {
          "name": "Lifesplosion",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon and put it onto your Bench. Shuffle your deck afterward."
        },
        {
          "name": "Spiral Drain",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Heal 20 damage from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "bw10",
        "name": "Plasma Blast",
        "series": "Black & White",
        "printedTotal": 101,
        "total": 105,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PLB",
        "releaseDate": "2013/08/14",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw10/symbol.png",
          "logo": "https://images.pokemontcg.io/bw10/logo.png"
        }
      },
      "number": "4",
      "artist": "kawayoo",
      "rarity": "Rare",
      "flavorText": "It lives in the shallows of warm seas. When the tide goes out, it digs up prey from beaches.",
      "nationalPokedexNumbers": [
        346
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw10/4.png",
        "large": "https://images.pokemontcg.io/bw10/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw10-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.86,
            "mid": 1.24,
            "high": 7.95,
            "market": 1.31,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.99,
            "mid": 2.72,
            "high": 7,
            "market": 5.75,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw10-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.87,
          "lowPrice": 0.25,
          "trendPrice": 0.59,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.53,
          "reverseHoloLow": 0.49,
          "reverseHoloTrend": 1.56,
          "lowPriceExPlus": 0.25,
          "avg1": 0.4,
          "avg7": 0.77,
          "avg30": 0.78,
          "reverseHoloAvg1": 1.05,
          "reverseHoloAvg7": 1.53,
          "reverseHoloAvg30": 1.46
        }
      }
    },
    {
      "id": "pop4-3",
      "name": "Flygon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Vibrava",
      "abilities": [
        {
          "name": "Levitate",
          "text": "As long as Flygon has any Energy attached to it, the Retreat Cost for Flygon is 0.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Bite",
          "cost": [
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Sand Pit",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": "The Defending Pokémon can't retreat during your opponent's next turn."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop4",
        "name": "POP Series 4",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2006/08/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop4/symbol.png",
          "logo": "https://images.pokemontcg.io/pop4/logo.png"
        }
      },
      "number": "3",
      "artist": "Hisao Nakamura",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        330
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop4/3.png",
        "large": "https://images.pokemontcg.io/pop4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 7.99,
            "mid": 8,
            "high": 15,
            "market": 15.32,
            "directLow": null
          },
          "holofoil": {
            "low": 3.99,
            "mid": 5.3,
            "high": 14.5,
            "market": 9.47,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.81,
          "lowPrice": 0.05,
          "trendPrice": 4.55,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 1.5,
          "reverseHoloTrend": 2.44,
          "lowPriceExPlus": 1,
          "avg1": 0.5,
          "avg7": 0.85,
          "avg30": 3.16,
          "reverseHoloAvg1": 4.5,
          "reverseHoloAvg7": 1.71,
          "reverseHoloAvg30": 1.73
        }
      }
    },
    {
      "id": "ex3-5",
      "name": "Golem",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Graveler",
      "attacks": [
        {
          "name": "Rock Vengeance",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "20+",
          "text": "Does 20 damage plus 10 more damage for each damage counter on all of your Active Pokémon."
        },
        {
          "name": "Rock Slide",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 5,
          "damage": "60",
          "text": "Does 20 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "ex3",
        "name": "Dragon",
        "series": "EX",
        "printedTotal": 97,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DR",
        "releaseDate": "2003/11/24",
        "updatedAt": "2023/02/16 05:47:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex3/symbol.png",
          "logo": "https://images.pokemontcg.io/ex3/logo.png"
        }
      },
      "number": "5",
      "artist": "Hisao Nakamura",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        76
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex3/5.png",
        "large": "https://images.pokemontcg.io/ex3/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex3-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 8.91,
            "mid": 13.5,
            "high": 19.98,
            "market": 13.53,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4.4,
            "mid": 10.54,
            "high": 14.95,
            "market": 14.36,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex3-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.7,
          "lowPrice": 0.8,
          "trendPrice": 4.32,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.9,
          "reverseHoloLow": 0.8,
          "reverseHoloTrend": 10.84,
          "lowPriceExPlus": 3.99,
          "avg1": 15,
          "avg7": 7.41,
          "avg30": 8.9,
          "reverseHoloAvg1": 3.1,
          "reverseHoloAvg7": 15.47,
          "reverseHoloAvg30": 6.84
        }
      }
    },
    {
      "id": "swsh4-2",
      "name": "Kakuna",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Weedle",
      "evolvesTo": [
        "Beedrill"
      ],
      "attacks": [
        {
          "name": "Shed Skin",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 30 damage from this Pokémon."
        },
        {
          "name": "Bug Bite",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "swsh4",
        "name": "Vivid Voltage",
        "series": "Sword & Shield",
        "printedTotal": 185,
        "total": 203,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "VIV",
        "releaseDate": "2020/11/13",
        "updatedAt": "2020/11/13 16:20:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh4/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh4/logo.png"
        }
      },
      "number": "2",
      "artist": "Naoyo Kimura",
      "rarity": "Uncommon",
      "flavorText": "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
      "nationalPokedexNumbers": [
        14
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh4/2.png",
        "large": "https://images.pokemontcg.io/swsh4/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.04,
            "directLow": 0.04
          },
          "reverseHolofoil": {
            "low": 0.05,
            "mid": 0.15,
            "high": 1,
            "market": 0.12,
            "directLow": 0.06
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh4-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.04,
          "lowPrice": 0.02,
          "trendPrice": 0.03,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.16,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.17,
          "lowPriceExPlus": 0.02,
          "avg1": 0.04,
          "avg7": 0.03,
          "avg30": 0.04,
          "reverseHoloAvg1": 0.3,
          "reverseHoloAvg7": 0.17,
          "reverseHoloAvg30": 0.18
        }
      }
    },
    {
      "id": "xy5-4",
      "name": "Tangela",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Tangrowth"
      ],
      "attacks": [
        {
          "name": "Absorb",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Heal 20 damage from this Pokémon."
        },
        {
          "name": "Vine Whip",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "xy5",
        "name": "Primal Clash",
        "series": "XY",
        "printedTotal": 160,
        "total": 164,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PRC",
        "releaseDate": "2015/02/04",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy5/symbol.png",
          "logo": "https://images.pokemontcg.io/xy5/logo.png"
        }
      },
      "number": "4",
      "artist": "match",
      "rarity": "Common",
      "flavorText": "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
      "nationalPokedexNumbers": [
        114
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy5/4.png",
        "large": "https://images.pokemontcg.io/xy5/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy5-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.02,
            "mid": 0.18,
            "high": 1.32,
            "market": 0.14,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.09,
            "mid": 0.45,
            "high": 1.65,
            "market": 0.5,
            "directLow": 0.45
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy5-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.12,
          "lowPrice": 0.02,
          "trendPrice": 0.19,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.08,
          "reverseHoloTrend": 0.86,
          "lowPriceExPlus": 0.02,
          "avg1": 0.45,
          "avg7": 0.15,
          "avg30": 0.11,
          "reverseHoloAvg1": 0.95,
          "reverseHoloAvg7": 0.87,
          "reverseHoloAvg30": 0.45
        }
      }
    },
    {
      "id": "ex9-4",
      "name": "Gardevoir",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "100",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Kirlia",
      "abilities": [
        {
          "name": "Heal Dance",
          "text": "Once during your turn (before your attack), you may remove 2 damage counter from 1 of your Pokémon. You can't use more than 1 Heal Dance Poké-Power each turn. This power can't be used if Gardevoir is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Psypunch",
          "cost": [
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Mind Shock",
          "cost": [
            "Psychic",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "This attack's damage isn't affected by Weakness or Resistance."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex9",
        "name": "Emerald",
        "series": "EX",
        "printedTotal": 106,
        "total": 107,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "EM",
        "releaseDate": "2005/05/01",
        "updatedAt": "2020/02/08 09:00:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex9/symbol.png",
          "logo": "https://images.pokemontcg.io/ex9/logo.png"
        }
      },
      "number": "4",
      "artist": "Kagemaru Himeno",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        282
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex9/4.png",
        "large": "https://images.pokemontcg.io/ex9/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex9-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 12.92,
            "mid": 19.49,
            "high": 31.19,
            "market": 21.69,
            "directLow": 26.03
          },
          "reverseHolofoil": {
            "low": 58.49,
            "mid": 67.96,
            "high": 87.8,
            "market": 14.45,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex9-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 5.47,
          "lowPrice": 0.5,
          "trendPrice": 5.37,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 5.43,
          "reverseHoloLow": 3,
          "reverseHoloTrend": 10.34,
          "lowPriceExPlus": 3.95,
          "avg1": 3.99,
          "avg7": 5.68,
          "avg30": 5.09,
          "reverseHoloAvg1": 4.9,
          "reverseHoloAvg7": 9.26,
          "reverseHoloAvg30": 11.48
        }
      }
    },
    {
      "id": "ex11-5",
      "name": "Flareon δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Fire",
        "Metal"
      ],
      "evolvesFrom": "Eevee",
      "rules": [
        "This Pokémon is both Fire Metal type."
      ],
      "attacks": [
        {
          "name": "Delta Search",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward."
        },
        {
          "name": "Return Burn",
          "cost": [
            "Fire",
            "Metal",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokémon is now Burned."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex11",
        "name": "Delta Species",
        "series": "EX",
        "printedTotal": 113,
        "total": 114,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DS",
        "releaseDate": "2005/10/31",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex11/symbol.png",
          "logo": "https://images.pokemontcg.io/ex11/logo.png"
        }
      },
      "number": "5",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        136
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex11/5.png",
        "large": "https://images.pokemontcg.io/ex11/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex11-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 42.78,
            "mid": 57.03,
            "high": 72.42,
            "market": 49.59,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 52.48,
            "mid": 73.48,
            "high": 96.42,
            "market": 90,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex11-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 20.75,
          "lowPrice": 6,
          "trendPrice": 29.83,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 34,
          "reverseHoloLow": 7,
          "reverseHoloTrend": 26.39,
          "lowPriceExPlus": 19.98,
          "avg1": 10.49,
          "avg7": 23.31,
          "avg30": 29.82,
          "reverseHoloAvg1": 6,
          "reverseHoloAvg7": 29.13,
          "reverseHoloAvg30": 40.78
        }
      }
    },
    {
      "id": "ex4-3",
      "name": "Team Aqua's Kyogre",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "100",
      "types": [
        "Water",
        "Darkness"
      ],
      "rules": [
        "This Pokémon is both Water Darkness type."
      ],
      "abilities": [
        {
          "name": "Power Saver",
          "text": "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Aqua in its name is 3 or less, Team Aqua's Kyogre can't attack.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Aqua Trip",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep."
        },
        {
          "name": "Aqua Smash",
          "cost": [
            "Water",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50+",
          "text": "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "ex4",
        "name": "Team Magma vs Team Aqua",
        "series": "EX",
        "printedTotal": 95,
        "total": 97,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "MA",
        "releaseDate": "2004/03/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex4/symbol.png",
          "logo": "https://images.pokemontcg.io/ex4/logo.png"
        }
      },
      "number": "3",
      "artist": "K. Hoshiba",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        382
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex4/3.png",
        "large": "https://images.pokemontcg.io/ex4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 38.5,
            "mid": 40.13,
            "high": 40.3,
            "market": 42.37,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 13.68,
            "mid": 42.03,
            "high": 42.99,
            "market": 49.95,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 5.42,
          "lowPrice": 0.2,
          "trendPrice": 7.82,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 8,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 21.26,
          "lowPriceExPlus": 2,
          "avg1": 3.95,
          "avg7": 8.76,
          "avg30": 5.23,
          "reverseHoloAvg1": 8,
          "reverseHoloAvg7": 28.49,
          "reverseHoloAvg30": 14.67
        }
      }
    },
    {
      "id": "base3-5",
      "name": "Gengar",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "38",
      "hp": "80",
      "types": [
        "Psychic"
      ],
      "evolvesFrom": "Haunter",
      "abilities": [
        {
          "name": "Curse",
          "text": "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Dark Mind",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "base3",
        "name": "Fossil",
        "series": "Base",
        "printedTotal": 62,
        "total": 62,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "FO",
        "releaseDate": "1999/10/10",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base3/symbol.png",
          "logo": "https://images.pokemontcg.io/base3/logo.png"
        }
      },
      "number": "5",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare Holo",
      "flavorText": "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.",
      "nationalPokedexNumbers": [
        94
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base3/5.png",
        "large": "https://images.pokemontcg.io/base3/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base3-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 179.99,
            "mid": 195.99,
            "high": 238.37,
            "market": 196.93,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 35,
            "mid": 39.52,
            "high": 79.99,
            "market": 51.1,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base3-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 51.22,
          "lowPrice": 9,
          "trendPrice": 52.83,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 29.47,
          "lowPriceExPlus": 30,
          "avg1": 217.5,
          "avg7": 71.08,
          "avg30": 53.93,
          "reverseHoloAvg1": 95,
          "reverseHoloAvg7": 31.3,
          "reverseHoloAvg30": 31.56
        }
      }
    },
    {
      "id": "dv1-5",
      "name": "Dragonite",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "150",
      "types": [
        "Dragon"
      ],
      "evolvesFrom": "Dragonair",
      "attacks": [
        {
          "name": "Hyper Beam",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon."
        },
        {
          "name": "Hurricane Tail",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60×",
          "text": "Flip 4 coins. This attack does 60 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Dragon",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "dv1",
        "name": "Dragon Vault",
        "series": "Black & White",
        "printedTotal": 20,
        "total": 21,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRV",
        "releaseDate": "2012/10/05",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dv1/symbol.png",
          "logo": "https://images.pokemontcg.io/dv1/logo.png"
        }
      },
      "number": "5",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
      "nationalPokedexNumbers": [
        149
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dv1/5.png",
        "large": "https://images.pokemontcg.io/dv1/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dv1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.87,
            "mid": 6.74,
            "high": 49.95,
            "market": 6.96,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dv1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 4.63,
          "lowPrice": 0.4,
          "trendPrice": 4.27,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 5.31,
          "lowPriceExPlus": 0.93,
          "avg1": 3.98,
          "avg7": 5.51,
          "avg30": 4.24,
          "reverseHoloAvg1": 3.5,
          "reverseHoloAvg7": 4.14,
          "reverseHoloAvg30": 3.31
        }
      }
    },
    {
      "id": "dp4-3",
      "name": "Darkrai",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "38",
      "hp": "70",
      "types": [
        "Darkness"
      ],
      "attacks": [
        {
          "name": "Reach Over",
          "cost": [],
          "convertedEnergyCost": 0,
          "damage": "",
          "text": "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
        },
        {
          "name": "Darkness Pursuit",
          "cost": [
            "Darkness",
            "Darkness",
            "Darkness"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "If the Defending Pokémon is Cresselia, this attack's base damage is 100."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dp4",
        "name": "Great Encounters",
        "series": "Diamond & Pearl",
        "printedTotal": 106,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "GE",
        "releaseDate": "2008/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp4/symbol.png",
          "logo": "https://images.pokemontcg.io/dp4/logo.png"
        }
      },
      "number": "3",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "flavorText": "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
      "nationalPokedexNumbers": [
        491
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp4/3.png",
        "large": "https://images.pokemontcg.io/dp4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.01,
            "mid": 6.38,
            "high": 13.24,
            "market": 11.38,
            "directLow": 13.24
          },
          "reverseHolofoil": {
            "low": 3.06,
            "mid": 6.29,
            "high": 10.86,
            "market": 13.58,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8.03,
          "lowPrice": 0.5,
          "trendPrice": 3.89,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.45,
          "reverseHoloLow": 0.7,
          "reverseHoloTrend": 4.55,
          "lowPriceExPlus": 1.7,
          "avg1": 1.75,
          "avg7": 6.82,
          "avg30": 4.44,
          "reverseHoloAvg1": 5.9,
          "reverseHoloAvg7": 5.52,
          "reverseHoloAvg30": 3.89
        }
      }
    },
    {
      "id": "dp3-5",
      "name": "Flygon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "60",
      "hp": "120",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Vibrava",
      "abilities": [
        {
          "name": "Irritating Buzz",
          "text": "As long as Flygon is your Active Pokémon, put 1 damage counter on each of your opponent's Active Pokémon between turns, excluding Fighting Pokémon.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Sand Sonic",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60+",
          "text": "If you attach a Fighting Energy card from your hand to Flygon during this turn, this attack does 60 damage plus 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "+30"
        }
      ],
      "resistances": [
        {
          "type": "Lightning",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dp3",
        "name": "Secret Wonders",
        "series": "Diamond & Pearl",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "SW",
        "releaseDate": "2007/11/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp3/symbol.png",
          "logo": "https://images.pokemontcg.io/dp3/logo.png"
        }
      },
      "number": "5",
      "artist": "Daisuke Ito",
      "rarity": "Rare Holo",
      "flavorText": "It whips up sandstorms with powerful flaps of its wings. It is known as \"The Desert Spirit.\"",
      "nationalPokedexNumbers": [
        330
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp3/5.png",
        "large": "https://images.pokemontcg.io/dp3/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp3-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.9,
            "mid": 9.39,
            "high": 13.62,
            "market": 10.14,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.95,
            "mid": 4.19,
            "high": 5.66,
            "market": 5.55,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp3-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.43,
          "lowPrice": 0.34,
          "trendPrice": 1.54,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.34,
          "reverseHoloTrend": 2.32,
          "lowPriceExPlus": 1.75,
          "avg1": 0.74,
          "avg7": 1.44,
          "avg30": 2.34,
          "reverseHoloAvg1": 0.99,
          "reverseHoloAvg7": 2.32,
          "reverseHoloAvg30": 2.48
        }
      }
    },
    {
      "id": "bw1-3",
      "name": "Servine",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Snivy",
      "evolvesTo": [
        "Serperior"
      ],
      "attacks": [
        {
          "name": "Wrap",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Tackle",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw1",
        "name": "Black & White",
        "series": "Black & White",
        "printedTotal": 114,
        "total": 115,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BLW",
        "releaseDate": "2011/04/25",
        "updatedAt": "2018/11/29 19:56:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw1/symbol.png",
          "logo": "https://images.pokemontcg.io/bw1/logo.png"
        }
      },
      "number": "3",
      "artist": "Kagemaru Himeno",
      "rarity": "Uncommon",
      "flavorText": "They avoid attacks by sinking into the shadows of thick foliage. They retaliate with masterful whipping techniques.",
      "nationalPokedexNumbers": [
        496
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw1/3.png",
        "large": "https://images.pokemontcg.io/bw1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.14,
            "mid": 0.29,
            "high": 1.42,
            "market": 0.35,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.69,
            "mid": 1.14,
            "high": 2.14,
            "market": 1.91,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.25,
          "lowPrice": 0.02,
          "trendPrice": 0.18,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.12,
          "reverseHoloTrend": 2.46,
          "lowPriceExPlus": 0.03,
          "avg1": 0.21,
          "avg7": 0.23,
          "avg30": 0.23,
          "reverseHoloAvg1": 4.59,
          "reverseHoloAvg7": 2.22,
          "reverseHoloAvg30": 1.58
        }
      }
    },
    {
      "id": "ecard2-H5",
      "name": "Bellossom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "90",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Gloom",
      "abilities": [
        {
          "name": "Flower Supplement",
          "text": "Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Knife Leaf",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30×",
          "text": "Flip 3 coins. This attack does 30 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ecard2",
        "name": "Aquapolis",
        "series": "E-Card",
        "printedTotal": 147,
        "total": 182,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "AQ",
        "releaseDate": "2003/01/15",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ecard2/symbol.png",
          "logo": "https://images.pokemontcg.io/ecard2/logo.png"
        }
      },
      "number": "H5",
      "artist": "Sumiyoshi Kizuki",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        182
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ecard2/H5.png",
        "large": "https://images.pokemontcg.io/ecard2/H5_hires.png"
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ecard2-H5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 14.9,
          "lowPrice": 4.77,
          "trendPrice": 21.91,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 21.52,
          "lowPriceExPlus": 8.5,
          "avg1": 15.5,
          "avg7": 18.66,
          "avg30": 22.56,
          "reverseHoloAvg1": 7,
          "reverseHoloAvg7": 24.41,
          "reverseHoloAvg30": 14.83
        }
      }
    },
    {
      "id": "pop1-3",
      "name": "Rayquaza",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Fly",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Rayquaza during your opponent's next turn."
        },
        {
          "name": "Dragon Claw",
          "cost": [
            "Fire",
            "Lightning"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop1",
        "name": "POP Series 1",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2004/09/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop1/symbol.png",
          "logo": "https://images.pokemontcg.io/pop1/logo.png"
        }
      },
      "number": "3",
      "artist": "Katsura Tabata",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        384
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop1/3.png",
        "large": "https://images.pokemontcg.io/pop1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 10.42,
            "mid": 10.7,
            "high": 12.81,
            "market": 10.78,
            "directLow": null
          },
          "holofoil": {
            "low": 6.18,
            "mid": 8.49,
            "high": 39.99,
            "market": 13.73,
            "directLow": 7.4
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 5,
          "trendPrice": 16.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 11.95,
          "lowPriceExPlus": 18.81,
          "avg1": 13.99,
          "avg7": 21.06,
          "avg30": 23.99,
          "reverseHoloAvg1": 9,
          "reverseHoloAvg7": 23.17,
          "reverseHoloAvg30": 11.27
        }
      }
    },
    {
      "id": "gym2-4",
      "name": "Erika's Venusaur",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "45",
      "hp": "90",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Erika's Ivysaur",
      "attacks": [
        {
          "name": "Growth",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Erika's Venusaur."
        },
        {
          "name": "Wide Solarbeam",
          "cost": [
            "Grass",
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 4,
          "damage": "20",
          "text": "If your opponent has any Benched Pokémon, choose 2 of them (or 1 if he or she only has 1). This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "gym2",
        "name": "Gym Challenge",
        "series": "Gym",
        "printedTotal": 132,
        "total": 132,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "G2",
        "releaseDate": "2000/10/16",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/gym2/symbol.png",
          "logo": "https://images.pokemontcg.io/gym2/logo.png"
        }
      },
      "number": "4",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        3
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/gym2/4.png",
        "large": "https://images.pokemontcg.io/gym2/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/gym2-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 160.18,
            "mid": 161.4,
            "high": 270,
            "market": 179.4,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 63.29,
            "mid": 96.47,
            "high": 200,
            "market": 97.53,
            "directLow": 200
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/gym2-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 61.8,
          "lowPrice": 23,
          "trendPrice": 65.41,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 55.62,
          "lowPriceExPlus": 46.99,
          "avg1": 109.99,
          "avg7": 65.98,
          "avg30": 58.77,
          "reverseHoloAvg1": 60,
          "reverseHoloAvg7": 45.62,
          "reverseHoloAvg30": 61.54
        }
      }
    },
    {
      "id": "xy4-3",
      "name": "Yanma",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Yanmega"
      ],
      "attacks": [
        {
          "name": "Air Slash",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Discard an Energy attached to this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy4",
        "name": "Phantom Forces",
        "series": "XY",
        "printedTotal": 119,
        "total": 124,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PHF",
        "releaseDate": "2014/11/05",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy4/symbol.png",
          "logo": "https://images.pokemontcg.io/xy4/logo.png"
        }
      },
      "number": "3",
      "artist": "Shin Nagasawa",
      "rarity": "Common",
      "flavorText": "Its eyes can see 360 degrees without moving its head. It won't miss prey—even those behind it.",
      "nationalPokedexNumbers": [
        193
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy4/3.png",
        "large": "https://images.pokemontcg.io/xy4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.02,
            "mid": 0.17,
            "high": 2,
            "market": 0.11,
            "directLow": 0.05
          },
          "reverseHolofoil": {
            "low": 0.15,
            "mid": 0.36,
            "high": 1.95,
            "market": 0.36,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.11,
          "lowPrice": 0.02,
          "trendPrice": 0.11,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.33,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.41,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.09,
          "avg30": 0.08,
          "reverseHoloAvg1": 0.4,
          "reverseHoloAvg7": 0.34,
          "reverseHoloAvg30": 0.29
        }
      }
    },
    {
      "id": "ex10-2",
      "name": "Ariados",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Spinarak",
      "attacks": [
        {
          "name": "Reactive Poison",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Does 10 damage plus 30 more damage for each Special Condition affecting the Defending Pokémon."
        },
        {
          "name": "Spider Trap",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "The Defending Pokémon is now Asleep and Poisoned. Before applying this effect, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, the new Defending Pokémon is now Asleep and Poisoned. Your opponent chooses the Defending Pokémon to switch."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex10",
        "name": "Unseen Forces",
        "series": "EX",
        "printedTotal": 115,
        "total": 145,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "UF",
        "releaseDate": "2005/08/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex10/symbol.png",
          "logo": "https://images.pokemontcg.io/ex10/logo.png"
        }
      },
      "number": "2",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        168
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex10/2.png",
        "large": "https://images.pokemontcg.io/ex10/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex10-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 5.62,
            "mid": 7.83,
            "high": 60,
            "market": 7.35,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.8,
            "mid": 8.7,
            "high": 999,
            "market": 12.24,
            "directLow": 8.85
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex10-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.32,
          "lowPrice": 1,
          "trendPrice": 5.5,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 12.41,
          "reverseHoloLow": 1.4,
          "reverseHoloTrend": 16.44,
          "lowPriceExPlus": 2.8,
          "avg1": 3.5,
          "avg7": 6.28,
          "avg30": 4.6,
          "reverseHoloAvg1": 9.95,
          "reverseHoloAvg7": 16.2,
          "reverseHoloAvg30": 13.4
        }
      }
    },
    {
      "id": "xy7-4",
      "name": "Bellossom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Gloom",
      "attacks": [
        {
          "name": "Windmill",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Switch this Pokémon with 1 of your Benched Pokémon."
        },
        {
          "name": "Flower Tornado",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "60",
          "text": "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy7",
        "name": "Ancient Origins",
        "series": "XY",
        "printedTotal": 98,
        "total": 100,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "AOR",
        "releaseDate": "2015/08/12",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy7/symbol.png",
          "logo": "https://images.pokemontcg.io/xy7/logo.png"
        }
      },
      "number": "4",
      "artist": "Mizue",
      "rarity": "Uncommon",
      "flavorText": "When the heavy rainfall season ends, it is drawn out by warm sunlight to dance in the open.",
      "nationalPokedexNumbers": [
        182
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy7/4.png",
        "large": "https://images.pokemontcg.io/xy7/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy7-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.25,
            "high": 5.44,
            "market": 0.25,
            "directLow": 0.25
          },
          "reverseHolofoil": {
            "low": 0.13,
            "mid": 0.42,
            "high": 2.81,
            "market": 0.4,
            "directLow": 0.5
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy7-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.19,
          "lowPrice": 0.02,
          "trendPrice": 0.18,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.29,
          "reverseHoloLow": 0.12,
          "reverseHoloTrend": 0.68,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.22,
          "avg30": 0.17,
          "reverseHoloAvg1": 0.25,
          "reverseHoloAvg7": 0.68,
          "reverseHoloAvg30": 0.87
        }
      }
    },
    {
      "id": "pl1-5",
      "name": "Dialga",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "72",
      "hp": "100",
      "types": [
        "Metal"
      ],
      "abilities": [
        {
          "name": "Reverse Time",
          "text": "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order.",
          "type": "Poké-Power"
        }
      ],
      "attacks": [
        {
          "name": "Time-Space Traveling",
          "cost": [
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Draw cards until you have 7 cards in your hand."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "pl1",
        "name": "Platinum",
        "series": "Platinum",
        "printedTotal": 127,
        "total": 133,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PL",
        "releaseDate": "2009/02/11",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
          "logo": "https://images.pokemontcg.io/pl1/logo.png"
        }
      },
      "number": "5",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
      "nationalPokedexNumbers": [
        483
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl1/5.png",
        "large": "https://images.pokemontcg.io/pl1/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.89,
            "mid": 9,
            "high": 39.97,
            "market": 9.27,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 2.98,
            "mid": 5.34,
            "high": 8.75,
            "market": 6.44,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.74,
          "lowPrice": 0.5,
          "trendPrice": 3.36,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 4.12,
          "reverseHoloLow": 1,
          "reverseHoloTrend": 4.24,
          "lowPriceExPlus": 1,
          "avg1": 4,
          "avg7": 2.93,
          "avg30": 3.43,
          "reverseHoloAvg1": 4,
          "reverseHoloAvg7": 5.1,
          "reverseHoloAvg30": 3.28
        }
      }
    },
    {
      "id": "pop3-3",
      "name": "Jolteon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Eevee",
      "attacks": [
        {
          "name": "Thundershock",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Pin Missile",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "20×",
          "text": "Flip 4 coins. This attack does 20 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-30"
        }
      ],
      "set": {
        "id": "pop3",
        "name": "POP Series 3",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2006/04/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop3/symbol.png",
          "logo": "https://images.pokemontcg.io/pop3/logo.png"
        }
      },
      "number": "3",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare",
      "nationalPokedexNumbers": [
        135
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop3/3.png",
        "large": "https://images.pokemontcg.io/pop3/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 1.6,
            "mid": 3.85,
            "high": 5.4,
            "market": 4.85,
            "directLow": null
          },
          "holofoil": {
            "low": 3.61,
            "mid": 4.16,
            "high": 11.72,
            "market": 8.3,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 49.99,
          "lowPrice": 3.5,
          "trendPrice": 19.48,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 4.8,
          "reverseHoloTrend": 10.88,
          "lowPriceExPlus": 7.5,
          "avg1": 19.99,
          "avg7": 15.91,
          "avg30": 12.76,
          "reverseHoloAvg1": 7.99,
          "reverseHoloAvg7": 9.64,
          "reverseHoloAvg30": 12.52
        }
      }
    },
    {
      "id": "ex8-3",
      "name": "Breloom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Shroomish",
      "attacks": [
        {
          "name": "Leaf Poison",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "If Breloom has any Grass Energy attached to it, the Defending Pokémon is now Poisoned."
        },
        {
          "name": "Hustle Punch",
          "cost": [
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70-",
          "text": "During your next turn, Hustle Punch attack's base damage is 50 instead of 70."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "ex8",
        "name": "Deoxys",
        "series": "EX",
        "printedTotal": 107,
        "total": 108,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DX",
        "releaseDate": "2005/02/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex8/symbol.png",
          "logo": "https://images.pokemontcg.io/ex8/logo.png"
        }
      },
      "number": "3",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        286
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex8/3.png",
        "large": "https://images.pokemontcg.io/ex8/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex8-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 13.64,
            "mid": 20.5,
            "high": 29.99,
            "market": 19.22,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 5.7,
            "mid": 7.44,
            "high": 14.5,
            "market": 10.47,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex8-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 11.34,
          "lowPrice": 0.8,
          "trendPrice": 9.06,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7.28,
          "reverseHoloLow": 1.4,
          "reverseHoloTrend": 8.53,
          "lowPriceExPlus": 3.99,
          "avg1": 1.48,
          "avg7": 9.38,
          "avg30": 6.84,
          "reverseHoloAvg1": 12.56,
          "reverseHoloAvg7": 9.43,
          "reverseHoloAvg30": 8.06
        }
      }
    },
    {
      "id": "basep-2",
      "name": "Electabuzz",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "20",
      "hp": "60",
      "types": [
        "Lightning"
      ],
      "evolvesTo": [
        "Electivire"
      ],
      "attacks": [
        {
          "name": "Light Screen",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Whenever an attack does damage to Electabuzz (after applying Weakness and Resistance) during your opponent's next turn, that attack only does half the damage to Electabuzz (rounded down to the nearest 10). (Any other effects of attacks still happen.)"
        },
        {
          "name": "Quick Attack",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10+",
          "text": "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "basep",
        "name": "Wizards Black Star Promos",
        "series": "Base",
        "printedTotal": 53,
        "total": 53,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR",
        "releaseDate": "1999/07/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/basep/symbol.png",
          "logo": "https://images.pokemontcg.io/basep/logo.png"
        }
      },
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Promo",
      "flavorText": "A wild Pokémon with a short temper. It is able to distinguish colors, and likes the color red.",
      "nationalPokedexNumbers": [
        125
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/basep/2.png",
        "large": "https://images.pokemontcg.io/basep/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/basep-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 1,
            "mid": 3,
            "high": 8.91,
            "market": 3.27,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/basep-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.71,
          "lowPrice": 0.05,
          "trendPrice": 4.14,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.72,
          "lowPriceExPlus": 1.8,
          "avg1": 2.18,
          "avg7": 3.87,
          "avg30": 2.59,
          "reverseHoloAvg1": 8,
          "reverseHoloAvg7": 4.48,
          "reverseHoloAvg30": 3.79
        }
      }
    },
    {
      "id": "base6-3",
      "name": "Charizard",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "76",
      "hp": "120",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Charmeleon",
      "abilities": [
        {
          "name": "Energy Burn",
          "text": "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Fire Spin",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard 2 Energy cards attached to Charizard or this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base6",
        "name": "Legendary Collection",
        "series": "Other",
        "printedTotal": 110,
        "total": 110,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "LC",
        "releaseDate": "2002/05/24",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base6/symbol.png",
          "logo": "https://images.pokemontcg.io/base6/logo.png"
        }
      },
      "number": "3",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "flavorText": "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
      "nationalPokedexNumbers": [
        6
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base6/3.png",
        "large": "https://images.pokemontcg.io/base6/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base6-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 199.75,
            "mid": 210,
            "high": 337.8,
            "market": 357.42,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 700,
            "mid": 874.88,
            "high": 5000.22,
            "market": 375.49,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base6-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 96,
          "lowPrice": 24.99,
          "trendPrice": 112.64,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 415,
          "reverseHoloLow": 100,
          "reverseHoloTrend": 1095.44,
          "lowPriceExPlus": 86.74,
          "avg1": 110,
          "avg7": 104.28,
          "avg30": 94.97,
          "reverseHoloAvg1": 415,
          "reverseHoloAvg7": 1160,
          "reverseHoloAvg30": 787.63
        }
      }
    },
    {
      "id": "bw4-3",
      "name": "Kricketot",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kricketune"
      ],
      "attacks": [
        {
          "name": "Beat",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Double Headbutt",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "10+",
          "text": "Flip 2 coins. This attack does 10 more damage for each heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw4",
        "name": "Next Destinies",
        "series": "Black & White",
        "printedTotal": 99,
        "total": 103,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "NXD",
        "releaseDate": "2012/02/08",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw4/symbol.png",
          "logo": "https://images.pokemontcg.io/bw4/logo.png"
        }
      },
      "number": "3",
      "artist": "MAHOU",
      "rarity": "Common",
      "flavorText": "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.",
      "nationalPokedexNumbers": [
        401
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw4/3.png",
        "large": "https://images.pokemontcg.io/bw4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.06,
            "mid": 0.24,
            "high": 1.36,
            "market": 0.24,
            "directLow": 0.1
          },
          "reverseHolofoil": {
            "low": 0.3,
            "mid": 0.5,
            "high": 0.99,
            "market": 0.37,
            "directLow": 0.5
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.12,
          "lowPrice": 0.02,
          "trendPrice": 0.19,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.19,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.26,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.2,
          "avg30": 0.12,
          "reverseHoloAvg1": 0.19,
          "reverseHoloAvg7": 0.33,
          "reverseHoloAvg30": 0.28
        }
      }
    },
    {
      "id": "hgss2-2",
      "name": "Magmortar",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "110",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Magmar",
      "attacks": [
        {
          "name": "Hard Crush",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50×",
          "text": "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded."
        },
        {
          "name": "Mantle Bazooka",
          "cost": [
            "Fire",
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard 2 Fire Energy attached to Magmortar."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "hgss2",
        "name": "HS—Unleashed",
        "series": "HeartGold & SoulSilver",
        "printedTotal": 95,
        "total": 96,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "UL",
        "releaseDate": "2010/05/12",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/hgss2/symbol.png",
          "logo": "https://images.pokemontcg.io/hgss2/logo.png"
        }
      },
      "number": "2",
      "artist": "Hajime Kusajima",
      "rarity": "Rare Holo",
      "flavorText": "It blasts fireballs of over 3,600 degrees Fahrenheit out of its arms. Its breath also sears and sizzles.",
      "nationalPokedexNumbers": [
        467
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/hgss2/2.png",
        "large": "https://images.pokemontcg.io/hgss2/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/hgss2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.04,
            "mid": 2,
            "high": 4.35,
            "market": 2.21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1,
            "mid": 2.95,
            "high": 3.99,
            "market": 3.09,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/hgss2-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.68,
          "lowPrice": 0.1,
          "trendPrice": 1.15,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.55,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 1.83,
          "lowPriceExPlus": 0.7,
          "avg1": 1.45,
          "avg7": 1.48,
          "avg30": 1.94,
          "reverseHoloAvg1": 2.99,
          "reverseHoloAvg7": 2.34,
          "reverseHoloAvg30": 2.57
        }
      }
    },
    {
      "id": "bw11-3",
      "name": "Shuckle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Share",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal 40 damage from 1 of your Benched Pokémon."
        },
        {
          "name": "Double Stab",
          "cost": [
            "Grass",
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40×",
          "text": "Flip 2 coins. This attack does 40 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "bw11",
        "name": "Legendary Treasures",
        "series": "Black & White",
        "printedTotal": 113,
        "total": 140,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "LTR",
        "releaseDate": "2013/11/06",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw11/symbol.png",
          "logo": "https://images.pokemontcg.io/bw11/logo.png"
        }
      },
      "number": "3",
      "artist": "MAHOU",
      "rarity": "Uncommon",
      "flavorText": "The berries stored in its vaselike shell eventually become a thick, pulpy juice.",
      "nationalPokedexNumbers": [
        213
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw11/3.png",
        "large": "https://images.pokemontcg.io/bw11/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw11-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.57,
            "mid": 0.85,
            "high": 1.99,
            "market": 0.98,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 6.97,
            "mid": 9.9,
            "high": 13.89,
            "market": 11.51,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw11-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.4,
          "lowPrice": 0.3,
          "trendPrice": 0.37,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 5.5,
          "reverseHoloTrend": 5.38,
          "lowPriceExPlus": 0.3,
          "avg1": 0.4,
          "avg7": 0.35,
          "avg30": 0.42,
          "reverseHoloAvg1": 6.5,
          "reverseHoloAvg7": 4.21,
          "reverseHoloAvg30": 2.5
        }
      }
    },
    {
      "id": "pop7-4",
      "name": "Latios",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "47",
      "hp": "90",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Energy Draw",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward."
        },
        {
          "name": "Luster Purge",
          "cost": [
            "Grass",
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "120",
          "text": "Discard 3 Energy attached to Latios."
        }
      ],
      "weaknesses": [
        {
          "type": "Colorless",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pop7",
        "name": "POP Series 7",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2008/03/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop7/symbol.png",
          "logo": "https://images.pokemontcg.io/pop7/logo.png"
        }
      },
      "number": "4",
      "artist": "Daisuke Ito",
      "rarity": "Rare",
      "flavorText": "A highly intelligent Pokémon. By folding back its wings in flight, it can overtake jet planes.",
      "nationalPokedexNumbers": [
        381
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop7/4.png",
        "large": "https://images.pokemontcg.io/pop7/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop7-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 2.58,
            "mid": 5.75,
            "high": 8.74,
            "market": 6.44,
            "directLow": null
          },
          "holofoil": {
            "low": 0.94,
            "mid": 2.33,
            "high": 13.14,
            "market": 11.79,
            "directLow": 2.69
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop7-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 4.75,
          "lowPrice": 0.4,
          "trendPrice": 4.73,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 7,
          "reverseHoloLow": 1.5,
          "reverseHoloTrend": 5.95,
          "lowPriceExPlus": 2.49,
          "avg1": 5.6,
          "avg7": 4.33,
          "avg30": 4.01,
          "reverseHoloAvg1": 7,
          "reverseHoloAvg7": 5.79,
          "reverseHoloAvg30": 3.6
        }
      }
    },
    {
      "id": "ru1-4",
      "name": "Heatran",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "110",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Heat Boiler",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60+",
          "text": "If the Defending Pokémon is a Water Pokémon, this attack does 60 damage plus 40 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "ru1",
        "name": "Pokémon Rumble",
        "series": "Other",
        "printedTotal": 16,
        "total": 16,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/12/02",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ru1/symbol.png",
          "logo": "https://images.pokemontcg.io/ru1/logo.png"
        }
      },
      "number": "4",
      "artist": "Pokemon Rumble",
      "nationalPokedexNumbers": [
        485
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ru1/4.png",
        "large": "https://images.pokemontcg.io/ru1/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ru1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 9.42,
            "mid": 10.75,
            "high": 30,
            "market": 13.59,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ru1-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 3.99,
          "lowPrice": 5,
          "trendPrice": 7.5,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 9.53,
          "lowPriceExPlus": 8.99,
          "avg1": 3.99,
          "avg7": 8.64,
          "avg30": 8.87,
          "reverseHoloAvg1": 10,
          "reverseHoloAvg7": 5.31,
          "reverseHoloAvg30": 5.31
        }
      }
    },
    {
      "id": "neo3-2",
      "name": "Blissey",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "62",
      "hp": "120",
      "types": [
        "Colorless"
      ],
      "evolvesFrom": "Chansey",
      "abilities": [
        {
          "name": "Softboiled",
          "text": "When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Body Slam",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "neo3",
        "name": "Neo Revelation",
        "series": "Neo",
        "printedTotal": 64,
        "total": 66,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "N3",
        "releaseDate": "2001/09/21",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/neo3/symbol.png",
          "logo": "https://images.pokemontcg.io/neo3/logo.png"
        }
      },
      "number": "2",
      "artist": "Yuka Morii",
      "rarity": "Rare Holo",
      "flavorText": "Anyone who takes even one bite of Blissey's egg becomes unfailingly caring and pleasant to everyone.",
      "nationalPokedexNumbers": [
        242
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/neo3/2.png",
        "large": "https://images.pokemontcg.io/neo3/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/neo3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 61.7,
            "mid": 79.25,
            "high": 80.97,
            "market": 61.45,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 20.3,
            "mid": 32.25,
            "high": 44.99,
            "market": 34.06,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/neo3-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 22.57,
          "lowPrice": 2,
          "trendPrice": 27.37,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 11.84,
          "lowPriceExPlus": 9.98,
          "avg1": 21,
          "avg7": 25.97,
          "avg30": 16.92,
          "reverseHoloAvg1": 6.45,
          "reverseHoloAvg7": 13.8,
          "reverseHoloAvg30": 16.97
        }
      }
    },
    {
      "id": "mcd19-5",
      "name": "Lapras",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "120",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "cost": [
            "Water"
          ],
          "name": "Aqua Bullet",
          "text": "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
          "damage": "20",
          "convertedEnergyCost": 1
        },
        {
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "name": "Hydro Pump",
          "text": "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.",
          "damage": "70+",
          "convertedEnergyCost": 3
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "mcd19",
        "name": "McDonald's Collection 2019",
        "series": "Other",
        "printedTotal": 12,
        "total": 12,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "releaseDate": "2019/10/15",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/mcd19/symbol.png",
          "logo": "https://images.pokemontcg.io/mcd19/logo.png"
        }
      },
      "number": "5",
      "artist": "Saya Tsuruta",
      "flavorText": "These Pokémon were once near extinction due to poaching. Following protective regulations, there is now an overabundance of them.",
      "nationalPokedexNumbers": [
        131
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/mcd19/5.png",
        "large": "https://images.pokemontcg.io/mcd19/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/mcd19-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 5.16,
            "mid": 8,
            "high": 30,
            "market": 10.9,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/mcd19-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.03,
          "lowPrice": 0.3,
          "trendPrice": 2.65,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 3.7,
          "lowPriceExPlus": 1.65,
          "avg1": 1.5,
          "avg7": 2.21,
          "avg30": 2.46,
          "reverseHoloAvg1": 5.25,
          "reverseHoloAvg7": 3.89,
          "reverseHoloAvg30": 3.37
        }
      }
    },
    {
      "id": "sm8-2",
      "name": "Tangrowth",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "140",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Tangela",
      "attacks": [
        {
          "name": "Hefty Whip",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30+",
          "text": "If this Pokémon was healed during this turn, this attack does 130 more damage."
        },
        {
          "name": "Whip Smash",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "110",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "sm8",
        "name": "Lost Thunder",
        "series": "Sun & Moon",
        "printedTotal": 214,
        "total": 240,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "LOT",
        "releaseDate": "2018/11/02",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm8/symbol.png",
          "logo": "https://images.pokemontcg.io/sm8/logo.png"
        }
      },
      "number": "2",
      "artist": "Atsuko Nishida",
      "rarity": "Rare",
      "flavorText": "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
      "nationalPokedexNumbers": [
        465
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm8/2.png",
        "large": "https://images.pokemontcg.io/sm8/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm8-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.25,
            "high": 0.99,
            "market": 0.24,
            "directLow": 0.24
          },
          "reverseHolofoil": {
            "low": 0.27,
            "mid": 0.49,
            "high": 1.27,
            "market": 0.43,
            "directLow": 0.44
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm8-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.36,
          "lowPrice": 0.03,
          "trendPrice": 0.38,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.18,
          "reverseHoloTrend": 0.69,
          "lowPriceExPlus": 0.1,
          "avg1": 0.29,
          "avg7": 0.4,
          "avg30": 0.42,
          "reverseHoloAvg1": 0.15,
          "reverseHoloAvg7": 0.63,
          "reverseHoloAvg30": 0.69
        }
      }
    },
    {
      "id": "sm75-2",
      "name": "Charmeleon",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Charmander",
      "evolvesTo": [
        "Charizard"
      ],
      "abilities": [
        {
          "name": "Burning Fighter",
          "text": "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Flamethrower",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "80",
          "text": "Discard an Energy from this Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "sm75",
        "name": "Dragon Majesty",
        "series": "Sun & Moon",
        "printedTotal": 70,
        "total": 80,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRM",
        "releaseDate": "2018/09/07",
        "updatedAt": "2018/10/01 21:54:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm75/symbol.png",
          "logo": "https://images.pokemontcg.io/sm75/logo.png"
        }
      },
      "number": "2",
      "artist": "kodama",
      "rarity": "Uncommon",
      "flavorText": "When it swings its burning tail, it elevates the air temperature to unbearably high levels.",
      "nationalPokedexNumbers": [
        5
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm75/2.png",
        "large": "https://images.pokemontcg.io/sm75/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm75-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 1.95,
            "mid": 2.9,
            "high": 4.49,
            "market": 2.81,
            "directLow": null
          },
          "normal": {
            "low": 0.45,
            "mid": 0.77,
            "high": 1.72,
            "market": 0.78,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm75-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 1.26,
          "lowPrice": 0.1,
          "trendPrice": 1.84,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 8.68,
          "reverseHoloLow": 0.95,
          "reverseHoloTrend": 5.29,
          "lowPriceExPlus": 0.1,
          "avg1": 2.99,
          "avg7": 1.87,
          "avg30": 0.95,
          "reverseHoloAvg1": 4,
          "reverseHoloAvg7": 5.62,
          "reverseHoloAvg30": 4.51
        }
      }
    },
    {
      "id": "sm9-5",
      "name": "Beedrill",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "130",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Kakuna",
      "attacks": [
        {
          "name": "Destiny Stinger",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "You can use this attack only if this Pokémon has any damage counters on it. Both Active Pokémon are Knocked Out."
        },
        {
          "name": "Reckless Charge",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "90",
          "text": "This Pokémon does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm9",
        "name": "Team Up",
        "series": "Sun & Moon",
        "printedTotal": 181,
        "total": 198,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "TEU",
        "releaseDate": "2019/02/01",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm9/symbol.png",
          "logo": "https://images.pokemontcg.io/sm9/logo.png"
        }
      },
      "number": "5",
      "artist": "You Iribi",
      "rarity": "Rare",
      "flavorText": "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
      "nationalPokedexNumbers": [
        15
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm9/5.png",
        "large": "https://images.pokemontcg.io/sm9/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm9-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.1,
            "mid": 0.34,
            "high": 1,
            "market": 0.34,
            "directLow": 0.24
          },
          "reverseHolofoil": {
            "low": 0.26,
            "mid": 0.48,
            "high": 1.5,
            "market": 0.45,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm9-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.35,
          "lowPrice": 0.07,
          "trendPrice": 0.37,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.5,
          "reverseHoloLow": 0.2,
          "reverseHoloTrend": 0.95,
          "lowPriceExPlus": 0.09,
          "avg1": 0.79,
          "avg7": 0.34,
          "avg30": 0.37,
          "reverseHoloAvg1": 0.5,
          "reverseHoloAvg7": 0.83,
          "reverseHoloAvg30": 0.94
        }
      }
    },
    {
      "id": "bw6-2",
      "name": "Skiploom",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Hoppip",
      "evolvesTo": [
        "Jumpluff"
      ],
      "attacks": [
        {
          "name": "Bullet Seed",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10×",
          "text": "Flip 4 coins. This attack does 10 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "set": {
        "id": "bw6",
        "name": "Dragons Exalted",
        "series": "Black & White",
        "printedTotal": 124,
        "total": 128,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRX",
        "releaseDate": "2012/08/15",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw6/symbol.png",
          "logo": "https://images.pokemontcg.io/bw6/logo.png"
        }
      },
      "number": "2",
      "artist": "Suwama Chiaki",
      "rarity": "Uncommon",
      "flavorText": "It blooms when the weather warms. It floats in the sky to soak up as much sunlight as possible.",
      "nationalPokedexNumbers": [
        188
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw6/2.png",
        "large": "https://images.pokemontcg.io/bw6/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw6-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.15,
            "mid": 0.25,
            "high": 3,
            "market": 0.22,
            "directLow": 0.2
          },
          "reverseHolofoil": {
            "low": 0.25,
            "mid": 0.4,
            "high": 1.67,
            "market": 0.4,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw6-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.21,
          "lowPrice": 0.02,
          "trendPrice": 0.17,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.4,
          "reverseHoloTrend": 0.69,
          "lowPriceExPlus": 0.02,
          "avg1": 0.07,
          "avg7": 0.16,
          "avg30": 0.16,
          "reverseHoloAvg1": 0.5,
          "reverseHoloAvg7": 0.67,
          "reverseHoloAvg30": 0.66
        }
      }
    },
    {
      "id": "neo4-3",
      "name": "Dark Donphan",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "29",
      "hp": "60",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Phanpy",
      "attacks": [
        {
          "name": "Tusk Toss",
          "cost": [
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "If your opponent has any Benched Pokémon, flip a coin. If heads, return the Defending Pokémon and all cards attached to it to your opponent's hand. If tails, your opponent chooses 1 of his or her Benched Pokémon and switches it with the Defending Pokémon."
        },
        {
          "name": "Giant Tusk",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Lightning",
          "value": "-30"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "neo4",
        "name": "Neo Destiny",
        "series": "Neo",
        "printedTotal": 105,
        "total": 113,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "N4",
        "releaseDate": "2002/02/28",
        "updatedAt": "2020/09/25 10:09:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/neo4/symbol.png",
          "logo": "https://images.pokemontcg.io/neo4/logo.png"
        }
      },
      "number": "3",
      "artist": "Shin-ichi Yoshida",
      "rarity": "Rare Holo",
      "flavorText": "The larger its tusks, the higher its status in the herd.",
      "nationalPokedexNumbers": [
        232
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/neo4/3.png",
        "large": "https://images.pokemontcg.io/neo4/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/neo4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "1stEditionHolofoil": {
            "low": 72.97,
            "mid": 114.99,
            "high": 229.99,
            "market": 77.63,
            "directLow": null
          },
          "unlimitedHolofoil": {
            "low": 19.72,
            "mid": 25.49,
            "high": 40.1,
            "market": 34.56,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/neo4-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 27.13,
          "lowPrice": 6,
          "trendPrice": 30.51,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 17.41,
          "lowPriceExPlus": 9.5,
          "avg1": 54.9,
          "avg7": 22.68,
          "avg30": 26.05,
          "reverseHoloAvg1": 6.99,
          "reverseHoloAvg7": 15.93,
          "reverseHoloAvg30": 17.61
        }
      }
    },
    {
      "id": "bw7-3",
      "name": "Vileplume",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Gloom",
      "abilities": [
        {
          "name": "Allergy Panic",
          "text": "Apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Pollen Spray",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": "The Defending Pokémon is now Asleep and Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Water",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "bw7",
        "name": "Boundaries Crossed",
        "series": "Black & White",
        "printedTotal": 149,
        "total": 153,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BCR",
        "releaseDate": "2012/11/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/bw7/symbol.png",
          "logo": "https://images.pokemontcg.io/bw7/logo.png"
        }
      },
      "number": "3",
      "artist": "Shin Nagasawa",
      "rarity": "Rare Holo",
      "flavorText": "Its petals are the largest in the world. As it walks, it scatters extremely allergenic pollen.",
      "nationalPokedexNumbers": [
        45
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/bw7/3.png",
        "large": "https://images.pokemontcg.io/bw7/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/bw7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.4,
            "mid": 1.82,
            "high": 2.32,
            "market": 2.04,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.5,
            "mid": 1.97,
            "high": 3.11,
            "market": 2.12,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/bw7-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.21,
          "lowPrice": 0.5,
          "trendPrice": 1.51,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.6,
          "reverseHoloTrend": 3.85,
          "lowPriceExPlus": 0.5,
          "avg1": 0.8,
          "avg7": 2.3,
          "avg30": 2.29,
          "reverseHoloAvg1": 3,
          "reverseHoloAvg7": 3.67,
          "reverseHoloAvg30": 2.49
        }
      }
    },
    {
      "id": "swsh35-4",
      "name": "Beedrill",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "140",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Kakuna",
      "attacks": [
        {
          "name": "Poison Jab",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "80",
          "text": "Your opponent's Active Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "swsh35",
        "name": "Champion's Path",
        "series": "Sword & Shield",
        "printedTotal": 73,
        "total": 80,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "CPA",
        "releaseDate": "2020/09/25",
        "updatedAt": "2020/10/25 13:45:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/swsh35/symbol.png",
          "logo": "https://images.pokemontcg.io/swsh35/logo.png"
        }
      },
      "number": "4",
      "artist": "Hideki Ishikawa",
      "rarity": "Uncommon",
      "flavorText": "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
      "nationalPokedexNumbers": [
        15
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "regulationMark": "D",
      "images": {
        "small": "https://images.pokemontcg.io/swsh35/4.png",
        "large": "https://images.pokemontcg.io/swsh35/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/swsh35-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 0.01,
            "mid": 0.24,
            "high": 2,
            "market": 0.19,
            "directLow": 0.19
          },
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 1.33,
            "market": 0.07,
            "directLow": 0.03
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/swsh35-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.07,
          "lowPrice": 0.02,
          "trendPrice": 0.07,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.16,
          "reverseHoloLow": 0.05,
          "reverseHoloTrend": 0.18,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.07,
          "avg30": 0.07,
          "reverseHoloAvg1": 0.3,
          "reverseHoloAvg7": 0.17,
          "reverseHoloAvg30": 0.26
        }
      }
    },
    {
      "id": "pop9-3",
      "name": "Raichu",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "level": "39",
      "hp": "90",
      "types": [
        "Lightning"
      ],
      "evolvesFrom": "Pikachu",
      "attacks": [
        {
          "name": "Slam",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 damage times the number of heads."
        },
        {
          "name": "High Volt",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "If Raichu evolved from Pikachu during this turn, this attack's base damage is 100 instead of 60."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop9",
        "name": "POP Series 9",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2009/03/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop9/symbol.png",
          "logo": "https://images.pokemontcg.io/pop9/logo.png"
        }
      },
      "number": "3",
      "artist": "Midori Harada",
      "rarity": "Rare",
      "flavorText": "It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size.",
      "nationalPokedexNumbers": [
        26
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop9/3.png",
        "large": "https://images.pokemontcg.io/pop9/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop9-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 1.5,
            "mid": 6.95,
            "high": 9.14,
            "market": 8.7,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 1.8,
            "mid": 3.05,
            "high": 9.99,
            "market": 5.59,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop9-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 8,
          "lowPrice": 0.75,
          "trendPrice": 8.41,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 19.99,
          "reverseHoloTrend": 11.83,
          "lowPriceExPlus": 6,
          "avg1": 7.99,
          "avg7": 10.19,
          "avg30": 7.92,
          "reverseHoloAvg1": 9.95,
          "reverseHoloAvg7": 12.48,
          "reverseHoloAvg30": 8.68
        }
      }
    },
    {
      "id": "dpp-DP03",
      "name": "Piplup",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "9",
      "hp": "60",
      "types": [
        "Water"
      ],
      "evolvesTo": [
        "Prinplup"
      ],
      "attacks": [
        {
          "name": "Peck",
          "cost": [],
          "convertedEnergyCost": 0,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Water Splash",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20+",
          "text": "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "+10"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dpp",
        "name": "DP Black Star Promos",
        "series": "Diamond & Pearl",
        "printedTotal": 56,
        "total": 56,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR-DPP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dpp/symbol.png",
          "logo": "https://images.pokemontcg.io/dpp/logo.png"
        }
      },
      "number": "DP03",
      "artist": "Atsuko Nishida",
      "rarity": "Promo",
      "flavorText": "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
      "nationalPokedexNumbers": [
        393
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dpp/DP03.png",
        "large": "https://images.pokemontcg.io/dpp/DP03_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dpp-DP03",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.24,
            "mid": 4.97,
            "high": 14.99,
            "market": 7.42,
            "directLow": null
          }
        }
      }
    },
    {
      "id": "xy10-2",
      "name": "Burmy",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "60",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Wormadam"
      ],
      "attacks": [
        {
          "name": "Hang Down",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy10",
        "name": "Fates Collide",
        "series": "XY",
        "printedTotal": 124,
        "total": 129,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FCO",
        "releaseDate": "2016/05/02",
        "updatedAt": "2018/09/03 11:49:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy10/symbol.png",
          "logo": "https://images.pokemontcg.io/xy10/logo.png"
        }
      },
      "number": "2",
      "artist": "Kouki Saitou",
      "rarity": "Common",
      "flavorText": "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
      "nationalPokedexNumbers": [
        412
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy10/2.png",
        "large": "https://images.pokemontcg.io/xy10/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy10-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.08,
            "directLow": 0.04
          },
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.25,
            "high": 3.24,
            "market": 0.18,
            "directLow": 0.19
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy10-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.05,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.4,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.33,
          "lowPriceExPlus": 0.02,
          "avg1": 0.02,
          "avg7": 0.04,
          "avg30": 0.06,
          "reverseHoloAvg1": 0.49,
          "reverseHoloAvg7": 0.31,
          "reverseHoloAvg30": 0.26
        }
      }
    },
    {
      "id": "sm115-4",
      "name": "Paras",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "70",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Parasect"
      ],
      "attacks": [
        {
          "name": "Scratch",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Slash",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm115",
        "name": "Hidden Fates",
        "series": "Sun & Moon",
        "printedTotal": 68,
        "total": 69,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "HIF",
        "releaseDate": "2019/08/23",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm115/symbol.png",
          "logo": "https://images.pokemontcg.io/sm115/logo.png"
        }
      },
      "number": "4",
      "artist": "OOYAMA",
      "rarity": "Common",
      "flavorText": "Whether it's due to a lack of moisture or a lack of nutrients, in Alola the mushrooms on Paras don't grow up quite right.",
      "nationalPokedexNumbers": [
        46
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm115/4.png",
        "large": "https://images.pokemontcg.io/sm115/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm115-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.22,
            "high": 1.45,
            "market": 0.14,
            "directLow": null
          },
          "normal": {
            "low": 0.01,
            "mid": 0.1,
            "high": 2,
            "market": 0.06,
            "directLow": 0.03
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm115-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.04,
          "lowPrice": 0.02,
          "trendPrice": 0.04,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.38,
          "reverseHoloLow": 0.02,
          "reverseHoloTrend": 0.33,
          "lowPriceExPlus": 0.02,
          "avg1": 0.12,
          "avg7": 0.04,
          "avg30": 0.05,
          "reverseHoloAvg1": 0.15,
          "reverseHoloAvg7": 0.24,
          "reverseHoloAvg30": 0.22
        }
      }
    },
    {
      "id": "base1-2",
      "name": "Blastoise",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "52",
      "hp": "100",
      "types": [
        "Water"
      ],
      "evolvesFrom": "Wartortle",
      "abilities": [
        {
          "name": "Rain Dance",
          "text": "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
          "type": "Pokémon Power"
        }
      ],
      "attacks": [
        {
          "name": "Hydro Pump",
          "cost": [
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 3,
          "damage": "40+",
          "text": "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "base1",
        "name": "Base",
        "series": "Base",
        "printedTotal": 102,
        "total": 102,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "BS",
        "releaseDate": "1999/01/09",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base1/symbol.png",
          "logo": "https://images.pokemontcg.io/base1/logo.png"
        }
      },
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
      "nationalPokedexNumbers": [
        9
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/base1/2.png",
        "large": "https://images.pokemontcg.io/base1/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 74.99,
            "mid": 104.59,
            "high": 184.78,
            "market": 123.76,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base1-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 72.09,
          "lowPrice": 15,
          "trendPrice": 97.01,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 73.51,
          "lowPriceExPlus": 50,
          "avg1": 66.64,
          "avg7": 120.29,
          "avg30": 79.85,
          "reverseHoloAvg1": 100,
          "reverseHoloAvg7": 50.43,
          "reverseHoloAvg30": 64.46
        }
      }
    },
    {
      "id": "sm3-3",
      "name": "Butterfree",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "120",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Metapod",
      "attacks": [
        {
          "name": "Bye-Bye Heal",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Heal all damage from all of your Pokémon. Shuffle this Pokémon and all cards attached to it into your deck."
        },
        {
          "name": "Stun Spore",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "sm3",
        "name": "Burning Shadows",
        "series": "Sun & Moon",
        "printedTotal": 147,
        "total": 177,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "BUS",
        "releaseDate": "2017/08/05",
        "updatedAt": "2022/10/11 21:39:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/sm3/symbol.png",
          "logo": "https://images.pokemontcg.io/sm3/logo.png"
        }
      },
      "number": "3",
      "artist": "Shin Nagasawa",
      "rarity": "Rare",
      "flavorText": "Close examination of its large eyes reveals that each eye is composed of a myriad of tiny eyes.",
      "nationalPokedexNumbers": [
        12
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/sm3/3.png",
        "large": "https://images.pokemontcg.io/sm3/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/sm3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.05,
            "mid": 0.25,
            "high": 2.57,
            "market": 0.3,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.11,
            "mid": 0.3,
            "high": 2,
            "market": 0.25,
            "directLow": 0.25
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/sm3-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.24,
          "lowPrice": 0.02,
          "trendPrice": 0.29,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.44,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.42,
          "lowPriceExPlus": 0.02,
          "avg1": 0.7,
          "avg7": 0.21,
          "avg30": 0.21,
          "reverseHoloAvg1": 0.05,
          "reverseHoloAvg7": 0.38,
          "reverseHoloAvg30": 0.5
        }
      }
    },
    {
      "id": "xy2-5",
      "name": "Seedot",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Nuzleaf"
      ],
      "attacks": [
        {
          "name": "Call for Family",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy2",
        "name": "Flashfire",
        "series": "XY",
        "printedTotal": 106,
        "total": 110,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FLF",
        "releaseDate": "2014/05/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy2/symbol.png",
          "logo": "https://images.pokemontcg.io/xy2/logo.png"
        }
      },
      "number": "5",
      "artist": "Naoyo Kimura",
      "rarity": "Common",
      "flavorText": "It attaches itself to a tree branch using the top of its head. Strong winds can sometimes make it fall.",
      "nationalPokedexNumbers": [
        273
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy2/5.png",
        "large": "https://images.pokemontcg.io/xy2/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy2-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.05,
            "mid": 0.22,
            "high": 1.35,
            "market": 0.13,
            "directLow": 0.14
          },
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.32,
            "high": 3.05,
            "market": 0.32,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy2-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.11,
          "lowPrice": 0.02,
          "trendPrice": 0.45,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.08,
          "reverseHoloTrend": 0.19,
          "lowPriceExPlus": 0.02,
          "avg1": 0.1,
          "avg7": 0.11,
          "avg30": 0.2,
          "reverseHoloAvg1": 0.49,
          "reverseHoloAvg7": 0.24,
          "reverseHoloAvg30": 0.33
        }
      }
    },
    {
      "id": "xy1-3",
      "name": "Weedle",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Grass"
      ],
      "evolvesTo": [
        "Kakuna"
      ],
      "attacks": [
        {
          "name": "Leaf Munch",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 20 more damage."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy1",
        "name": "XY",
        "series": "XY",
        "printedTotal": 146,
        "total": 146,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "XY",
        "releaseDate": "2014/02/05",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy1/symbol.png",
          "logo": "https://images.pokemontcg.io/xy1/logo.png"
        }
      },
      "number": "3",
      "artist": "Suwama Chiaki",
      "rarity": "Common",
      "flavorText": "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
      "nationalPokedexNumbers": [
        13
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy1/3.png",
        "large": "https://images.pokemontcg.io/xy1/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.09,
            "mid": 0.23,
            "high": 2,
            "market": 0.16,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.1,
            "mid": 0.45,
            "high": 4.05,
            "market": 0.35,
            "directLow": 0.36
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy1-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.08,
          "lowPrice": 0.02,
          "trendPrice": 0.09,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.49,
          "reverseHoloLow": 0.1,
          "reverseHoloTrend": 0.52,
          "lowPriceExPlus": 0.02,
          "avg1": 0.05,
          "avg7": 0.09,
          "avg30": 0.09,
          "reverseHoloAvg1": 0.49,
          "reverseHoloAvg7": 0.51,
          "reverseHoloAvg30": 0.48
        }
      }
    },
    {
      "id": "ex14-2",
      "name": "Blastoise δ",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "110",
      "types": [
        "Fighting",
        "Metal"
      ],
      "evolvesFrom": "Wartortle",
      "rules": [
        "This Pokémon is both Fighting Metal type."
      ],
      "abilities": [
        {
          "name": "Shield Veil",
          "text": "Each of your Active Pokémon has no Weakness.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Enraged Linear Attack",
          "cost": [
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Blastoise to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        },
        {
          "name": "Skull Bash",
          "cost": [
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "ex14",
        "name": "Crystal Guardians",
        "series": "EX",
        "printedTotal": 100,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "CG",
        "releaseDate": "2006/08/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex14/symbol.png",
          "logo": "https://images.pokemontcg.io/ex14/logo.png"
        }
      },
      "number": "2",
      "artist": "Masakazu Fukuda",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        9
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex14/2.png",
        "large": "https://images.pokemontcg.io/ex14/2_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex14-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 42.88,
            "mid": 49.99,
            "high": 75,
            "market": 49.25,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 69.65,
            "mid": 75.95,
            "high": 99.99,
            "market": 85.43,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex14-2",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 27.16,
          "lowPrice": 3,
          "trendPrice": 27.6,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 41.47,
          "reverseHoloLow": 4.99,
          "reverseHoloTrend": 45.06,
          "lowPriceExPlus": 15,
          "avg1": 28.5,
          "avg7": 25.61,
          "avg30": 24.02,
          "reverseHoloAvg1": 60,
          "reverseHoloAvg7": 37.35,
          "reverseHoloAvg30": 36.89
        }
      }
    },
    {
      "id": "det1-5",
      "name": "Charizard",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "hp": "180",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Charmeleon",
      "attacks": [
        {
          "name": "Slash",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "70",
          "text": ""
        },
        {
          "name": "Wild Tackle",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "180",
          "text": "This Pokémon does 50 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "set": {
        "id": "det1",
        "name": "Detective Pikachu",
        "series": "Sun & Moon",
        "printedTotal": 18,
        "total": 18,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DET",
        "releaseDate": "2019/04/05",
        "updatedAt": "2021/09/01 05:37:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/det1/symbol.png",
          "logo": "https://images.pokemontcg.io/det1/logo.png"
        }
      },
      "number": "5",
      "artist": "Framestore",
      "rarity": "Rare Ultra",
      "flavorText": "When expelling a blast of superhot fire, the red flame at the tip of its tail burns more intensely.",
      "nationalPokedexNumbers": [
        6
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/det1/5.png",
        "large": "https://images.pokemontcg.io/det1/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/det1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 4.48,
            "mid": 6.28,
            "high": 19.99,
            "market": 5.79,
            "directLow": 7.59
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/det1-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 7.74,
          "lowPrice": 3.99,
          "trendPrice": 7.9,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 17.65,
          "lowPriceExPlus": 6.5,
          "avg1": 13.99,
          "avg7": 8.21,
          "avg30": 8.4,
          "reverseHoloAvg1": 17.45,
          "reverseHoloAvg7": 18.32,
          "reverseHoloAvg30": 18.7
        }
      }
    },
    {
      "id": "pl1-6",
      "name": "Dialga",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "70",
      "hp": "100",
      "types": [
        "Metal"
      ],
      "abilities": [
        {
          "name": "Time Aura",
          "text": "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon.",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Metal Burn",
          "cost": [
            "Metal",
            "Metal",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard all Metal Energy attached to Dialga."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "pl1",
        "name": "Platinum",
        "series": "Platinum",
        "printedTotal": 127,
        "total": 133,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PL",
        "releaseDate": "2009/02/11",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
          "logo": "https://images.pokemontcg.io/pl1/logo.png"
        }
      },
      "number": "6",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "flavorText": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
      "nationalPokedexNumbers": [
        483
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pl1/6.png",
        "large": "https://images.pokemontcg.io/pl1/6_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pl1-6",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 2.5,
            "mid": 4.79,
            "high": 11.75,
            "market": 5.28,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 3.33,
            "mid": 3.58,
            "high": 8,
            "market": 3.75,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pl1-6",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.96,
          "lowPrice": 0.5,
          "trendPrice": 3.58,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 1.95,
          "reverseHoloLow": 0.5,
          "reverseHoloTrend": 3.28,
          "lowPriceExPlus": 2,
          "avg1": 0.9,
          "avg7": 3.64,
          "avg30": 3.58,
          "reverseHoloAvg1": 1.12,
          "reverseHoloAvg7": 4.57,
          "reverseHoloAvg30": 3.02
        }
      }
    },
    {
      "id": "dpp-DP04",
      "name": "Pachirisu",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "23",
      "hp": "70",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Minor Errand-Running",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
        },
        {
          "name": "Thunder Jolt",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": "Flip a coin. If tails, Pachirisu does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Metal",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dpp",
        "name": "DP Black Star Promos",
        "series": "Diamond & Pearl",
        "printedTotal": 56,
        "total": 56,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "PR-DPP",
        "releaseDate": "2007/05/01",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dpp/symbol.png",
          "logo": "https://images.pokemontcg.io/dpp/logo.png"
        }
      },
      "number": "DP04",
      "artist": "Atsuko Nishida",
      "rarity": "Promo",
      "flavorText": "It makes fur balls that crackle with static electricity. It stores them with berries in tree holes.",
      "nationalPokedexNumbers": [
        417
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dpp/DP04.png",
        "large": "https://images.pokemontcg.io/dpp/DP04_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dpp-DP04",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.39,
            "mid": 1.84,
            "high": 5,
            "market": 2.15,
            "directLow": 1.24
          }
        }
      }
    },
    {
      "id": "xy5-5",
      "name": "Tangrowth",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "130",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Tangela",
      "attacks": [
        {
          "name": "Mega Drain",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Heal 20 damage from this Pokémon."
        },
        {
          "name": "Grass Knot",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80+",
          "text": "This attack does 10 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 4,
      "set": {
        "id": "xy5",
        "name": "Primal Clash",
        "series": "XY",
        "printedTotal": 160,
        "total": 164,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "PRC",
        "releaseDate": "2015/02/04",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy5/symbol.png",
          "logo": "https://images.pokemontcg.io/xy5/logo.png"
        }
      },
      "number": "5",
      "artist": "MAHOU",
      "rarity": "Rare",
      "flavorText": "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
      "nationalPokedexNumbers": [
        465
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy5/5.png",
        "large": "https://images.pokemontcg.io/xy5/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy5-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.09,
            "mid": 0.28,
            "high": 2.01,
            "market": 0.21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 0.15,
            "mid": 0.45,
            "high": 2,
            "market": 0.38,
            "directLow": 0.69
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy5-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.33,
          "lowPrice": 0.02,
          "trendPrice": 0.34,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.3,
          "reverseHoloTrend": 0.64,
          "lowPriceExPlus": 0.02,
          "avg1": 0.39,
          "avg7": 0.33,
          "avg30": 0.33,
          "reverseHoloAvg1": 0.61,
          "reverseHoloAvg7": 0.6,
          "reverseHoloAvg30": 0.64
        }
      }
    },
    {
      "id": "pop6-5",
      "name": "Rampardos",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "level": "48",
      "hp": "120",
      "types": [
        "Fighting"
      ],
      "evolvesFrom": "Cranidos",
      "attacks": [
        {
          "name": "Assurance",
          "cost": [
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "As long as the Defending Pokémon's remaining HP is 60 or less, this attack's base damage is 60 instead of 30."
        },
        {
          "name": "Hasty Headbutt",
          "cost": [
            "Fighting",
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 3,
          "damage": "100",
          "text": "Rampardos does 20 damage to itself. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "+30"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "pop6",
        "name": "POP Series 6",
        "series": "POP",
        "printedTotal": 17,
        "total": 17,
        "legalities": {
          "unlimited": "Legal"
        },
        "releaseDate": "2007/09/01",
        "updatedAt": "2020/05/01 16:06:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/pop6/symbol.png",
          "logo": "https://images.pokemontcg.io/pop6/logo.png"
        }
      },
      "number": "5",
      "artist": "Kazuyuki Kano",
      "rarity": "Rare",
      "flavorText": "Its powerful head butt has enough power to shatter even the most durable things upon impact.",
      "nationalPokedexNumbers": [
        409
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/pop6/5.png",
        "large": "https://images.pokemontcg.io/pop6/5_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/pop6-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.85,
            "mid": 1.15,
            "high": 1.5,
            "market": 0.95,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/pop6-5",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.49,
          "lowPrice": 0.09,
          "trendPrice": 1.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 0,
          "lowPriceExPlus": 0.59,
          "avg1": 0.49,
          "avg7": 0.83,
          "avg30": 1.13,
          "reverseHoloAvg1": 0,
          "reverseHoloAvg7": 0,
          "reverseHoloAvg30": 0
        }
      }
    },
    {
      "id": "xy2-6",
      "name": "Nuzleaf",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Grass"
      ],
      "evolvesFrom": "Seedot",
      "evolvesTo": [
        "Shiftry"
      ],
      "attacks": [
        {
          "name": "Razor Leaf",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Cut",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "xy2",
        "name": "Flashfire",
        "series": "XY",
        "printedTotal": 106,
        "total": 110,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "FLF",
        "releaseDate": "2014/05/07",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/xy2/symbol.png",
          "logo": "https://images.pokemontcg.io/xy2/logo.png"
        }
      },
      "number": "6",
      "artist": "Midori Harada",
      "rarity": "Uncommon",
      "flavorText": "The sound of its grass flute makes its listeners uneasy. It lives deep in forests.",
      "nationalPokedexNumbers": [
        274
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/xy2/6.png",
        "large": "https://images.pokemontcg.io/xy2/6_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/xy2-6",
        "updatedAt": "2024/07/22",
        "prices": {
          "normal": {
            "low": 0.04,
            "mid": 0.22,
            "high": 1.4,
            "market": 0.15,
            "directLow": 0.1
          },
          "reverseHolofoil": {
            "low": 0.21,
            "mid": 0.5,
            "high": 1.95,
            "market": 0.39,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/xy2-6",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0.1,
          "lowPrice": 0.02,
          "trendPrice": 0.12,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0.49,
          "reverseHoloLow": 0.15,
          "reverseHoloTrend": 0.75,
          "lowPriceExPlus": 0.02,
          "avg1": 0.25,
          "avg7": 0.11,
          "avg30": 0.11,
          "reverseHoloAvg1": 0.49,
          "reverseHoloAvg7": 0.57,
          "reverseHoloAvg30": 0.62
        }
      }
    },
    {
      "id": "ex14-3",
      "name": "Camerupt",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "80",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Numel",
      "abilities": [
        {
          "name": "Delta Protection",
          "text": "Any damage done to Camerupt by attacks from your opponent's Pokémon that has δ on its card is reduced by 40 (after applying Weakness and Resistance).",
          "type": "Poké-Body"
        }
      ],
      "attacks": [
        {
          "name": "Linear Attack",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        },
        {
          "name": "Combustion",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex14",
        "name": "Crystal Guardians",
        "series": "EX",
        "printedTotal": 100,
        "total": 100,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "CG",
        "releaseDate": "2006/08/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex14/symbol.png",
          "logo": "https://images.pokemontcg.io/ex14/logo.png"
        }
      },
      "number": "3",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        323
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex14/3.png",
        "large": "https://images.pokemontcg.io/ex14/3_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex14-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 1.8,
            "mid": 2.88,
            "high": 11,
            "market": 2.88,
            "directLow": 2.96
          },
          "reverseHolofoil": {
            "low": 2.02,
            "mid": 3.5,
            "high": 7.19,
            "market": 3.63,
            "directLow": 2.05
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex14-3",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.2,
          "lowPrice": 0.5,
          "trendPrice": 3.46,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 3.5,
          "reverseHoloLow": 1.15,
          "reverseHoloTrend": 8.23,
          "lowPriceExPlus": 1.49,
          "avg1": 2,
          "avg7": 2.55,
          "avg30": 3,
          "reverseHoloAvg1": 1.5,
          "reverseHoloAvg7": 3.48,
          "reverseHoloAvg30": 6.33
        }
      }
    },
    {
      "id": "dv1-6",
      "name": "Bagon",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "hp": "50",
      "types": [
        "Dragon"
      ],
      "evolvesTo": [
        "Shelgon"
      ],
      "attacks": [
        {
          "name": "Headbutt",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Dragon Claw",
          "cost": [
            "Fire",
            "Water"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Dragon",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dv1",
        "name": "Dragon Vault",
        "series": "Black & White",
        "printedTotal": 20,
        "total": 21,
        "legalities": {
          "unlimited": "Legal",
          "expanded": "Legal"
        },
        "ptcgoCode": "DRV",
        "releaseDate": "2012/10/05",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dv1/symbol.png",
          "logo": "https://images.pokemontcg.io/dv1/logo.png"
        }
      },
      "number": "6",
      "artist": "Kouki Saitou",
      "rarity": "Rare Holo",
      "flavorText": "Dreaming of one day flying, it practices by leaping off cliffs every day.",
      "nationalPokedexNumbers": [
        371
      ],
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dv1/6.png",
        "large": "https://images.pokemontcg.io/dv1/6_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dv1-6",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 0.48,
            "mid": 0.76,
            "high": 8.89,
            "market": 0.77,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dv1-6",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 0,
          "lowPrice": 5.99,
          "trendPrice": 13.01,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0,
          "reverseHoloTrend": 4.43,
          "lowPriceExPlus": 10,
          "avg1": 9.95,
          "avg7": 13.06,
          "avg30": 9.26,
          "reverseHoloAvg1": 2.95,
          "reverseHoloAvg7": 8.23,
          "reverseHoloAvg30": 8.23
        }
      }
    },
    {
      "id": "ex8-4",
      "name": "Camerupt",
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 1"
      ],
      "hp": "90",
      "types": [
        "Fire"
      ],
      "evolvesFrom": "Numel",
      "attacks": [
        {
          "name": "Back Burner",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Search your discard pile for up to 2 basic Energy cards and attach them to your Pokémon in any way you like."
        },
        {
          "name": "Split Bomb",
          "cost": [
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "set": {
        "id": "ex8",
        "name": "Deoxys",
        "series": "EX",
        "printedTotal": 107,
        "total": 108,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "DX",
        "releaseDate": "2005/02/01",
        "updatedAt": "2019/01/28 16:44:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/ex8/symbol.png",
          "logo": "https://images.pokemontcg.io/ex8/logo.png"
        }
      },
      "number": "4",
      "artist": "Tomokazu Komiya",
      "rarity": "Rare Holo",
      "nationalPokedexNumbers": [
        323
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/ex8/4.png",
        "large": "https://images.pokemontcg.io/ex8/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/ex8-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3.25,
            "mid": 4.35,
            "high": 9.99,
            "market": 5.21,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 4.5,
            "mid": 5.9,
            "high": 18.99,
            "market": 4.86,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/ex8-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.34,
          "lowPrice": 0.1,
          "trendPrice": 2.32,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 6.35,
          "reverseHoloLow": 2.16,
          "reverseHoloTrend": 4.32,
          "lowPriceExPlus": 0.8,
          "avg1": 1.2,
          "avg7": 2.04,
          "avg30": 2.59,
          "reverseHoloAvg1": 10.9,
          "reverseHoloAvg7": 5.27,
          "reverseHoloAvg30": 6.34
        }
      }
    },
    {
      "id": "dp4-4",
      "name": "Darkrai",
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "level": "40",
      "hp": "80",
      "types": [
        "Darkness"
      ],
      "attacks": [
        {
          "name": "Darkness Roar",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "You may have your opponent switch the Defending Pokémon with 1 or his or her Benched Pokémon."
        },
        {
          "name": "Sleep Hole",
          "cost": [
            "Darkness",
            "Darkness",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40+",
          "text": "If the Defending Pokémon is Asleep, this attack does 40 damage plus 40 more damage. If the Defending Pokémon is not Asleep, that Pokémon is now Asleep."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "+20"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-20"
        }
      ],
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "set": {
        "id": "dp4",
        "name": "Great Encounters",
        "series": "Diamond & Pearl",
        "printedTotal": 106,
        "total": 106,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "GE",
        "releaseDate": "2008/02/01",
        "updatedAt": "2018/03/04 10:35:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/dp4/symbol.png",
          "logo": "https://images.pokemontcg.io/dp4/logo.png"
        }
      },
      "number": "4",
      "artist": "Ryo Ueda",
      "rarity": "Rare Holo",
      "flavorText": "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
      "nationalPokedexNumbers": [
        491
      ],
      "legalities": {
        "unlimited": "Legal"
      },
      "images": {
        "small": "https://images.pokemontcg.io/dp4/4.png",
        "large": "https://images.pokemontcg.io/dp4/4_hires.png"
      },
      "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/dp4-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "holofoil": {
            "low": 3,
            "mid": 5.26,
            "high": 10.45,
            "market": 8.84,
            "directLow": null
          },
          "reverseHolofoil": {
            "low": 6.59,
            "mid": 9,
            "high": 19.99,
            "market": 7.66,
            "directLow": null
          }
        }
      },
      "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/dp4-4",
        "updatedAt": "2024/07/22",
        "prices": {
          "averageSellPrice": 2.02,
          "lowPrice": 0.18,
          "trendPrice": 2.27,
          "germanProLow": 0,
          "suggestedPrice": 0,
          "reverseHoloSell": 0,
          "reverseHoloLow": 0.2,
          "reverseHoloTrend": 5.71,
          "lowPriceExPlus": 1.29,
          "avg1": 4,
          "avg7": 1.65,
          "avg30": 1.78,
          "reverseHoloAvg1": 0.99,
          "reverseHoloAvg7": 5.66,
          "reverseHoloAvg30": 4.27
        }
      }
    }
  ]


}
