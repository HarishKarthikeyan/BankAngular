import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtmService } from '../atm.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-change-pin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-pin.component.html',
  styleUrl: './change-pin.component.css',
})
export class ChangePinComponent {
  constructor(
    private atmService: AtmService,
    private localStorage: LocalStorageService
  ) {}
  cardNumber: any;
  newPin: any;

  changePin() {
    this.atmService
      .changePin(this.localStorage.getItem('cardNumber'), this.newPin)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
