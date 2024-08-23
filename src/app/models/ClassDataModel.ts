import {Day} from "../types/day";

export interface ClassDataModel {
  name: string;
  days: { [day in Day]?: {
    startTime: string,
    endTime: string
  } };
}
