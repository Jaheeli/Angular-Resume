import { Injectable } from '@angular/core';
import { Education } from '../model/education';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    education: Education[] = [
      {
        id: 0,
        name: "Woz-U",
        degree: "FullstackWeb",
        degreeType: "Certificate",
        yearAttending: "2020",
        graduation: "Oct 2020"
      },
      {
        id: 1,
        name: "South Central Career Center",
        degree: "Computer Maintenance and Repair",
        degreeType: "Certificate",
        yearAttending: "2012-2013",
        graduation: "N/A, 2nd year of program was cancelled"
      },
      {
        id: 2,
        name: "Koshkonong High School",
        degree: "High School General Studies",
        degreeType: "H.S. Diploma",
        yearAttending: "2009-2013",
        graduation: "May 2013"
      }
    ];
  getEducation = (): Observable<Education[]> => {
    return of(this.education);
  }
}
