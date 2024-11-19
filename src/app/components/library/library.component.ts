import { Component } from '@angular/core';
import { Book } from '../../models/library.mode';
import { LibraryService } from '../../services/library.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.bookList = this.libraryService.getBookList();
  }
}
