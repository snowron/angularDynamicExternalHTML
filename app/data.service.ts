import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();
  private messageSource1 = new Subject();
  currentMessage1 = this.messageSource1.asObservable();
  constructor(private http: HttpClient) { }

  getPageHtml(page) {

    return this.http.get('assets/' + page + '.html', { responseType: 'text' });

  }
  getPageAttr(page) {

    return this.http.get('assets/' + page + '.json');

  }
  send(message: string) {
    this.messageSource.next(message)
  }

  getVar(message: string) {
    this.messageSource1.next(message)
  }
}
