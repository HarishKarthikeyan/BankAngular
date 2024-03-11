import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtmService } from '../atm.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent {
  constructor(
    private atmService: AtmService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  cardNumber: any;
  pin: any;
  withdrawAmount: any;

  withdraw() {
    this.atmService
      .verifyPin(this.localStorage.getItem('cardNumber'), this.pin)
      .subscribe(
        (response) => {
          console.log(response);
          if (response == false) {
            alert('Incorrect Pin');
          }
          if (response) {
            this.atmService
              .withdraw(
                this.localStorage.getItem('cardNumber'),
                this.pin,
                this.withdrawAmount
              )
              .subscribe(
                (response) => {
                  console.log(response);
                  // if (response.balance > 0) {
                  //   alert('Withdraw Successful');
                  // }
                  if (response != null) {
                    alert('Withdraw Successful');
                  }

                  if (
                    this.localStorage.getItem('cardNumber')?.substring(0, 4) ==
                    '9999'
                  ) {
                    this.router.navigate(['/mainpage']);
                  } else {
                    this.router.navigate(['/otherbank']);
                  }
                  if (response == null) {
                    alert('Insufficient Balance');
                  }
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
