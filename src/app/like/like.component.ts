import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    if (this.isActive) {
      this.likesCount = this.likesCount - 1;
    } else {
      this.likesCount = this.likesCount + 1;
    }
    this.isActive = !this.isActive;
  }
}
