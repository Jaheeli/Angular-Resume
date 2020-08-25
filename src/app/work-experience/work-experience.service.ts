import { Injectable } from '@angular/core';
import { WorkExperience } from '../model/work-experience';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WorkExperienceService {
  workExperience: WorkExperience[] = [
    {
      id: 0,
      title: "Crew Trainer",
      name: "McDonalds",
      date: "June 2020 to Present",
      jobServices: "Train new crew, keep the store running smooth by keeping production up to the golden standard, direct crew in place of management if they are not present, keeping the area of work clean, staying professional at all times",
    },
    {
      id: 1,
      title: "Personal Care Aide",
      name: "LHC Group Inc",
      date: "January 2020 to July 2020",
      jobServices: "Train new employees as directed, care for clients, provide clients with services they cannot easily do themselves",
    },
    {
      id: 2,
      title: "Dietary Aide",
      name: "James River Nursing and Rehab",
      date: "October 2019 to December 2019",
      jobServices: "Train new employees as directed, care for elderly clients, make food and drinks for the elderly clients",
    },
    {
      id: 3,
      title: "Assistant Manager",
      name: "Sonic Drive-In",
      date: "April 2019 to October 2019",
      jobServices: "Train new employees, assist employees, count down carhops, count safe, count deposits, close store, manage kitchen, manage front of house, manage shift"
    }
  ];

  getWorkExperience = (): Observable<WorkExperience[]> => {
    return of(this.workExperience)
  };
}