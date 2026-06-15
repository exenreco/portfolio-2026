import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleService } from '../services/title/title.service';
import { environment } from '../../env/dev';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  template: `
    <article class="page">
      <header class="header">
        <h1 class="title">{{title}}</h1>
      </header>
      <main class="wrapper">
        <article class="content">{{ content }}</article>
        <aside class="sidebar">{{ sidebar }}</aside>
      </main>Tests
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    :host
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
      background-color: #f5f5f5;
  `
})
export class PageComponent implements OnInit {
  title: string[] = [];
  content: string[] = [];
  sidebar: string[] = [];

  constructor(private http: HttpClient, private titleService: TitleService) {
  }

  loadPage() {
    this.http.get(`${environment}/pages`).subscribe({
      next: (data: any) => {
        this.title = data.map((d:any) => d?.title);
        this.content = data.map((d:any) => d?.content);
        this.sidebar = data.map((d:any) => d?.sidebar);
      }
    })
  }

  setupPage() {
    this.loadPage();
  }

  ngOnInit(): void {
    this.setupPage();
    this.titleService.setWithSuffix(`${this.title}` || 'title');
  }
}
