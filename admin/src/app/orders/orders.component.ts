import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Subscription } from 'rxjs';
import { Session } from '../interfaces/session';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  loading = false;
  userList: Session[] = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('Starting find all API call');
    this.loading = true;
    console.log(this.sessionService.getsSessionDetails());
  }
}
