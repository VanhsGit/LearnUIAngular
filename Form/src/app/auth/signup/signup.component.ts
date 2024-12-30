import { Component } from '@angular/core';
import { AbstractControl, ControlContainer, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

function equalValues(ctn1: string, ctn2: string){
  return (control: AbstractControl) => {
    const val1 = control.get(ctn1)?.value;
    const val2 = control.get(ctn2)?.value;

    if(val1 === val2){
      return null;
    }

    return {isNotEqualValues: true}
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    passwords: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.email], 
      }), 
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
    }, {
      validators: [equalValues('password', 'confirmPassword')]
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])

  })
}
