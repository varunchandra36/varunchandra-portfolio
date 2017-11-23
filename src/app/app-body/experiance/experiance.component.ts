import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {
  experianceTitle = "experience";
  companies = [
    {
      position : 'Software Developer',
      name : 'Value Labs',
      date : 'June 2015 - July 2016',
      description: '•\tThe main objective of the project was to develop a communication portal for customers to interact with claims representatives and share the required documents',
      website : 'http://www.***.us'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
