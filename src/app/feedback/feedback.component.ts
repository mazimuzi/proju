import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Question } from './question';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  questions: Question[] = [
    new Question('Kysymys 1'),
    new Question('Kysymys 2'),
    new Question('Kysymys 3')
  ];

  onSliderChange(question: Question, value: number) {
    question.setFeedback(value);
  }
}
