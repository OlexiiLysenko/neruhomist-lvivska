import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Feedback } from '../../shared/feedback.model';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('textInput') textInputRef: ElementRef;
  @Output() feedbackAdded = new EventEmitter<Feedback>();

  constructor() { }

  ngOnInit() {
  }

  onAddFeedback() {
  	const feedbackName = this.nameInputRef.nativeElement.value;
  	const feedbackText = this.textInputRef.nativeElement.value;
  	const newFeedback = new Feedback(feedbackName, feedbackText);
  	this.feedbackAdded.emit(newFeedback);
  }

}
