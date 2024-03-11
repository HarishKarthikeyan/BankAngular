import { Component } from '@angular/core';
import { AtmService } from '../atm.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css',
})
export class DepositComponent {
  constructor(
    private atmService: AtmService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  pin: any;
  cardNumber: any;
  depositAmount: any;

  deposit() {
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
              .deposit(
                this.localStorage.getItem('cardNumber'),
                this.pin,
                this.depositAmount
              )
              .subscribe(
                (response) => {
                  console.log(response);
                  alert('Deposit Successful');
                  this.router.navigate(['/mainpage']);
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
