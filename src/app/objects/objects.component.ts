import { Component, OnInit, Input } from '@angular/core';
import { Room } from './room.model';
import { Building } from './building.model';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {
	@Input() selectedBuilding: Building;
	@Input() selectedRoom: Room;
	building: Building;

  constructor() { }

  ngOnInit() {
  }

}