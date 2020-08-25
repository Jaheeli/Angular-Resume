import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../model/work-experience';
import { WorkExperienceService} from '../work-experience/work-experience.service';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
workExperience: WorkExperience[];
workExperienceDataService: WorkExperienceService;
  constructor(private dataService: WorkExperienceService) {
    this.workExperienceDataService = this.dataService;
   }

  ngOnInit(): void {
    this.workExperienceDataService.getWorkExperience().subscribe(workExperience => this.workExperience = workExperience);
  }

}
