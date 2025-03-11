import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../../server/websocket.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  orderStatus: string = 'Pending';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    // Listen to order status updates
    this.websocketService.listenToOrderUpdates().subscribe((orderUpdate: any) => {
      if (orderUpdate.orderId === 123) {
        this.orderStatus = orderUpdate.status;
      }
    });
  }
}
