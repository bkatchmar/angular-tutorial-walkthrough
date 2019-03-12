import { Component, OnInit, Input } from "@angular/core";
import { Monarch } from '../Monarch';

@Component({
  selector: 'app-monarch-detail',
  templateUrl: './monarch-detail.component.html',
  styleUrls: ['./monarch-detail.component.css']
})
export class MonarchDetailComponent implements OnInit {
  @Input() monarch: Monarch;

  constructor() { }

  ngOnInit() { }

}