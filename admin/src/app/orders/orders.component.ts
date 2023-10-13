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
  subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('Starting find all API call');
    //this.loading = true;

    this.subscription = this.sessionService.getSessionDetails().subscribe(
      (data: any) => {
        // Handle the data here, e.g., assign it to this.session or perform other actions.
        this.session = data;
        console.log(this.session);
        console.log(data);
        this.loading = false; // Set loading to false when data is received.
      },
      (error) => {
        console.error('Error occurred:', error);
        this.loading = false; // Set loading to false in case of an error.
      }
    );
  }

  // getSessionDetails() {
  // this.loading = true;
  // this.session.error;
  // console.log('get session');
  // this.sessionService.getSessionDetails().subscribe({
  //   next: (res: any) => {
  //     (this.session.data = res),
  //       console.log(this.session.data),
  //       (this.session.loading = false),
  //       this.session.sub.unsubscribe();
  //   },
  //   error: (err) => {
  //     (this.session.error = err),
  //       (this.session.loading = false),
  //       console.log('err'),
  //       this.session.sub.unsubscribe();
  //   },
  // });
  // }
}
