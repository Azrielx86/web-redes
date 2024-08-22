import { Routes } from '@angular/router';
import {WebIndexComponent} from "./pages/web-index/web-index.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {CurriculumComponent} from "./pages/curriculum/curriculum.component";
import {ScheduleComponent} from "./pages/schedule/schedule.component";

export const routes: Routes = [
  {path: "", redirectTo: "index", pathMatch: "full"},
  {path: "index", component: WebIndexComponent, data: {animation: "HomePage"}},
  {path: "about-me", component: AboutMeComponent, data: {animation: "AboutPage"}},
  {path: "cv", component: CurriculumComponent},
  {path: "schedule", component: ScheduleComponent}
];
