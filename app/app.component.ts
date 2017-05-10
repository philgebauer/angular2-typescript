import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron">
      <h1>An Angular 2 Quickstart Boilerplate</h1>
    </div>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent  {}
