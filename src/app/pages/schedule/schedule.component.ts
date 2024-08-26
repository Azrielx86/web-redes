import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ClassDataModel} from "../../models/ClassDataModel";
import {Day} from "../../types/day";
import {ClassCardComponent} from "../../components/class-card/class-card.component";

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
    this.classes = [
      {
        name: "Microcomputers",
        days: {
          Monday: {
            startTime: "08:30",
            endTime: "10:00"
          },
          Wednesday: {
            startTime: "08:30",
            endTime: "10:00"
          }
        },
        color: "bg-emerald-600"
      },
      {
        name: "Creativity",
        days: {
          Tuesday: {
            startTime: "09:00",
            endTime: "11:00"
          }
        },
        color: "bg-pink-600"
      },
      {
        name: "Web Development",
        days: {
          Tuesday: {
            startTime: "14:00",
            endTime: "16:00"
          },
          Thursday: {
            startTime: "14:00",
            endTime: "16:00"
          }
        },
        color: "bg-teal-700"
      },
      {
        name: "Data Networks",
        days: {
          Monday: {
            startTime: "18:00",
            endTime: "20:00"
          },
          Tuesday: {
            startTime: "18:00",
            endTime: "20:00"
          },
          Thursday: {
            startTime: "18:00",
            endTime: "20:00"
          }
        },
        color: "bg-blue-400"
      },
      {
        name: "Distributed Systems",
        days: {
          Monday: {
            startTime: "11:00",
            endTime: "13:00"
          },
          Friday: {
            startTime: "11:00",
            endTime: "13:00"
          }
        },
        color: "bg-violet-700"
      },
      {
        name: "Data Networks Lab",
        days: {
          Friday: {
            startTime: "16:00",
            endTime: "18:00"
          }
        },
        color: "bg-indigo-700"
      }
    ];


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

