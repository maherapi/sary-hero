import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from '../models/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeros() {
    return this.http.get<IHero[]>("/assets/fake-data/heros.json")
  }
}
