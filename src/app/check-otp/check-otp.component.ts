import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtmService } from '../atm.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-check-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-otp.component.html',
  styleUrl: './check-otp.component.css',
})
export class CheckOtpComponent implements OnInit {
  constructor(
    private atmService: AtmService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  otp: any;
  responseOtp: any;
  cardNumber: any;
  ngOnInit(): void {
    this.atmService.sendOtp(this.localStorage.getItem('cardNumber')).subscribe(
      (response) => {
        console.log(response);
        this.responseOtp = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  checkOtp() {
    if (this.otp == this.responseOtp) {
      this.router.navigate(['/changepin']);
    }
  }
}
