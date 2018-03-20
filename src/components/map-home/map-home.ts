import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//  声明高德地图第三方引用
declare var AMap;

@Component({
  selector: 'map-home',
  templateUrl: 'map-home.html'
})
export class MapHomeComponent {

  @ViewChild('mapContent') map_content: ElementRef;
  map: any;
  //地图对象


  constructor() {

  }

  ngAfterViewInit() {
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


/**
  * 上周
  * 
  *  站内正常更新编辑
  *  协作开通激活 网盘 
  *  和Andy一起处理网站恶意跳转到赌博类网站
  *  解封了贴吧助手账号可以正常使用,推广贴吧
  *  提交给Andy竞价方案以及关键词出价方案
 
  *  教育读书笔记

*本周
 * 日常工作,推广贴吧
 * 站内正常更新编辑
 * 进行贴吧宣传置顶 
 * Andy沟通广告方案 制作H5页面
 * 
 * 
 * 
*/