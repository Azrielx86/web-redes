import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ClassDataModel} from "../../models/ClassDataModel";
import {Day} from "../../types/day";
import {ClassCardComponent} from "../../components/class-card/class-card.component";
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    NgStyle,
    ClassCardComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  timeSlots: string[] = [];

  classes: ClassDataModel[] = [];

  ngOnInit() {
    this.classes = environment.schedule ?? [];
    const startTime = 7 * 60;
    const endTime = 22 * 60;
    const interval = 30;

    for (let time = startTime; time <= endTime; time += interval) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      this.timeSlots.push(formattedTime);
    }
  }

  findClasses = (day: Day, time: string): ClassDataModel | undefined => {
    return this.classes.find(c => {
      let d = c.days[day];
      if (d == undefined) return false;
      return d.startTime == time;
    });
  };
}

