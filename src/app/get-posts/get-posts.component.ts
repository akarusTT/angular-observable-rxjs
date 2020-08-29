import { Component, OnInit } from '@angular/core';
import { GetPostsService } from './get-posts.service';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss'],
})
export class GetPostsComponent implements OnInit {
  posts = [];

  constructor(private getPostsService: GetPostsService) {}

  ngOnInit() {
    this.getPostsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
