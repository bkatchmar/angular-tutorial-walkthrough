import { Component, OnInit } from "@angular/core";
import { Monarch } from '../Monarch';
import { MONARCHS } from '../Mock-Monarchs';
import { MonarchService } from '../monarch.service';

@Component({
  selector: "app-monarchs",
  templateUrl: "./monarchs.component.html",
  styleUrls: ["./monarchs.component.css"]
})
export class MonarchsComponent implements OnInit {
  monarchs_list: Monarch[];
  selectedMonarch: Monarch;
  onSelect(monarch: Monarch): void {
    this.selectedMonarch = monarch;
  }

  constructor(private monarchService: MonarchService) { }

  getMonarchs(): void {
    this.monarchService.getAllMonarchs().subscribe(monarchs => this.monarchs_list = monarchs);
  }

  ngOnInit() {
    this.getMonarchs();
  }
}