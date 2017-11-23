import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio = [
    {
      name : "MY_BOOK",
      link : "https://rocky-ravine-70292.herokuapp.com/",
      imagePath: "assets/images/portfolio/",
      image : "Capture" + ".JPG",
      companyName : "@mywork",
      companyLink : "https://rocky-ravine-70292.herokuapp.com/",
    },
    {
      name : "Car-Tracker",
      link : "https://github.com/varunchandra36/cartrackerApp",
      imagePath: "assets/images/portfolio/",
      image : "cartraker" + ".JPG",
      companyName : "@mywork",
      companyLink : "https://github.com/varunchandra36/cartrackerApp",
    },
    {
      name : "Automated Customer Visit Management System",
      link : "https://github.com/varunchandra36/",
      imagePath: "assets/images/portfolio/",
      image : "alexengsyn" + "",
      companyName : "@mywork",
      companyLink : "https://github.com/varunchandra36/",
    },
    {
      name : "The Phi Beta Lambda Clothing Closet",
      link : "https://github.com/varunchandra36/",
      imagePath: "assets/images/portfolio/",
      image : "Clothes-Closet-logo" + ".jpg",
      companyName : "@mywork",
      companyLink : "https://github.com/varunchandra36/",
    },
    {
      name : "React Blogging Application",
      link : "https://github.com/varunchandra36/",
      imagePath: "assets/images/portfolio/",
      image : "" + ".png",
      companyName : "@mywork",
      companyLink : "https://github.com/varunchandra36/",
    },
    {
      name : "Weather App",
      link : "https://github.com/varunchandra36/weatherApplication",
      imagePath: "assets/images/portfolio/",
      image : "weather" + ".JPG",
      companyName : "@mywork",
      companyLink : "https://github.com/varunchandra36/weatherApplication",
    },
    {
      name : "Car Service Portal",
      link : "https://github.com/varunchandra36/ServiceRequestPortal",
      imagePath: "assets/images/portfolio/",
      image : "nbad" + ".JPG",
      companyName : "@mywork",
      companyLink : "https://github.com/varunchandra36/ServiceRequestPortal",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
