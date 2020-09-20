import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit ,AfterViewInit{
  slideIndex = 1;
  //@ViewChild("myslide",{read:ElementRef}) myslide:ElementRef;
  parent = document.getElementsByClassName("mySlides");

  aiArray;
  arrayUpdated: boolean = false;
  public newsdata: any[];
  public newschunk: any = [[]];
  newsdiv: any;

  constructor(private renderer: Renderer2, private httpclient: HttpClient) {
  }

  ngOnInit() {
    //this.changecol.send("yes");
    //console.log(this.newsdiv);
    //console.log(this.parent[0]); 
    
    this.getTopNewsStatic();
   
  }

  ngAfterViewInit() {
    if (this.arrayUpdated) {      this.showSlides(this.slideIndex);     }
  }

  showSlides(n) {
    var i;
    if (n > this.parent.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.parent.length;
    }
    for (i = 0; i < this.parent.length; i++) {
      this.renderer.setStyle(this.parent[i], 'display', 'none');
    }
    this.renderer.setStyle(this.parent[this.slideIndex - 1], 'display', 'flex');
    //console.log(this.parent);


  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }


  getTopNewsStatic() {

    this.newsdata = [
    
      {
        title: 'Card Title 3',
        description: 'Backend Developer',
        location: 'Banglore * Establish Mar..2005',
        img: 'assets/images/flipkarg.jpg',
        website: 'Visit Website',
        icon: 'assets/images/flipcrop.png',
        name: 'Flipkart'
      },
     
      {
        title: 'Card Title 2',
        description: 'Frontend Developer',
        location: 'Banglore * Establish Apr 1880',
        img: 'assets/images/adobeg.jpg',
        website: 'Visit Website',
        icon: 'assets/images/ad.png',
        name: 'Adobe'
      },
      {
        title: 'Card Title 1',
        description: 'Business intelligence',
        location: 'Banglore * Establish March 2020',
        website: 'Visit Website',
        img: 'assets/images/pu.png',
        icon: 'assets/images/pymcrop.png',
        name: 'Paytm'
      },{
      title: 'Card Title 3',
      description: 'Business Manager',
      location: 'Usa * Establish Mar..1980',
      img: 'assets/images/bu.png',
      website: 'Visit Website',
      icon: 'assets/images/ad.png',
      name: 'HSBC'
    },
   
    {
      title: 'Card Title 2',
      description: 'Content writer',
      location: 'Canada * Establish Apr 2010',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      website: 'Visit Website',
      icon: 'assets/images/pymcrop.png',
      name: 'PHP expert'
    },
    {
      title: 'Card Title 1',
      description: 'Big Data Engineer',
      location: 'Banglore * Establish March 2020',
      website: 'Visit Website',
      img: 'assets/images/adobeg.jpg',
      icon: 'assets/images/ac.png',
      name: 'Amzon'
    },
    {
      title: 'Card Title 2',
      description: 'Machine Learning/AI',
      location: 'Banglore * Establish Apr 1880',
      img: 'assets/images/adobeg.jpg',
      website: 'Visit Website',
      icon: 'assets/images/ad.png',
      name: 'Adobe'
    },
    {
      title: 'Card Title 2',
      description: 'Azure Developer',
      location: 'Banglore * Establish Apr 1880',
      img: 'assets/images/adobeg.jpg',
      website: 'Visit Website',
      icon: 'assets/images/ad.png',
      name: 'Adobe'
    },
     
    ];
    this.newschunk = this.getChunks(this.newsdata, 4);
    this.arrayUpdated = true;

  }

  getChunks(arr, size) {
    let chunkarray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkarray.push(arr.slice(i, i + size));
    }
    return chunkarray;
  }

}
