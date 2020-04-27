import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
tagLine: string = "If you think it is impossible, you haven't tried hard enough";
objective: string = "Self-motivated Front-end Developer looking for Jr Developer role to bring knowledge to a company and to learn in the process";
  constructor() { }

  ngOnInit(): void {
  }

}
