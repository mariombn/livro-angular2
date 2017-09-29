import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes:any[] = [
    {id:1, nome:'Mario'},
    {id:2, nome:'Aline'},
    {id:3, nome:'João'},
    {id:4, nome:'Carlos'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
