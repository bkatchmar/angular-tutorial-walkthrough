import { Component, OnInit } from "@angular/core";
import { Monarch } from '../Monarch';
import { MONARCHS } from '../Mock-Monarchs';

@Component({
  selector: "app-monarchs",
  templateUrl: "./monarchs.component.html",
  styleUrls: ["./monarchs.component.css"]
})
export class MonarchsComponent implements OnInit {
  monarchs_list = MONARCHS;
  selectedMonarch: Monarch;
  onSelect(monarch: Monarch): void {
    this.selectedMonarch = monarch;
  }

  constructor() { }

  ngOnInit() { }
}