import { Component, OnInit } from "@angular/core";
import { Monarch } from '../Monarch';

@Component({
  selector: "app-monarchs",
  templateUrl: "./monarchs.component.html",
  styleUrls: ["./monarchs.component.css"]
})
export class MonarchsComponent implements OnInit {
  single_monarch: Monarch = {
    id: 1,
    nm: "Edward the Elder",
    cty: "United Kingdom",
    hse: "House of Wessex",
    yrs: "899-925"
  };

  constructor() { }

  ngOnInit() { }
}