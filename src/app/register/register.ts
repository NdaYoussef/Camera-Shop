import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
registerForm! : FormGroup;
submittedUser: any = null;
  constructor() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
       terms: new FormControl(false)
    }, this.confirmPasswordValidation );
  }
get fullName(){
   return this.registerForm.get('fullName');
   }
get email(){ 
  return this.registerForm.get('email'); 
}
get phone(){ 
  return this.registerForm.get('phone'); 
}
get password(){ 
  return this.registerForm.get('password'); 
}
get confirmPassword(){ 
  return this.registerForm.get('confirmPassword'); 
}

confirmPasswordValidation(form:AbstractControl) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  if(password !== confirmPassword){
        console.log(form.errors);

    return { misMatch: true };
  }
  return null;
}

  submit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.submittedUser = this.registerForm.value;
      this.registerForm.reset();
    }
  }
}
