import { Component, OnInit } from '@angular/core';
import data from '../shared/data/data.json';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CurrencyPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  desserts = data;
  cart: {
    itemId: number;
    quantity: number;
  }[] = [];

  ngOnInit() {}

  getItemInCart(selectedItemId: number) {
    return this.cart.find(item => item.itemId === selectedItemId);
  }

  addToCart(selectedItemId: number) {
    const itemInCart = this.cart.find(item => item.itemId === selectedItemId);
    if (!itemInCart) {
      this.cart.push({
        itemId: selectedItemId,
        quantity: 1
      })
    } else {
      itemInCart.quantity += 1;
    }
  }

  removeFromCart(selectedItemId: number) {
    console.log(selectedItemId);
  }
}
