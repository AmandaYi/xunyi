import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';


import { Observable } from "rxjs"
import { UtilsProvider } from "../utils/utils"
import { SERVER_URL } from "../constants/constants"
import { ModalController } from 'ionic-angular';

@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http,public modalCtrl:ModalController) {
    console.log('Hello HttpServiceProvider Provider');
  }

  public postFormData(url: string, paramMap?: any): Observable<Response> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8',
 
    });
    return this.http.post(SERVER_URL + url, HttpServiceProvider.buildURLSearchParams(paramMap).toString(), new RequestOptions({ headers: headers}))
  }


  public get(url: string, paramMap?: any): Observable<Response> {

    //return this.http.get(url, {search: HttpServiceProvider.buildURLSearchParams(paramMap),withCredentials:true});
    return this.http.get(SERVER_URL + url, { search: HttpServiceProvider.buildURLSearchParams(paramMap) });
  }

  // 默认Content-Type为application/json;
  public post(url: string, body: any = null): Observable<Response> {

    return this.http.post(SERVER_URL + url, body, new RequestOptions());
  }

  public put(url: string, body: any = null, options?): Observable<Response> {

    return this.http.put(SERVER_URL + url, body, options);
  }

  public delete(url: string, paramMap?: any): Observable<Response> {

    return this.http.delete(SERVER_URL + url, { search: HttpServiceProvider.buildURLSearchParams(paramMap) });
  }

  public patch(url: string, body: any = null, options?): Observable<Response> {

    return this.http.patch(SERVER_URL + url, body, options);
  }

  public head(url: string, paramMap?: any): Observable<Response> {

    return this.http.head(SERVER_URL + url, { search: HttpServiceProvider.buildURLSearchParams(paramMap) });
  }

  public options(url: string, paramMap?: any): Observable<Response> {

    return this.http.options(SERVER_URL + url, { search: HttpServiceProvider.buildURLSearchParams(paramMap) });
  }

  public static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = UtilsProvider.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }
}
