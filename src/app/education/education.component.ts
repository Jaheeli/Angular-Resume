import { Component, OnInit } from '@angular/core';
import { ServiceService } from "./service.service";
import { Education } from '../model/education';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[];
  educationDataService: ServiceService;
  constructor(private serviceService: ServiceService) {
    this.educationDataService = this.serviceService;
   }

  ngOnInit(): void {
    this.educationDataService.getEducation().subscribe(education => this.education = education);
  }

}
