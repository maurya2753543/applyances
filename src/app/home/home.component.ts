import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   emps  = [
    {
        id: 0,
        logo: "assets/images/ps-logo.svg",
        locationIcon: "assets/images/location.svg",
        ratingIcon: "assets/images/ps-logo-icon.svg",
        name: "Amazon ",
        profile: "Business Intelligence Engnineer",
        experience: "5-7 year",
        country: "India",
        rating : '09/10'
    },
    {
        id: 1,
        logo: "assets/images/australia.svg",
        locationIcon: "assets/images/location.svg",
        ratingIcon: "assets/images/ps-logo-icon.svg",
        name: "RedBus ",
        profile: "Java/JEE",
        experience: "11-14 year",
        country: "Austrilia",
        rating : '07/10'
    },
    {
        id: 2,
        logo: "assets/images/india.svg",
        locationIcon: "assets/images/location.svg",
        ratingIcon: "assets/images/ps-logo-icon.svg",
        name: "Oyo Room ",
        profile: "ios Developer/ Mobile",
        experience: "8-12 year",
        country: "India",
        rating : '09/10'
    },
    {
        id: 3,
        logo: "assets/images/india.svg",
        locationIcon: "assets/images/location.svg",
        ratingIcon: "assets/images/india.svg",
        name: "Amazon ",
        profile: "Business Intelligence Engnineer",
        experience: "5-7 year",
        country: "India",
        rating : '09/10'
    },
    {
        id: 4,
        logo: "assets/images/ps-logo.svg",
        locationIcon: "assets/images/location.svg",
        ratingIcon: "assets/images/usa.svg",
        name: "Amazon ",
        profile: "Business Intelligence Engnineer",
        experience: "5-7 year",
        country: "Usa",
        rating : '79/80'
    },
    {
        id: 5,
        logo: "assets/images/canada.svg",
        locationIcon: "assets/images/location.svg",
        ratingIcon: "assets/images/ps-logo-icon.svg",
        name: "Flipkart ",
        profile: "Software Development Manager ",
        experience: "5-7 year",
        country: "Canada",
        rating : '08/19'
    },


];
}
