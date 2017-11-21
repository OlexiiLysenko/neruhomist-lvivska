import { Component, OnInit } from '@angular/core';
import { News } from './news.model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	selectedArticle: News;
	// article: News;

  constructor() { }

  ngOnInit() {
  }

}
