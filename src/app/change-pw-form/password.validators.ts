
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidators {

    static mustMatch(control: AbstractControl): ValidationErrors | null {
        const newpassword = control.get('newpassword');
        const confirmpassword = control.get('confirmpassword');
        return (newpassword.value === confirmpassword.value)
            ? null : {mustMatch: true};
    }

    static notValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if (control.value !== '1234') {
                resolve({notValid: true});
            }
            resolve(null);
        });
    }
}
