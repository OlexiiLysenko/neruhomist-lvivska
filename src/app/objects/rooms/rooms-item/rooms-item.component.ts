import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Room } from '../../room.model';
import { Building } from '../../building.model';

@Component({
  selector: 'app-rooms-item',
  templateUrl: './rooms-item.component.html',
  styleUrls: ['./rooms-item.component.css']
})
export class RoomsItemComponent implements OnInit {
	@Input() room: Room;
	@Output() roomSelected = new EventEmitter<void>();
  @Input() selectedBuilding: Building;



  roomsPersenkivka: Room[] = [
    new Room('3-кімнатна', 'Простора, затишна, з якісною шумоізоляцією. Зручна, компактна, з кухнею-студією та світлими вікнами. Площа балкону 4 кв.м. ', '../../../assets/interior-1026446_1920.jpg', 86, 13500, 4),
    new Room('2-кімнатна', 'Має простору вітальню, відокремлені туалет та ванну кімнату, балкон в кухні та спальні. Квартира має хорошу звукоізоляцію та утеплення.', '../../../assets/room-2587252.jpg', 64, 12400, 3),
    new Room('2-кімнатна', 'Кухня з балконом, шикарний вигляд з вікна, утеплені фасади та автономне опалення. В квартирі зроблений ремонт, чекає на свого власника.', '../../../assets/living-room-2583032.jpg', 65, 12000, 9)
  ];

  

	

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  	this.roomSelected.emit();
  }

}
