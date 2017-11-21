import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Room } from '../room.model';
import { Building } from '../building.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
	@Output() roomWasSelected = new EventEmitter<Room>();
	@Input() building: Building;
  @Input() selectedRoom: Room;

  constructor() { }

  ngOnInit() {
  }

  onRoomSelected(room: Room) {
  	this.roomWasSelected.emit(room);
  }



}
