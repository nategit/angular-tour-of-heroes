import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  // getHeroes(): Hero [] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('heroService fetch heroes');
    return of(HEROES);
  }
}
