import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoSideNavModule } from '../go-side-nav/go-side-nav.module';

import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';

import { GoHeaderComponent } from './go-header.component';
import { GoIconModule } from '../go-icon/go-icon.module';

@NgModule({
  declarations: [
    GoHeaderComponent
  ],
  imports: [
    CommonModule,
    GoSideNavModule,
    GoIconModule
  ],
  exports: [
    GoHeaderComponent
  ],
  providers: [
    GoSideNavService
  ]
})

export class GoHeaderModule { }
