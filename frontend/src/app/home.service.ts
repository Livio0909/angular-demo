import { Injectable } from '@angular/core';
import {IJob} from './interface/jobInterface';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class HomeService {
  joblist: IJob[] = [];

  constructor(private http: HttpClient) { 
    // this.joblist = [
    //   {'img':'FD', 'title':'Flutter Developer', 'location': 'Ho Chi Minh', 'salary':'2000$ - 2500$/month', 'fulltime': true},
    //   {'img':'JD', 'title':'Java Developer', 'location': 'Ha Noi', 'salary':'1000$ - 1200$/month', 'fulltime': true},
    //   {'img':'AD', 'title':'Angular Developer', 'location': 'Hue', 'salary':'1000$ - 1200$/project', 'fulltime': false},
    //   {'img':'FE', 'title':'Front End Developer', 'location': 'Tra Vinh', 'salary':'1000$ - 1500$/project', 'fulltime': false},
    //   {'img':'BE', 'title':'Back End Developer', 'location': 'Ho Chi Minh', 'salary':'1000$ - 1200$/month', 'fulltime': true},
    // ];


  }

  getJobList() {
    
    return this.http.get('http://localhost:8080/jobs')
  }
  
}
