import {Component, Input} from '@angular/core';
import {ArticleModel} from "../../models/ArticleModel";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() model!: ArticleModel;

  getAltImageText = () => `An image about ${this.model.title}`;
}
