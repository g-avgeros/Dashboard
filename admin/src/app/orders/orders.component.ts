import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Subscription } from 'rxjs';
import { Session, SessionAPIList, SessionModel } from '../interfaces/session';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private sessionService: SessionService) {}
  session: SessionModel = {
    sub: null!,
    error: null!,
    loading: false,
    postId: null!,
    data: null,
  };
  loading = false;
  //sessionList: Session[] | undefined = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('Starting find all API call');
    this.loading = true;
    console.log(this.sessionService.getSessionDetails());
  }

  getSessionDetails() {
    this.loading = true;

    this.session.sub = this.sessionService.getSessionDetails().subscribe({
      next: (res: any) => {
        (this.session.data = res),
          console.log(this.session.data),
          (this.session.loading = false),
          this.session.sub.unsubscribe();
      },
      error: (err) => {
        (this.session.error = err),
          (this.session.loading = false),
          this.session.sub.unsubscribe();
      },
    });
  }
}
