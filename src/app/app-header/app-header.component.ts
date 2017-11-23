import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"]
})
export class AppHeaderComponent implements OnInit {
  name             =     "Varun Chandra";
  positionName     =     "FULL-STACK DEVELOPER | FRONT-END DEVELOPER";
  address          =     "9309 Kittansett Drive Apt E , Charlotte, NC 28262";
  mobileNumber     =     "+1 980-616-1286";
  email            =     "varunchandra36@gmail.com";
  websiteName      =     "www.varunchandra.com";
  websiteLink      =     "http://www.*****.com";
  social = [
    {
      name : "@varunchandra36",
      link : "https://github.com/varunchandra36/",
      icon : "fa fa-github",
      siteName : "Facebook"
    },
    {
      name : "@varunchandra36",
      link : "www.linkedin.com/in/varunchandra36",
      icon : "fa fa-linkedin",
      siteName : "Linkedin"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
