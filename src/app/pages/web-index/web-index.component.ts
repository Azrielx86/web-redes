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
      characteristics: [
        "todo 1",
        "todo 2"
      ],
      about: "",
      objectives: "Something more...",
      headerImage: "https://static.wixstatic.com/media/7bd1be_9586caef120044e4a229adfdfc4612e6~mv2.jpg",
      imageSource: "https://www.satelliteevolution.com/post/gatehouse-satcom-contributes-to-the-first-3gpp-5g-nb-iot-ntn-release",
      markdownSource: "articles/ntn_networks.md"
    },
    {
      title: "6G Networks",
      characteristics: [
        "todo 1",
        "todo 2"
      ],
      about: "",
      objectives: "Something more...",
      headerImage: "https://assets.techrepublic.com/uploads/2023/01/tr1323-6g-what-is-it.jpeg",
      imageSource: "No source",
      markdownSource: "articles/6g_networks.md"
    }
  ];
}
