import {Component} from '@angular/core';
import {ArticleCardComponent} from "../../components/article-card/article-card.component";
import {ArticleModel} from "../../models/ArticleModel";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-web-index',
  standalone: true,
  imports: [
    ArticleCardComponent,
    NgForOf
  ],
  templateUrl: './web-index.component.html',
  styleUrl: './web-index.component.css'
})
export class WebIndexComponent {
  articles: ArticleModel[] = [
    {
      title: "Non-Terrestrial Networks (NTN)",
      headerImage: "https://static.wixstatic.com/media/7bd1be_9586caef120044e4a229adfdfc4612e6~mv2.jpg",
      markdownSource: "articles/ntn_networks.md"
    },
    {
      title: "6G Networks",
      headerImage: "https://assets.techrepublic.com/uploads/2023/01/tr1323-6g-what-is-it.jpeg",
      markdownSource: "articles/6g_networks.md"
    }
  ];
}
