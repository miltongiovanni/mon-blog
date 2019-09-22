import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 @Input() postTitle;
 @Input() postContent;
 @Input() postLoveIts;
 @Input() postCreated_at;


  constructor() { }
  increaseLove(){
    this.postLoveIts+=1;
  }
  decreaseLove(){
    this.postLoveIts-=1;
  }
  ngOnInit() {
  }

}
