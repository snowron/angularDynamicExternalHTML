import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-show',
  template: `<div *dynamicComponent="template; context: bindings;"></div>`,
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  template: string;
  vari: string;
  exHtml1;
  exHtml2; 
  exHtml3;
  bindings;
  constructor(private sanitizer: DomSanitizer,private data: DataService) { }
  sendDatam: Array<any> = [];
  ngOnInit() {
    this.data.currentMessage.subscribe(data => {
      this.data.getPageHtml(data).subscribe(data2 => {
        this.data.currentMessage1.subscribe(data => {
          this.sendDatam = JSON.parse(data.toString());
          this.exHtml1 = this.sendDatam[0].inputName;
          this.exHtml2 = this.sendDatam[1].inputName;
          this.exHtml3 = this.sendDatam[2].inputName;
          this.bindings = { exHtml1: this.exHtml1, exHtml2: this.exHtml2, exHtml3: this.exHtml3 }
        });

        this.template = data2;
      });
    });
  }
}
