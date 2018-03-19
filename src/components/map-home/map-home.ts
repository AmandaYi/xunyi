import { Component,ViewChild,ElementRef} from '@angular/core';
//  声明高德地图第三方引用
declare var AMap;

@Component({
  selector: 'map-home',
  templateUrl: 'map-home.html'
})
export class MapHomeComponent {

  @ViewChild('map-content') map_content: ElementRef;
  map: any;//地图对象
 

  constructor() {
   
  }

OnInit(){
  this.loadGaoDeMap();
}
 
  loadGaoDeMap() {

    this.map = new AMap.Map(this.map_content.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        resizeEnable: true,
        zoom: 11,
        center: [116.397428, 39.90923]
      })
    });
  }
}