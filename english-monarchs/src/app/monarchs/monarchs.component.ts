import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-monarchs",
  templateUrl: "./monarchs.component.html",
  styleUrls: ["./monarchs.component.css"]
})
export class MonarchsComponent implements OnInit {
  single_monarch = "Edward the Elder";

  constructor() { }

  ngOnInit() { }
}