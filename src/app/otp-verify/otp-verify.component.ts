import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { genOtp } from '../interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {
  constructor(
    private getAllAuthService: AuthService,
    private toastr: ToastrService
  ) {}
  valueOtp: string;
  ngOnInit() {
    console.log(this.getAllAuthService.userInfo);
    // this.otpInfo.userId=this.getAllAuthService.userInfo.userId
  }

  sendOtpEvent(event) {
    const otpInfo = new genOtp(
      this.getAllAuthService.userInfo().userId,
      'candidate',
      'verify'
    );
    this.getAllAuthService.sendOtp(otpInfo).subscribe(data => {
      console.log(data);
    });
  }
  otpEvent(event) {
    this.valueOtp = event.target.value;
  }
  verifyOtpEvent(event) {
    this.getAllAuthService
      .matchOtp(`${this.getAllAuthService.userInfo().userId}/${this.valueOtp}`)
      .subscribe(data => {
        if (data.status == 'false') {
          this.toastr.error('Incorrect Otp');
        } else {
          this.toastr.success('Matched Successfully');
        }
      });
  }
}
