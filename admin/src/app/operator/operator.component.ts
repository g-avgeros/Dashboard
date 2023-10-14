import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  operators: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.operators.push({ location: 'Location 1', street: 'Syggrou ave. 138', streetLink: 'https://example.com' });
    this.operators.push({ location: 'Location 2', street: 'Papadiamantopoulou 50', streetLink: 'https://example.com' });
  }
}
