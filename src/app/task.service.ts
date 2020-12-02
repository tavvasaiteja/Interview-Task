import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class TaskService{
    baseUrl ='https://api.spaceXdata.com/v3/launches?limit=100';
    constructor(private http:HttpClient){}    
    getSpaceXData(){
        return this.http.get(this.baseUrl);
    }
    getFilteredSpaceXData(param:any){
        return this.http.get(this.baseUrl,{params:param});
    }
}