import { Component } from '@angular/core';
import {ChildrenOutletContexts, RouterOutlet} from '@angular/router';
import {WebHeaderComponent} from "./components/web-header/web-header.component";
import {WebIndexComponent} from "./pages/web-index/web-index.component";
import {slideInAnimation} from "./app.animations";
import {environment} from "../environment/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebHeaderComponent, WebIndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'web-redes';
  name = environment.name ?? "No Available";

  constructor(private contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData = () => this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
