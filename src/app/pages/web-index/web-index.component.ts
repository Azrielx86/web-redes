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
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      objectives: "Something more...",
      headerImage: "https://static.wixstatic.com/media/7bd1be_9586caef120044e4a229adfdfc4612e6~mv2.jpg",
      imageSource: "https://www.satelliteevolution.com/post/gatehouse-satcom-contributes-to-the-first-3gpp-5g-nb-iot-ntn-release"
    },
    {
      title: "6G Networks",
      characteristics: [
        "todo 1",
        "todo 2"
      ],
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      objectives: "Something more...",
      headerImage: "https://assets.techrepublic.com/uploads/2023/01/tr1323-6g-what-is-it.jpeg",
      imageSource: "No source"
    }
  ];
}
