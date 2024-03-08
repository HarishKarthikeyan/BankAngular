import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtmService } from '../atm.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-check-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-balance.component.html',
  styleUrl: './check-balance.component.css',
})
export class CheckBalanceComponent {
  constructor(
    private atmService: AtmService,
    private localStorage: LocalStorageService
  ) {}
  pin: any;
  cardNumber: any;
  balance: any;

  verifyPin() {
    this.atmService
      .verifyPin(this.localStorage.getItem('cardNumber'), this.pin)
      .subscribe(
        (response) => {
          console.log(response);
          if (response == false) {
            alert('Incorrect Pin');
          }
          if (response) {
            this.atmService.getBalance(this.cardNumber).subscribe(
              (response) => {
                console.log('balance:', response);
                this.balance = response.balance;
              },
              (error) => {
                console.log(error);
              }
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
