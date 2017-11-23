import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navName = [
      {
        name : 'Biography',
        icon : 'fa fa-home',
        routerLinks : '/'
      },
      {
        name : 'What can I do',
        icon : 'fa fa-certificate',
        routerLinks : 'cert'
      },
      {
        name : 'Skills',
        icon : 'fa fa-bug',
        routerLinks : 'skills'
      },
      {
        name : 'My Projects',
        icon : 'fa fa-image',
        routerLinks : 'portfolio'
      },
      {
        name : 'Experience',
        icon : 'fa fa-superpowers',
        routerLinks : 'exp'
      },
      {
        name : 'Education',
        icon : 'fa fa-university',
        routerLinks : 'edu'
      },

      {
        name : 'Contact',
        icon : 'fa fa-envelope',
        routerLinks : 'contact'
      },
      {
        name : 'OnePage Portfolio',
        icon : 'fa fa-star',
        routerLinks : 'onePagePortfolio'
      }
    ]
  constructor() { }

  ngOnInit() {
  }

}
