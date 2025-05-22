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

  ngOnInit(): void {
    console.log(this.desserts);
  }
}
