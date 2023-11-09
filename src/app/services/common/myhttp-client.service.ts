import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertifyService } from '../admin/alertify.service';
@Injectable({
  providedIn: 'root',
})
export class MyhttpClientService {
  constructor(private alertif: AlertifyService,
    private minihttpClien: HttpClient,
    @Inject('temelUrl') private baseUrl: string
  ) { }
  private Url(requestParameters: Partial<RequestHttpParamters>): string {
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl
      }/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ''
      }`;

  }
  private VarsaFullPointYoksaUrl(requestParameters: Partial<RequestHttpParamters>): string {

    return `${requestParameters.FullEndPoin ? requestParameters.FullEndPoin : this.Url(requestParameters)}`

  }

  get<T>(requestParameters: Partial<RequestHttpParamters>, id?: string): Observable<T> {

    let url = `${this.VarsaFullPointYoksaUrl(requestParameters)}${id ? `/${id}` : ''}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;

    return this.minihttpClien.get<T>(url, { headers: requestParameters.httpHeaders });
  }

  post<T>(requestParameters: Partial<RequestHttpParamters>, body: Partial<T>): Observable<T> {

    let url = `${this.VarsaFullPointYoksaUrl(requestParameters)}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;

    return this.minihttpClien.post<T>(url, body, { headers: requestParameters.httpHeaders });
  }

  Put<T>(requestParameters: Partial<RequestHttpParamters>, body: Partial<T>): Observable<T> {

    let url = `${this.VarsaFullPointYoksaUrl(requestParameters)}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;
    return this.minihttpClien.put<T>(url, body, { headers: requestParameters.httpHeaders });
  }


  delete<T>(requestParameters: Partial<RequestHttpParamters>, id: string): Observable<T> {
    let url = `${this.VarsaFullPointYoksaUrl(requestParameters)}${id ? `/${id}` : ''}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;

    return this.minihttpClien.delete<T>(url, { headers: requestParameters.httpHeaders })
  }
}

export class RequestHttpParamters {
  controller?: string;
  action?: string;
  queryString?: string;
  httpHeaders?: HttpHeaders;
  baseUrl?: string;
  FullEndPoin?: string;
}
