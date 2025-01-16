import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cantact-us',
  standalone: false,

  templateUrl: './cantact-us.component.html',
  styleUrl: './cantact-us.component.scss',
})
export class CantactUsComponent implements OnInit {
  contactForm!: FormGroup;

  get name() {
    return this.contactForm.get('name');
  }

  get message() {
    return this.contactForm.get('message');
  }

  showForm = true;

  contactInfo: any = {
    name: String,
    message: String,
  };

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  contactus() {
    console.log('Button Clicked');
    if (this.contactForm?.valid) {
      this.contactInfo.name = this.contactForm.get('name')?.value;
      this.contactInfo.message = this.contactForm.get('message')?.value;
    }
    this.showForm = false;
  }
}
