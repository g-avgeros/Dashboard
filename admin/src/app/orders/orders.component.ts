import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Subscription } from 'rxjs';
import { Session, SessionAPIList } from '../interfaces/session';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  loading = false;
  //sessionList: Session[] | undefined = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('Starting find all API call');
    this.loading = true;
    console.log(this.sessionService.getSessionDetails());
  }

  // getSessionDetails(postId: string) {
  //   this.post.error;
  //   this.post.loading = true;

  //   this.post.sub = this.postService.getPostDetails(postId).subscribe({
  //     next: (res: any) => {
  //       (this.post.data = res),
  //         console.log(this.post.data),
  //         (this.post.loading = false),
  //         this.post.sub.unsubscribe();
  //     },
  //     error: (err) => {
  //       (this.post.error = err),
  //         (this.post.loading = false),
  //         this.post.sub.unsubscribe();
  //     },
  //   });
  // }
}
