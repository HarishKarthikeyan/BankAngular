import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-bank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './other-bank.component.html',
  styleUrl: './other-bank.component.css',
})
export class OtherBankComponent {
  constructor(private router: Router) {}
  checkBalance() {
    this.router.navigate(['checkbalance']);
  }
  withdraw() {
    this.router.navigate(['withdraw']);
  }
}
