import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//  声明高德地图第三方引用
declare var AMap;

@Component({
  selector: 'map-home',
  templateUrl: 'map-home.html'
})
export class MapHomeComponent {
  //地图对象
  @ViewChild('mapContent') map_content: ElementRef;
  map: any;



  constructor() {

  }

  ngAfterViewInit () {
    console.log(this.map_content)
    this.loadGaoDeMap();
  }

  loadGaoDeMap() {

    this.map = new AMap.Map(this.map_content.nativeElement,
      {
        view: new AMap.View2D({ resizeEnable: true, zoom: 11, center: [116.397428, 39.90923] })
      });
  }
}

 