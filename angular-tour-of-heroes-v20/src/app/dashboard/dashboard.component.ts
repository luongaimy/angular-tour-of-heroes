import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from "../hero-search/hero-search.component";

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, RouterLink, HeroSearchComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  private heroService: HeroService = inject(HeroService);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}