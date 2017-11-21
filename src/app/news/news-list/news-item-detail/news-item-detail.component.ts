import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../news.model';

@Component({
  selector: 'app-news-item-detail',
  templateUrl: './news-item-detail.component.html',
  styleUrls: ['./news-item-detail.component.css']
})
export class NewsItemDetailComponent implements OnInit {
	@Input() article: News;

  constructor() { }

  ngOnInit() {
  }

}
