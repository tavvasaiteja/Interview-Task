import { Injectable } from "@angular/core";

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class TaskService{
    baseUrl ='https://api.spaceXdata.com/v3/launches?limit=100';
    launchSuccess;
    landSuccess;
    launchYear;
    constructor(private http:HttpClient){}
    
    getSpaceXData(){
        return this.http.get(this.baseUrl);
    }
    getAllFiltersData(year){
        this.launchYear = year;
        return this.http.get(this.baseUrl+'&launch_success='+this.launchSuccess+'&land_success='+this.landSuccess+"&launch_year="+this.launchYear);

    }
    getLaunchSuccessData(launchSuccess){
        this.launchSuccess = launchSuccess;
        return this.http.get(this.baseUrl+'&launch_success='+this.launchSuccess);
    }
    getLaunchAndLandData(landSuccess){
        this.landSuccess = landSuccess;
        return this.http.get(this.baseUrl+'&launch_success='+this.launchSuccess+'&land_success='+this.landSuccess);

    }
}