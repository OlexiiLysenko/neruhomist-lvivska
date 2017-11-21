import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Building } from '../../building.model';

@Component({
  selector: 'app-building-item',
  templateUrl: './building-item.component.html',
  styleUrls: ['./building-item.component.css']
})
export class BuildingItemComponent implements OnInit {
	@Input() building: Building;
	@Output() buildingSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  	this.buildingSelected.emit();
  }

}
