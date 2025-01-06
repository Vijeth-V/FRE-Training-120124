import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: false,

  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  name = '';
  email = 'Vijeth@gmail.com';

  handleData(form: NgForm) {
    // console.log('name', this.name, '   email', this.email);
    console.log(form.value);
  }
}
