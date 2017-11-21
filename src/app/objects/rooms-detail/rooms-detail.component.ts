import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-rooms-detail',
  templateUrl: './rooms-detail.component.html',
  styleUrls: ['./rooms-detail.component.css']
})
export class RoomsDetailComponent implements OnInit {
	@Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

}
