import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../../server/websocket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productAvailability: boolean = false;
  productPrice: number = 100;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.listenToProductUpdates().subscribe((productUpdate: any) => {
      if (productUpdate.productId === 1) {
        this.productAvailability = productUpdate.available;
      }
    });

    this.websocketService.listenToPriceUpdates().subscribe((price: number) => {
      this.productPrice = price;
    });
  }

  // Simulate price update
  updatePrice(newPrice: number) {
    this.websocketService.sendPriceUpdate(newPrice);
  }

  // Simulate order update
  updateOrder(order: any) {
    this.websocketService.sendOrderUpdate(order);
  }
}
