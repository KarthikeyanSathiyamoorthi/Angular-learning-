import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-lists',
  template: `
    <p class = text-special>
      customer-lists works!
    </p>
  `,
  styles: [`
    .text-special{
      padding-left:50px
    }
  `]
})
export class CustomerListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
