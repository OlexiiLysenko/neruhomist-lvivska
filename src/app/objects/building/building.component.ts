import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Building } from '../building.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  // @Input() selectedBuilding: Building;
  @Output() buildingWasSelected = new EventEmitter<Building>();

	buildings: Building[] = [
		new Building(1, 'ЖК "Персенківка"', 'вул. Тернопільська, 42', '../../../assets/architecture-2863623_1920.jpg'),
		new Building(2, 'ЖК "АГК"', 'вул. Антонича, 6', '../../../assets/blocks-2903681_1920.jpg'),
		new Building(3, 'ЖК "5 Авеню"', 'вул. Хмельницького, 122', '../../../assets/home-2456257_1920.jpg'),
    new Building(4, 'ЖК "АВАЛОН"', 'вул. Промислова, 15', '../../../assets/home-2892798_1920.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

  onBuildingSelected(building: Building) {
    this.buildingWasSelected.emit(building);
  }

}


