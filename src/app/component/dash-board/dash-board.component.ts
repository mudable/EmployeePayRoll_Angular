import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/Service/dashboard.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  employeesData: any;
  constructor(private router: Router, private dashbordService: DashboardService) { }

  ngOnInit(): void {
    var token = this.dashbordService.dashBoard(this.employeesData).subscribe(

      (response: any) => {
        console.log(response)
      }
    )

  }
}

