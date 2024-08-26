import {Component, Input} from '@angular/core';
import {ClassDataModel} from "../../models/ClassDataModel";
import {NgIf, NgStyle} from "@angular/common";
import {Day} from "../../types/day";

@Component({
  selector: 'app-class-card',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.css'
})
export class ClassCardComponent {
  @Input() model: ClassDataModel | undefined;
  @Input() classDay!: Day;

  getClassDuration = (): number => {
    if (this.model == undefined) return 0;
    const classTime = this.model.days[this.classDay];
    const start = this.timeToMinutes(classTime?.startTime || "00:00");
    const end = this.timeToMinutes(classTime?.endTime || "00:00");
    return (end - start) / 30;
  };

  timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
}
