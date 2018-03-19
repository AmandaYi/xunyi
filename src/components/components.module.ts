import { NgModule } from '@angular/core';
import { HeaderHomeComponent } from './header-home/header-home';
import { MapHomeComponent } from './map-home/map-home';

import { FooterHomeComponent } from './footer-home/footer-home';
@NgModule({
	declarations: [HeaderHomeComponent,
    MapHomeComponent,

    FooterHomeComponent],
	imports: [],
	exports: [HeaderHomeComponent,
    MapHomeComponent,

    FooterHomeComponent]
})
export class ComponentsModule {}
