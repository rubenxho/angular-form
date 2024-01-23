import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  public reactiveForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required ),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  public handleSubmit(): void {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm)
  }

  // public reactiveForm: FormGroup = new FormGroup({
  //   name: new FormControl('' , Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(3)])
  // });
}
