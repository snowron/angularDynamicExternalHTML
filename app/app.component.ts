import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mediumdyn';
  constructor(private data: DataService) {
   
  }
  dataSend: Array < any > =[];
  cli(variable) {

    this.data.send(variable);

  }
  send() {
    for (var i = 1; i < 4; i++) {
      const inputElement: HTMLInputElement = document.getElementById('var' + i) as HTMLInputElement;
      const inputValue: string = inputElement.value;
      this.dataSend.push({ inputName: inputValue });
    }
    this.data.getVar(JSON.stringify(this.dataSend));
  }
}
