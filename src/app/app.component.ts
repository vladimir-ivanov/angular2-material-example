import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: ['.active { font-weight: bold; }'],
    template: `
    <router-outlet></router-outlet>
  `,
})

export class AppComponent { }
