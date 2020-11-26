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
  Year=[{year:'2006'},{year:'2007'},{year:'2008'},{year:'2009'},{year:'2010'},{year:'2011'},{year:'2012'},
  {year:'2013'},{year:'2014'},{year:'2015'},{year:'2016'},{year:'2017'},{year:'2018'},
  {year:'2019'},{year:'2020'}];
  constructor( private service: TaskService){}
  launchSuccess(success){
    this.service.getLaunchSuccessData(success).subscribe((response)=>{
      this.spaceXData = response;
      console.log("response for land_success filter",this.spaceXData);
    })
  }
  AllFilters(year){
    this.service.getAllFiltersData(year).subscribe((response)=>{
      this.spaceXData = response;
      console.log("repsone for all the filtered data",this.spaceXData);
    })

  }
  landSuccess(success){
    this.service.getLaunchAndLandData(success).subscribe((response)=>{
      this.spaceXData = response;
      console.log("response for land and launch data",this.spaceXData);
    })
  }
  ngOnInit(){
    this.service.getSpaceXData().subscribe((response)=>{
      this.spaceXData = response;
      console.log("logging the spacexdata",this.spaceXData);
    });
  }
}
