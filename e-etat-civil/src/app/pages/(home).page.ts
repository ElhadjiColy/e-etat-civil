import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'e-etat-civil-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <e-etat-civil-analog-welcome/>
  `,
})
export default class HomeComponent {
}
