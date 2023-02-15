import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {filter, map, takeUntil} from "rxjs/operators";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {MobileDetectService} from "./services/mobile-detect.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('stickyMenu',  { read: ElementRef } ) menuElement: ElementRef;
    @ViewChild('stickyMobileMenu',  { read: ElementRef } ) mobileMenuElement: ElementRef;

    sticky: boolean = false;
    stickyMobile: boolean = false;
    elementPosition: any;
    mobileElementPosition: any;
    $selected: Observable<string>;
    name: string = '@sebgroup/ng-bootstrap';
    routes: any = [
        {name: 'Start', path:'/getting-started'},
        {name: 'Accordion', path:'/accordion'},
        {name: 'Datepicker', path:'/datepicker'},
        {name: 'Dropdown', path:'/dropdown'},
        {name: 'Modal', path:'/modal'},
        {name: 'Tooltip', path:'/tooltip'}
    ];

    @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        this.sticky = windowScroll >= this.elementPosition;
        this.stickyMobile = windowScroll >= this.mobileElementPosition;
    }
    @HostListener('window:resize', ['$event'])
    handleResize(){
        if(window.pageYOffset === 0 ) {this.setPosition();}
    }

    constructor(private router: Router, private mobileDetectService: MobileDetectService) {
        this.$selected = router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map((event: any) => Object.values(this.routes)
                    .find((value: any) => value.path === event.url)
                ),
                map((route: any) => route.name)
            );
    }

    toggleBodyLock(show: boolean, templateRef: any) {
        if (this.mobileDetectService.isMobile()) {
            if (show) {
                disableBodyScroll(templateRef);
            } else {
                enableBodyScroll(templateRef);
            }
        }
    }

    setPosition() {
        if(this.menuElement.nativeElement.offsetTop !== 0) { this.elementPosition = this.menuElement.nativeElement.offsetTop};
        if(this.mobileMenuElement.nativeElement.offsetTop !== 0) { this.mobileElementPosition = this.mobileMenuElement.nativeElement.offsetTop};
    }

    ngAfterViewInit(){
        this.setPosition();
    }
}
