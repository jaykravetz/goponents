import { Component, OnInit } from '@angular/core';

import {
  GoIconComponent,
  GoModalService,
  GoOffCanvasService,
  GoSideNavService,
  NavGroup,
  NavItem,
  GoToasterService
} from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logo: string = '../assets/Tangoe_Logo_White.png';
  logoCollapsed: string = '../assets/Tangoe_Logo_Green.png';
  title: string = 'go-tester';

  menuItems: Array<NavGroup | NavItem> = [
    { routeIcon: 'dashboard', routeTitle: 'Tests', description: 'Test Routes', subRoutes: [
      { route: 'test-page-1', routeTitle: 'Test 1', description: 'Test Route 1' },
      { route: 'test-page-2', routeTitle: 'Test 2' }
    ]}
  ];

  constructor(
    private goToasterService: GoToasterService,
    private goOffCanvasService: GoOffCanvasService,
    private goSideNavService: GoSideNavService,
    private goModalService: GoModalService
  ) { }

  ngOnInit() {
  }

  openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: GoIconComponent,
      bindings: {
        icon: 'alarm'
      }
    });
  }

  toggleSideMenu(): void {
    this.goSideNavService.toggleNav();
  }

  openModal(): void {
    this.goModalService.openModal(
      GoIconComponent,
      {
        icon: 'alarm'
      }
    );
  }

  openToast() {
    this.goToasterService.toastInfo({ message: 'From the action sheet'});
  }
}
