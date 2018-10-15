import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors;
  email2 = 'default@gmail.com';

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }

  onKeyUp1($event) {
    if ($event.keyCode === 13) { console.log('Enter was pressed and called onKeyUp1'); }
  }
  onKeyUp2() {
    console.log('Enter was pressed and called onKeyUp2');
  }
  onKeyUp3(email1) {
    console.log(email1);
  }

  onAdd() {
    this.authors.push('author4');
  }
  onRemove(author) {
    const index = this.authors.indexOf(author);
    this.authors.splice(index, 1);
  }
  onUpdate(author) {
    const index = this.authors.indexOf(author);
    this.authors.splice(index, 1, 'author5');
  }

}
