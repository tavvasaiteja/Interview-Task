import { Component, OnInit } from '@angular/core';
import { TaskService} from './task.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task';
  spaceXData;
  land_success;
  selectedYear;
  yearBtnActive = false;
  launchBtnActive = false;
  landBtnActive = false;
  launch_success;
  Year=[{year:'2006'},{year:'2007'},{year:'2008'},{year:'2009'},{year:'2010'},{year:'2011'},{year:'2012'},
  {year:'2013'},{year:'2014'},{year:'2015'},{year:'2016'},{year:'2017'},{year:'2018'},
  {year:'2019'},{year:'2020'}];
  constructor( private service: TaskService){
    if(this.landBtnActive == true &&  this.yearBtnActive ==true && this.launchBtnActive == true){
      this.service.getFilteredSpaceXData({year_launch:this.selectedYear,launch_success:this.launch_success,land_success:this.land_success}).subscribe(response=>{
        this.spaceXData = response; 
      });
    
    } 
  }

  launchSuccess(success){
    this.launch_success = success;
    this.launchBtnActive = !this.launchBtnActive;
    this.service.getFilteredSpaceXData({launch_success:this.launch_success}).subscribe((response)=>{
      this.spaceXData = response;
    })
  }
  yearFilter(year){
    this.selectedYear= year;
    this.yearBtnActive =  !this.yearBtnActive;
    console.log('yearBtn',this.yearBtnActive);

    this.service.getFilteredSpaceXData({launch_year:this.selectedYear}).subscribe((response)=>{
      this.spaceXData = response;
    })

  }
  landSuccess(success){
    this.land_success = success;
    this.landBtnActive = !this.landBtnActive;
    console.log('landBtn',this.landBtnActive);
    this.service.getFilteredSpaceXData({land_success:this.land_success}).subscribe((response)=>{
      this.spaceXData = response;
    })
  }
   
  ngOnInit(){   
   
    this.service.getSpaceXData().subscribe((response)=>{
      this.spaceXData = response;
    },(err)=>{
      console.log(err);
    });
  }
}
