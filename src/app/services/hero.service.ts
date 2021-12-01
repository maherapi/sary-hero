import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from '../models/hero.interface';
import { BehaviorSubject, from, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private herosSubject = new BehaviorSubject<IHero[]>([]);
  private heros$: Observable<IHero[]> = this.herosSubject.asObservable();

  constructor(private http: HttpClient) {

    // getting data from API (mimic)
    this.http
      .get<IHero[]>('/assets/fake-data/heros.json')
      .toPromise()
      .then((d) =>
        (d || []).map((h) => ({
          ...h,
          powers: h.sourcePowers?.map((p) => p.power).join(', ') || '',
        }))
      )
      .then((d) => this.herosSubject.next(d || []));
  }

  getHeros() {
    return this.heros$;
  }

  getHero(id: number) {
    return this.heros$.pipe(map((heros) => heros.find((h) => h.id === id)));
  }

  rateHero(id: number, rating: number) {
    // mimic async call to API
    setTimeout(() => {
      this.herosSubject.next(
        this.herosSubject.getValue().map((h) => {
          if (h.id !== id) return h;
          return {
            ...h,
            rating: rating,
          };
        })
      );
    }, 1000);
  }
}
