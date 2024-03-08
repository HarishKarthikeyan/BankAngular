import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtmService } from '../atm.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css',
})
export class FrontPageComponent {
  constructor(
    private atmService: AtmService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  cardNumber: any;
  checkUrl: any;
  checkBank() {
    this.atmService.checkBank(this.cardNumber.substring(0, 4)).subscribe(
      (response) => {
        console.log(response);
        // console.log(typeof response);
        // console.log(response.api);
        this.atmService.setUrl(response.api);
        this.checkUrl = response.api;
        this.localStorage.setItem('cardNumber', this.cardNumber);
        console.log(this.localStorage.getItem('cardNumber'));
        console.log(typeof this.localStorage.getItem('cardNumber'));

        this.atmService.verifyCardNumber(this.cardNumber).subscribe(
          (response) => {
            console.log(response);
            if (response) {
              console.log(this.checkUrl);
              if (this.checkUrl == '192.168.5.109:8080/harish') {
                this.router.navigate(['mainpage']);
              } else {
                this.router.navigate(['otherbank']);
              }
            }
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // checkCardNumber() {
  //   this.localStorage.setItem('cardNumber', this.cardNumber);
  //   console.log(this.localStorage.getItem('cardNumber'));
  //   console.log(typeof this.localStorage.getItem('cardNumber'));
  //   this.atmService.verifyCardNumber(this.cardNumber).subscribe(
  //     (response) => {
  //       console.log(response);
  //       if (response) {
  //         this.router.navigate(['mainpage']);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
