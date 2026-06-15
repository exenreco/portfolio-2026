import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private defaultTitle = "Exenreco's Portfolio";

  constructor(private title: Title) {}

  set(title?: string) {
    this.title.setTitle(title || this.defaultTitle);
  }

  setWithSuffix(title: string) {
    this.title.setTitle(`${title} | ${this.defaultTitle}`);
  }
}
