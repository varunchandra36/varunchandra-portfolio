import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  socialIcon = [
    {
      link : 'https://www.facebook.com/***',
      icon : 'fa fa-facebook'
    },
    {
      link : 'https://www.twitter.com/***',
      icon : 'fa fa-twitter'
    },
    {
      link : 'https://www.linkedin.com/in/****',
      icon : 'fa fa-linkedin'
    },
    {
      link : 'https://www.github.com/****',
      icon : 'fa fa-github'
    },
    {
      link : 'https://www.codepen.io/***',
      icon : 'fa fa-codepen'
    },
    {
      link : 'https://www.instagram.com/****',
      icon : 'fa fa-instagram'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
