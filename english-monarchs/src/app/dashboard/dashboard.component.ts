import { Component, OnInit } from '@angular/core';
import { Monarch } from '../monarch';
import { MonarchService } from '../monarch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  monarchs_list: Monarch[];

  constructor(private monarchService: MonarchService) { }

  getMonarchs(): void {
    this.monarchService.getAllMonarchs().subscribe(monarchs => this.monarchs_list = monarchs);
  }

  ngOnInit() {
    this.getMonarchs();
  }
}