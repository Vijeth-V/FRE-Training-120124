import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,

  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.contactForm = new FormGroup({
    //   name: new FormControl(),
    //   email: new FormControl(),
    // });
    this.contactForm = this.fb.group({
      name: [this.initialInput.name],
      email: [this.initialInput.email],
    });
  }

  @Input() initialInput!: { name: String; email: String };

  @Output() data = new EventEmitter();

  onSubmit() {
    console.log(this.contactForm.value);
    this.data.emit(this.contactForm.value);
  }
}
