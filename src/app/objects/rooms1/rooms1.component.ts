import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Room } from '../room.model';
import { Building } from '../building.model';

@Component({
  selector: 'app-rooms1',
  templateUrl: './rooms1.component.html',
  styleUrls: ['./rooms1.component.css']
})
export class Rooms1Component implements OnInit {
	// @Output() roomWasSelected = new EventEmitter<Room>();
 //  @Input() building: Building;
 //  @Input() room: Room;

    @Input() room: Room;
  @ Output() roomSelected = new EventEmitter<void>();
  @Input() selectedBuilding: Building;
  @Input() building: Building;

	roomsAGK: Room[] = [
    new Room('1-кімнатна', 'Знаходиться неподалік від центру. Зручна, компактна, з кухнею-студією та світлими вікнами. Площа балкону 4 кв.м. ', '../../../../assets/house-2567680.jpg', 37, 11500, 1),
    new Room('3-кімнатна', 'Має простору вітальню, відокремлені туалет та ванну кімнату, балкон в кухні та спальні. Квартира має хорошу звукоізоляцію та утеплення.', '../../../../assets/apartment-2094666.jpg', 82, 12400, 3),
    new Room('2-кімнатна', 'Кухня з балконом, шикарний вигляд з вікна, утеплені фасади та автономне опалення. В квартирі зроблений ремонт, чекає на свого власника.', '../../../../assets/couch-1835923.jpg', 65, 12000, 8),
    new Room('2-кімнатна', 'Євроремонт та автономне опалення. Ліфт, прекрасне сполучення із центром міста, розвинена інфраструктура: поряд знаходиться зупинка та гіпермаркет.', '../../../../assets/living-room-2732939.jpg', 82, 11500, 6),
  ];

  constructor() { }

  ngOnInit() {
  }

onSelected1() {
    this.roomSelected.emit();
  }

  // onRoomSelected(room: Room) {
  // 	// this.roomWasSelected.emit(room);
  //   this.roomSelected.emit();
  // }

}


