import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from './teams/team';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 1, liga: 'Premier League', nombre: 'Liverpool', campeonatos: 6, puntos: 0, escudo: '.\\assets\\images\\liverpool.png'},
      { id: 2, liga: 'La Liga',nombre: 'Barcelona', campeonatos: 5, puntos: 0, escudo: '.\\assets\\images\\barcelona.png'},
      { id: 3, liga: 'Serie A', nombre: 'Napoli', campeonatos: 0, puntos: 3, escudo: '.\\assets\\images\\napoli.png'},
      { id: 4, liga: 'Premier League', nombre: 'Manchester United', campeonatos: 3, puntos: 0, escudo: '.\\assets\\images\\manu.png'},
    ];
    return {teams};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(teams: Team[]): number {
    return teams.length > 0 ? Math.max(...teams.map(team => team.id)) + 1 : 11;
  }
}