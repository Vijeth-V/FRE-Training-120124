import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-check-box',
  standalone: false,
  templateUrl: './reactive-check-box.component.html',
  styleUrls: ['./reactive-check-box.component.scss'],
})
export class ReactiveCheckBoxComponent {
  movies = [
    { id: 1, name: 'Avengers' },
    { id: 2, name: 'Iron Man' },
    { id: 3, name: 'Captain America' },
    { id: 4, name: 'Spider Man' },
    { id: 5, name: 'Black Panther' },
  ];

  moviesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.moviesForm = this.fb.group({
      selectedMovies: [[]],
    });
  }

  selectAll() {
    const allMovies = this.movies.map((movie) => movie);
    this.moviesForm.get('selectedMovies')?.setValue(allMovies);
  }

  clearAll() {
    this.moviesForm.get('selectedMovies')?.setValue([]);
  }

  get selectedMovies() {
    return this.moviesForm.get('selectedMovies')?.value || [];
  }

  onCheckboxChange(movie: any) {
    const selectedMovies = this.selectedMovies;
    if (selectedMovies.includes(movie)) {
      const index = selectedMovies.indexOf(movie);
      selectedMovies.splice(index, 1);
    } else {
      selectedMovies.push(movie);
    }
    this.moviesForm.get('selectedMovies')?.setValue(selectedMovies);
  }
}
