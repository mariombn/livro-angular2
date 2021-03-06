import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 2';
  foto:string = 'favicon.ico';

  constructor(private service:AlertaService){}

  enviaMsg():void {
    this.service.msgAlerta();
  }
}
