import { Injectable } from '@angular/core';
import { Book } from '../models/library.mode';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private bookList: Book[] = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publicationYear: '1925',
      genre: 'Classic Fiction',
      image:
        'https://imgs.search.brave.com/l_l0bQJHSw-0Bkybscn3OaXnRNw5cVE3hk6uf_0NnYs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9ncmVh/dF9nYXRzYnlfa2V5/X2FydC5qcGc',
    },
    {
      title: '1984',
      author: 'George Orwell',
      publicationYear: '1949',
      genre: 'Dystopian',
      image:
        'https://imgs.search.brave.com/Nr7DGZhDC4TfRVGhaPtMcMNJzsZVQfBwNNgyePW8_c8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYw/MzMyMjc5MzIxYzZm/NmNjODdjZjhmZS8y/MmVjZDYwNy05NTRk/LTQxYWUtYjJkYi01/NGJiOTJiMTAyNjUv/MTk4NC5qcGc',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publicationYear: '1960',
      genre: 'Historical Fiction',
      image:
        'https://imgs.search.brave.com/mp-cITvmIKOxRqQOUCCyORFMI9EPTXIdkwgZAe2UEk4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxYVkxbHhrKzlM/LmpwZw',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publicationYear: '1813',
      genre: 'Romantic Fiction',
      image:
        'https://imgs.search.brave.com/LUJoa-O32um0na4k5diE0SMt2fZ_kzkYhTKSd26F6r4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxQXRqaTNxTG9M/LmpwZw',
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      publicationYear: '1851',
      genre: 'Adventure',
      image:
        'https://imgs.search.brave.com/M1Mgyiz_JGo9WzMeML1GEeAo_XGBIaph_JoSdEzPbAw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxTGZUdUMtNjZM/LmpwZw',
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      publicationYear: '1951',
      genre: 'Literary Fiction',
      image:
        'https://imgs.search.brave.com/2COrceszVJjYdb_AQWb4xHKdbgPgYKLWdHvNtk_18-k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE4ZFZDR0Z1aEwu/anBn',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      publicationYear: '1937',
      genre: 'Fantasy',
      image:
        'https://imgs.search.brave.com/fZw78oIxGNNaJ-bhQS5cGvyA4ywkRoFlcgJEOUHCRJs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aXMtdGhlcmUtYS1k/ZWZpbml0aXZlLWJv/b2stdmVyc2lvbi1v/Zi10aGUtaG9iYml0/LXYwLXZsdTR3NTh3/dGk5YzEuanBlZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz1kZmJl/YjYyOGNmZjAxNjdh/MTY2ZDk4MDRlMTcy/YTljZTlkOTlmNjlj',
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      publicationYear: '1932',
      genre: 'Science Fiction',
      image:
        'https://imgs.search.brave.com/RVcnEQTDixaSY6qiK76Tyzr-s6_TU73BvsgiMJjKxAs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kd2Nw/Nzh5dzNpNm9iLmNs/b3VkZnJvbnQubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEyLzEyMTExMjI4/L0JyYXZlTmV3V29y/bGQxOTQ2SGlSZXNf/UmVkdWNlZC03Njh4/MTE3My5qcGc',
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      publicationYear: '1869',
      genre: 'Historical Fiction',
      image:
        'https://imgs.search.brave.com/elw9tbugKI9kFqjhDRNm6t15HosyFXV35VZ_u4_bXiA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vODk0/Nzk2MkE1NzYzMEM4/NDE5MkIyRjBENTNF/OEZEQThGOEQxQjhE/QS5qcGVn',
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      publicationYear: '1954',
      genre: 'Epic Fantasy',
      image:
        'https://imgs.search.brave.com/Td6XR5_H3vMS-9XTpKFQ8MuD-oFbra__SResTtOieQ0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vNDMz/MUIzM0Q4QjkzMEVE/MDNEOTgyOEQ2MTIx/QjFFNDBFRDk3QTcy/RS5qcGVn',
    },
  ];

  getBookList() {
    return this.bookList;
  }
}
