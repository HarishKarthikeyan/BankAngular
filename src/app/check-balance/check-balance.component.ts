import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtmService } from '../atm.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

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
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  pin: any;
  cardNumber: any;
  balance: any;
  showBackButton: boolean = false;
  showBalance: boolean = false;

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
                this.showBackButton = true;
                this.showBalance = true;
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
  goBack() {
    if (this.localStorage.getItem('cardNumber')?.substring(0, 4) == '9999') {
      this.router.navigate(['/mainpage']);
    } else {
      this.router.navigate(['/otherbank']);
    }
  }
}
