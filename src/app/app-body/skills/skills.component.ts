import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsTitle = "Skills";
  skills =
  [
    {
      name: 'Angular  4',
      path: 'assets/images/skills/',
      imgName: 'angular',
      fileExtension: '.svg',
      percentage: '75'
    },{
    name : 'NodeJS',
    path : 'assets/images/skills/',
    imgName : 'nodejs' ,
    fileExtension: '.png',
    percentage : '80'
  },
    {
      name : 'MongoDB',
      path : 'assets/images/skills/',
      imgName : 'mongodb' ,
      fileExtension: '.jpg',
      percentage : '80'
    },
    {
      name : 'Express JS',
      path : 'assets/images/skills/',
      imgName : 'express' ,
      fileExtension: '.png',
      percentage : '75'
    },
    {
      name: 'TypeScript',
      path: 'assets/images/skills/',
      imgName: 'typescript',
      fileExtension: '.png',
      percentage: '70'
    },
    {
      name: 'JavaScript',
      path: 'assets/images/skills/',
      imgName: 'js',
      fileExtension: '.svg',
      percentage: '80'
    },
    {
      name: 'EcmaScript 6',
      path: 'assets/images/skills/',
      imgName: 'es6',
      fileExtension: '.png',
      percentage: '40'
    },
    {
      name: 'jQuery',
      path: 'assets/images/skills/',
      imgName: 'jquery',
      fileExtension: '.svg',
      percentage: '80'
    },
    {
      name: 'HTML5',
      path: 'assets/images/skills/',
      imgName: 'html5',
      fileExtension: '.svg',
      percentage: '95'
    },
    {
      name: 'CSS3',
      path: 'assets/images/skills/',
      imgName: 'css3',
      fileExtension: '.svg',
      percentage: '90'
    },
    {
      name: 'SASS / SCSS',
      path: 'assets/images/skills/',
      imgName: 'sass',
      fileExtension: '.svg',
      percentage: '90'
    },
    {
      name: 'Bootstrap ',
      path: 'assets/images/skills/',
      imgName: 'bootstrap',
      fileExtension: '.svg',
      percentage: '95'
    },
    {
      name: 'Webpack2',
      path: 'assets/images/skills/',
      imgName: 'webpack',
      fileExtension: '.svg',
      percentage: '60'
    },
    {
      name: 'GruntJS',
      path: 'assets/images/skills/',
      imgName: 'grunt',
      fileExtension: '.svg',
      percentage: '90'
    },
    {
      name: 'npm',
      path: 'assets/images/skills/',
      imgName: 'npm',
      fileExtension: '.png',
      percentage: '95'
    },
    {
      name: 'yarn',
      path: 'assets/images/skills/',
      imgName: 'yarn',
      fileExtension: '.jpg',
      percentage: '50'
    },
    {
      name: 'AJAX',
      path: 'assets/images/skills/',
      imgName: 'ajax',
      fileExtension: '.png',
      percentage: '40'
    },
    {
      name: 'SVG',
      path: 'assets/images/skills/',
      imgName: 'svg',
      fileExtension: '.png',
      percentage: '65'
    },
    {
      name: 'JSON',
      path: 'assets/images/skills/',
      imgName: 'json',
      fileExtension: '.png',
      percentage: '100'
    },
    {
      name: 'GIT',
      path: 'assets/images/skills/',
      imgName: 'git',
      fileExtension: '.png',
      percentage: '85'
    },
    {
      name: 'PHP',
      path: 'assets/images/skills/',
      imgName: 'php',
      fileExtension: '.svg',
      percentage: '30'
    },
    {
      name: 'mySQL',
      path: 'assets/images/skills/',
      imgName: 'mysql',
      fileExtension: '.svg',
      percentage: '30'
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
