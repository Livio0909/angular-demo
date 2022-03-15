import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {IJob} from '../interface/jobInterface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string = "Hello world!";
  joblist:IJob[] = [];
  
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getJobList().subscribe((data: any) => {
      this.joblist = <IJob[]>data['data'];
    })
  }

}
