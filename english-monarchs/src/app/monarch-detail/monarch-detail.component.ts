import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Monarch } from '../Monarch';
import { MonarchService } from '../monarch.service';

@Component({
  selector: 'app-monarch-detail',
  templateUrl: './monarch-detail.component.html',
  styleUrls: ['./monarch-detail.component.css']
})
export class MonarchDetailComponent implements OnInit {
  @Input() monarch: Monarch;

  constructor(private route: ActivatedRoute, private monarchService: MonarchService, private location: Location) {}
  
  ngOnInit(): void { this.getMonarch(); }
  
  getMonarch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.monarchService.getMonarch(id).subscribe(m => {
      this.monarch = m.find(x => x.id === id);
    });
  }

  goBack(): void { this.location.back(); }
}