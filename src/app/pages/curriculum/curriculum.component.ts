import {Component} from '@angular/core';
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  phoneNumber: string = environment.phoneNumber ?? "No Available";
  email: string = environment?.email ?? "No Available";
  name: string = environment?.name ?? "No Available";
}
