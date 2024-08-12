// blog-post.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private blogComponent: BlogComponent) {}

  ngOnInit(): void {
    // Obtendo o ID da URL, com tratamento para null
    const postId = +(this.route.snapshot.paramMap.get('id') ?? 0); // Usa 0 como fallback se for null
    this.post = this.blogComponent.posts.find(p => p.id === postId);

    // Alternativamente, você pode verificar explicitamente:
    if (postId) {
      this.post = this.blogComponent.posts.find(p => p.id === postId);
    } else {
      // Lida com o caso onde o ID é inválido ou não encontrado
      console.error('ID inválido');
    }
  }
}
