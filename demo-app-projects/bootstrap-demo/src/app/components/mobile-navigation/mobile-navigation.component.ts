import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../interfaces/menu-item';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
  animations: [
    trigger('slideOut', [
      transition(
        ':leave',
        animate(
          '300ms ease-out',
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
          })
        )
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(
          '500ms ease-in',
          style({
            opacity: 1,
            transform: 'translateX(0)',
          })
        ),
      ]),
    ]),
    trigger('slideIn', [
      transition(
        ':leave',
        animate(
          '300ms ease-out',
          style({
            opacity: 0,
            transform: 'translateX(700px)',
          })
        )
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(700px)',
        }),
        animate(
          '500ms ease-in',
          style({
            opacity: 1,
            transform: 'translateX(0)',
          })
        ),
      ]),
    ]),
    trigger('fadeIn', [
      transition(
        ':leave',
        animate(
          '500ms ease-out',
          style({
            opacity: 0,
          })
        )
      ),
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '500ms ease-in',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class MobileNavigationComponent implements OnInit {
  $activeState: Subject<Array<MenuItem>> = new Subject<Array<MenuItem>>();
  $activeTab: Observable<string>;

  constructor(private menuService: MenuService) {}
  public components: Array<MenuItem> = [];
  menuState = 'show';

  ngOnInit() {
    this.$activeTab = this.menuService.$activeTab;
    this.$activeState = this.menuService.$menuItems;
  }

  hideMobileNav() {
    this.menuService.switchTab(null);
  }
}
