import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  certifications = [
    {
      name : 'Coding',
      date : '2015',
      url : 'http://www.nokia.com',
      company : 'Nokia',
    },
    {
      name : 'Acknowledgement By Eset',
      date : '2015',
      url : 'http://www.eset.com',
      company : 'Eset',
    },
    {
      name : 'Acknowledgement By Eset #2',
      date : '2015',
      url : 'http://www.eset.com',
      company : 'Eset',
    },
    {
      name : 'Acknowledgement By KPN',
      date : '2016',
      url : 'http://www.kpn.com',
      company : 'KPN',
    },
    {
      name : 'Acknowledgement By PasswordPoss',
      date : '2016',
      url : 'http://www.passwordposs.com',
      company : 'PasswordPoss',
    },
    {
      name : 'Certificate of Completion: HTML Fundamentals (HTML5)',
      date : '2016',
      url : 'http://www.sololearn.com',
      company : 'SoloLearn',
    },
    {
      name : 'Certificate of Completion: CSS Fundamentals (CSS3)',
      date : '2016',
      url : 'http://www.sololearn.com',
      company : 'SoloLearn',
    },
    {
      name : 'Certificate of Completion: JavaScript Fundamentals (JS)',
      date : '2016',
      url : 'http://www.sololearn.com',
      company : 'SoloLearn',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
