import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  lists = [
    {
      img: 'assets/man-avatar.jpeg',
      name: 'Vijeth',
      email: 'vijeth1410@gmail.com',
    },
    {
      img: 'assets/man-avatar.png',
      name: 'Michael',
      email: 'michael@gmail.com',
    },
    {
      img: 'assets/woman-avatar.jpg',
      name: 'Mark',
      email: 'mark@gmail.com',
    },
    {
      img: 'assets/man-avatar.png',
      name: 'Tony',
      email: 'tony@gmail.com',
    },
  ];
}
