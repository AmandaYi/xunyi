import { NgModule } from '@angular/core';
import { HeaderHomeComponent } from './header-home/header-home';
import { MapHomeComponent } from './map-home/map-home';

import { FooterHomeComponent } from './footer-home/footer-home';
import { ListNewsComponent } from './list-news/list-news';
@NgModule({
	declarations: [HeaderHomeComponent,
    MapHomeComponent,

    FooterHomeComponent,
    ListNewsComponent],
	imports: [],
	exports: [HeaderHomeComponent,
    MapHomeComponent,

    FooterHomeComponent,
    ListNewsComponent]
})
export class ComponentsModule {}
