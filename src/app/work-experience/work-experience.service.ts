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
      title: "Warehouse Worker",
      name: "Select Brands",
      date: "January 2021 to Present",
      jobServices: "Assist Lead with various tasks, train new warehouse workers, clean warehouse, assist Production team as needed, assist Forklift team as needed.",
    },
    {
      id: 1,
      title: "Freelance Web Developer and Game Developer",
      name: "None",
      date: "January 2020 to Present",
      jobServices: "Develop various web apps for clients, as well as working with a studio team in making games and 3D art",
    },
    {
      id: 2,
      title: "Production Worker",
      name: "Red Monkey",
      date: "November 2020 to December 2020",
      jobServices: "Train new employees as directed, care for elderly clients, make food and drinks for the elderly clients",
    },
    {
      id: 3,
      title: "Crew Trainer",
      name: "McDonalds",
      date: "March 2020 to November 2020",
      jobServices: "Train new crew, keep the store running smooth by keeping production up to the golden standard, direct crew in place of management if they are not present, keeping the area of work clean, staying professional at all times"
    }
  ];

  getWorkExperience = (): Observable<WorkExperience[]> => {
    return of(this.workExperience)
  };
}