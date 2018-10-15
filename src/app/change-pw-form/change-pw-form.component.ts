
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-pw-form',
  templateUrl: './change-pw-form.component.html',
  styleUrls: ['./change-pw-form.component.css']
})
export class ChangePwFormComponent {

  form = new FormGroup({
    oldpassword: new FormControl('', Validators.required, PasswordValidators.notValid),
    newpasswordgroup: new FormGroup({
      newpassword: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    }, PasswordValidators.mustMatch)
  });

  changePassword() {
    console.log(this.form.value);
  }

  get oldpassword() {
    return this.form.get('oldpassword') as FormControl;
  }

  get newpasswordgroup() {
    return this.form.get('newpasswordgroup') as FormGroup;
  }

  get newpassword() {
    return this.form.get('newpasswordgroup.newpassword') as FormControl;
  }

  get confirmpassword() {
    return this.form.get('newpasswordgroup.confirmpassword') as FormControl;
  }

}
