import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private router: Router) {}
  checkBalance() {
    this.router.navigate(['checkbalance']);
  }
  deposit() {
    this.router.navigate(['deposit']);
  }
  withdraw() {
    this.router.navigate(['withdraw']);
  }
  changePin() {
    this.router.navigate(['checkotp']);
  }
}
