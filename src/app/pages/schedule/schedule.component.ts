import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ClassDataModel} from "../../models/ClassDataModel";
import {Day} from "../../types/day";

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    NgStyle
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
          },
        }
      },
      {
        name: "Creativity",
        days: {
          Tuesday: {
            startTime: "09:00",
            endTime: "11:00"
          }
        }
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
        }
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
        }
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
          },
        }
      },
      {
        name: "Data Networks Lab",
        days: {
          Friday: {
            startTime: "16:00",
            endTime: "18:00"
          }
        }
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

  isClassScheduled = (day: Day, time: string): boolean => {
    let cl = this.classes.find(c => {
      let d = c.days[day];
      if (d == undefined) return false;
      return d.startTime == time;
    }); // repeating this is TERRIBLE... but I can't think a better way to do it.
    return cl != undefined;
  };

  getClassDetail = (day: Day, time: string): string => {
    let cl = this.classes.find(c => {
      let d = c.days[day];
      if (d == undefined) return false;
      return d.startTime == time;
    });
    if (cl == undefined) return "";
    let d = cl.days[day];
    return `${cl.name} [${d?.startTime} - ${d?.endTime}]`;
  };

  getClassDuration = (day: Day, time: string): number => {
    let cl = this.classes.find(c => {
      let d = c.days[day];
      if (d == undefined) return false;
      return d.startTime == time;
    });
    if (cl == undefined) return 0;
    const classTime = cl.days[day];
    const start = this.timeToMinutes(classTime?.startTime || "00:00");
    const end = this.timeToMinutes(classTime?.endTime || "00:00");
    return (end - start) / 30; // Assuming 30-minute intervals
  };

  timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
}

