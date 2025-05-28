import { Component, OnInit } from '@angular/core';
import data from '../shared/data/data.json';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CurrencyPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  desserts = data;
  cart: {
    itemId: number;
    quantity: number;
  }[] = [];

  getItemInfo(selectedItemId: number) {
    return this.desserts.find((item) => item.id === selectedItemId);
  }

  getItemInCart(selectedItemId: number) {
    return this.cart.find((item) => item.itemId === selectedItemId);
  }

  getTotalItemsInCart() {
    let totalNumberOfItems = 0;

    this.cart.forEach((item) => {
      totalNumberOfItems += item.quantity;
    });

    return totalNumberOfItems;
  }

  getCartTotal() {
    let total = 0;

    this.cart.forEach((item) => {
      total += item.quantity * this.getItemInfo(item.itemId)!.price;
    });

    return total;
  }

  addToCart(selectedItemId: number) {
    const itemInCart = this.cart.find((item) => item.itemId === selectedItemId);

    if (!itemInCart) {
      this.cart.push({
        itemId: selectedItemId,
        quantity: 1,
      });
    } else {
      itemInCart.quantity += 1;
    }
  }

  removeFromCart(selectedItemId: number) {
    const itemInCart = this.cart.find(
      (item) => item.itemId === selectedItemId
    )!;

    if (itemInCart.quantity === 1) {
      this.cart = this.cart.filter((item) => item.itemId !== selectedItemId);
    } else {
      itemInCart.quantity -= 1;
    }
  }

  removeCompletelyFromCart(selectedItemId: number) {
    this.cart = this.cart.filter((item) => item.itemId !== selectedItemId);
  }

  onConfirmOrder() {}
}
