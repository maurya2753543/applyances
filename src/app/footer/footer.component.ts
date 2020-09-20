import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   public newsdata: any[];

  ngOnInit(): void {
  }
  title:String;
  list:any;
  startPage : any;
  paginationLimit:any; 
  constructor(){
    
    this.list = [
      {name:' Admin / Office Assistant'},
      {name:'Beautician / Hair Stylist'},
      {name: 'Bussiness Development'},
      {name: 'Computer/Data Entry operatior'},
      {name:'Software Engineer'},
      {name:'content Marketing'},
      {name:'Driver'},
      {name: 'Delivery Person'},
      {name:'cook /chef'},
      {name: 'Digital Marketing / Online Marketing'},
      {name:'Doctor'},
      {name: 'Nurse'},
      {name: 'Clerk'},
      {name: 'Officer traing'},
      {name: 'Data Maning'},
      {name: 'Ui Deveploper'},
      {name: 'Angular Deveplor'},
      {name: 'Azure deveploper'},
      {name: 'Programer'},
      {name: 'Tester'},
      {name: 'Coder'},
      {name:'Software Engineer'},
      {name:'content Marketing'},
      {name:'Driver'},
      {name: 'Delivery Person'},
      {name:'cook /chef'},
      {name: 'Digital Marketing / Online Marketing'},
      {name: 'Agriculture'},
      {name: 'Food Resources'},
      {name:'Tourism'},
      {name:'manufacturing'},
      {name:'science technology'},
      {name: 'Goverment '},
      {name:'coler'},
      {name: 'Adminstration '},

    ]
    this.startPage = 0;
    this.paginationLimit = 4;
   }
   showMoreItems()
   {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
   }
   showLessItems()
   {
     this.paginationLimit = Number(this.paginationLimit) - 3;
   }
   

}
