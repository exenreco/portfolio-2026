import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title/title.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<main class="site-main"><router-outlet/></main>`,
  styles: `
    .site-main
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
      background-color: #f5f5f5;
  `,
})
export class AppComponent implements OnInit {

  constructor(private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.setWithSuffix('Home');
  }
}
