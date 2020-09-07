import { Config } from './../../../assets/config/config';

import { ApiResponse } from './../models/ApiResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

export  class ApiService<T> {
  model:any = {};
  baseUrl: string;
  apiurl: string;
  constructor(protected httpClient: HttpClient, protected url: string = '') {
    this.baseUrl = Config.settings.apiServer.BaseUrl;
    this.apiurl = this.url;
  }
  public create(item: T, url: string): Observable<ApiResponse<T>> {
    return this.httpClient .post<ApiResponse<T>>(`${url}`, item);
  }

  public createBaseUrl(item: T, url: string): Observable<ApiResponse<T>> {

    return this.httpClient .post<ApiResponse<T>>(`${url}`, item);
  }
  update(resource: any, url: any ): Observable< ApiResponse<T>> {

    return this.httpClient.put<ApiResponse<T>>(`${url}`, resource);
    }
     Get(id: any, url: any): Observable<ApiResponse<T>> {
      return this.httpClient.get<ApiResponse<T>>(`${url}` + '/' + id);
      }
      GetWithQueryString(input: any, url) {
        return this.httpClient.get<ApiResponse<T>>(`${url}` + '?' + this.toQueryString(input));
      }
     GetDataWithFilter(query: any, url: any): Observable<ApiResponse<T>> {
       return this.httpClient.get<ApiResponse<T>>(`${url}` + '?' + this.toQueryString(query));
    }

    GetAll(url: any): Observable<ApiResponse<T>> {
      return this.httpClient.get<ApiResponse<T>>(`${url}`);
      }
  toQueryString(queryString) {
    const parts = [];
    // tslint:disable-next-line:forin
    for (const property in queryString) {
        const value = queryString[property];
        if (value !== null && value !== undefined) {
            parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
    }
    return parts.join('&');
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
