import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

function mustContainQuestionMark(control: AbstractControl){
  if(control.value.includes('?')){
    return null;
  }

  return { doesNotContainQuestionMark: true}
}


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, FormsModule]
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.email, Validators.required, mustContainQuestionMark]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  get emailValid(){
    return this.form.controls.email.invalid && this.form.controls.email.touched
    && this.form.controls.email.dirty;
  }

  onSubmit(){
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }
}