// blog.component.ts
import { Component, OnInit } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string; // Adiciona o campo de imagem
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Tratamentos Faciais: Cuidados Essenciais',
      summary: 'Descubra como manter sua pele sempre radiante com nossas dicas de cuidados faciais.',
      content: 'Conteúdo completo do artigo sobre tratamentos faciais...',
      imageUrl: 'assets/images/tratamento-facial.jpg' // Exemplo de imagem
    },
    {
      id: 2,
      title: 'Dicas de Beleza para o Verão',
      summary: 'Prepare-se para o verão com nossas dicas de beleza e cuidados especiais para esta estação.',
      content: 'Conteúdo completo do artigo sobre dicas de beleza para o verão...',
      imageUrl: 'assets/images/dicasdebeleza.jpg' // Exemplo de imagem
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
