import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductComponent,OrderTrackingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-App';
}
