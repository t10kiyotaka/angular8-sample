import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetail = false;
  logs = [];

  toggleShowDetail() {
    this.logs.push(new Date())
    return this.showDetail = !this.showDetail
  }
}
