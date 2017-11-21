import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { News } from '../../news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
	@Input() article: News;
	@ Output() articleSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  	this.articleSelected.emit();
  }

}
