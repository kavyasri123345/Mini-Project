import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {}

  // Listen to product availability updates
  listenToProductUpdates() {
    return this.socket.fromEvent('productUpdate');
  }

  // Listen to price updates
  listenToPriceUpdates() {
    return this.socket.fromEvent('priceUpdate');
  }

  // Listen to order tracking updates
  listenToOrderUpdates() {
    return this.socket.fromEvent('orderUpdate');
  }

  // Emit price update
  sendPriceUpdate(price: number) {
    this.socket.emit('priceUpdate', price);
  }

  // Emit order update
  sendOrderUpdate(order: any) {
    this.socket.emit('orderUpdate', order);
  }
}
