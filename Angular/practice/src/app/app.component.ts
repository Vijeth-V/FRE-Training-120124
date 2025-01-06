import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practice';

  formData: { name: String; email: String } = {
    name: 'vijeth',
    email: 'vijeth1410@gmail.com',
  };
  handleData(data: any) {
    this.formData = data;
  }
}
