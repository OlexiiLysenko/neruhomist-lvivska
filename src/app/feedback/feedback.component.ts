import { Component, OnInit } from '@angular/core';
import { Feedback } from '../shared/feedback.model';
	
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
	feedbacks: Feedback[] = [
		new Feedback('Олександр П.', 'Був приємно здивований - ви дійсно вгадуєте думки, в результаті отримав саме те, що шукав. Дякую.'),
		new Feedback('Марина', 'Сама співпрацюю з клієнтами і знаю як інколи важко догодити особливо вибагливим (таким як я) - дякую за ваше терпіння, з такою підготовкою у вас все буде добре!'),
    new Feedback('Ляна', 'Моя мама тепер живе окремо - дякую за швидкий пошук і врахування моїх вимог щодо житла, не шкодую що звернулася.'),
    new Feedback('Михаель', 'Приємно було співпрацювати - цікаво було розглядати різні варіанти, головне, що в решті решт визначились і швидко все оформили. Подяка.'),
	];

  constructor() { }

  ngOnInit() {
  }

  onFeedbackAdded(feedback: Feedback) {
  	this.feedbacks.push(feedback);
  }

}
