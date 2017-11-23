import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationSection = "Masters in Computer science";
  education = "University of North Carolina At Charlotte";
  educationDate = "Aug 2016 - Present";
  educationDescription = "";
  educationLink = "http://www.uncc.edu";

  constructor() { }

  ngOnInit() {
  }

}
