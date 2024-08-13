// src/app/pages/blog/blog.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { BlogPost } from '../../models/blog-post.model'; // Importa a interface

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
