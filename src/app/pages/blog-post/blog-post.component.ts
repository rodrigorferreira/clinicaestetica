// blog-post.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../service/blog.service'; // Verifique o caminho correto para o serviço

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService // Injeção do BlogService
  ) {}

  ngOnInit(): void {
    const postId = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.post = this.blogService.getPostById(postId);

    if (!this.post) {
      console.error('Post não encontrado!');
    }
  }

  // Método para voltar à página anterior
  goBack() {
    this.router.navigate(['/blog']);
  }
}

