import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, from, map, Observable, of, Subscription } from 'rxjs';
import { IHero } from 'src/app/models/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-all-heros',
  templateUrl: './all-heros.component.html',
  styleUrls: ['./all-heros.component.scss'],
})
export class AllHerosComponent implements OnInit, OnDestroy {
  private _searchQuery: string = '';
  private _sortByPowers: boolean = false;

  heros$: Observable<IHero[]> = of([]);
  heros: IHero[] = [];
  displayedHeros: IHero[] = [];
  herosSubscription: Subscription | undefined;

  set searchQuery(q: string) {
    this._searchQuery = q;
    this.handleSearch(this._searchQuery);
  }

  get searchQuery() {
    return this._searchQuery;
  }

  set sortByPowers(b: boolean) {
    this._sortByPowers = b;
    const sortBy: keyof IHero = b ? 'powers' : 'name';
    this.sortHeros(sortBy);
  }

  get sortByPowers() {
    return this._sortByPowers;
  }

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.heros$ = this.heroService.getHeros();
    this.herosSubscription = this.heros$.subscribe((hs) => {
      this.displayedHeros = hs.map((h) => ({
        ...h,
        powers: h.sourcePowers?.map((p) => p.power).join(', ') || '',
      }));
      this.sortHeros('name');
      this.heros = this.displayedHeros;
    });
  }

  ngOnDestroy(): void {
    this.herosSubscription?.unsubscribe();
  }

  filterBtnClick(event: MouseEvent) {
    console.log(event);
  }

  handleSearch(q: string) {
    if (!q) {
      this.displayedHeros = this.heros;
      return;
    }
    const loweredQ = q.toLocaleLowerCase();
    this.displayedHeros = this.heros.filter(
      (h) =>
        h.name.toLocaleLowerCase().indexOf(loweredQ) > -1 ||
        h.powers!.toLocaleLowerCase().indexOf(loweredQ) > -1
    );
  }

  sortHeros(by: keyof IHero) {
    this.displayedHeros.sort((a, b) => {
      const normalizedA =
        typeof a[by] === 'string' ? (<string>a[by]).toLocaleLowerCase() : a[by];
      const normalizedB =
        typeof b[by] === 'string' ? (<string>b[by]).toLocaleLowerCase() : b[by];

      if (normalizedA! > normalizedB!) return 1;
      if (normalizedA! < normalizedB!) return -1;
      return 0;
    });
  }

  goToHero(hero: IHero) {
    this.router.navigateByUrl(`/hero/${hero.id}`);
  }
}
