import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() citySubmitted = new EventEmitter();
  searchInput: string = "";

  onSubmit(): void {
    this.citySubmitted.emit(this.searchInput);
    this.searchInput = "";
  }
}
