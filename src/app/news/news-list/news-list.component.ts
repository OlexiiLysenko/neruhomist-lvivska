import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
	@Output() articleWasSelected = new EventEmitter<News>();
	@Input() article: News;

	articles: News[] = [
		new News('Відкриття', 'Відкриття сайту нерухомості', 'Щойно розпочато повноцінну роботу нашого ресурсу! Вітаємо перших відвідувачів - Ви для нас особливо цінні!', 'https://cdn.pixabay.com/photo/2015/11/16/22/39/balloon-1046658_1280.jpg'),
		new News('Перші кроки', 'Спеціально для Вас ми підготували унікальні пропозиції!', ' Для того, щоб отримати задоволених клієнтів ми готові на все! Найвигідніші умови придбання нерухомості, найякісніше обслуговування та багато іншого сьогодні саме для Вас, наші прекрасні клієнти!', '../../../assets/relaxing-1979674_1920.jpg'),
		new News('Наші переваги', 'Чому варто працювати саме з нами?', 'І дійсно, у чому суть? Чому саме ми Ваш вибір? Адже різноманітних фірм у сфері послуг, пов\'язаних із нерухомістю дуже багато!', 'https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg'),
		new News('Що Вам потрібно зробити', 'Для того, щоб розпочати роботу з нами Вам буде потрібно...', 'Лише здійснити один звінок на наш номер, або залишити свої данні у формі для контактних данних. Далі за діло беруться справжні фахівці, які самі зв\'яжуться із вами та проведуть по всіх етапах від початку і до придбання нерухомості.', 'https://cdn.pixabay.com/photo/2017/06/20/22/14/men-2425121_1280.jpg'),
	];

  constructor() { }

  ngOnInit() {
  }

  onArticleSelected(article: News) {
  	this.articleWasSelected.emit(article);

  }

}
