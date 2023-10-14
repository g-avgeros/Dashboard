import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  operator: any = {
    items: [
      { label: 'EVSE', link: 'https://example.com/evse' },
      { label: 'Connector', link: 'https://example.com/connector' },
      { label: 'Session', link: 'https://example.com/session' },
    ],
    location: { label: 'Location', link: 'Papadiamantopoulou 50' },
    evse: { label: 'EVSE', link: 'https://example.com/evse' },
    connector: { label: 'Connector', link: 'https://example.com/connector' },
    session: { label: 'Session', link: 'https://example.com/session' },
  };

  constructor() {}

  ngOnInit(): void {}
}
