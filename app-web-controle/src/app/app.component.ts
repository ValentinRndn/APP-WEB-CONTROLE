import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-web-controle';

  articleString: any = '';
  articleValue = '';
  totalValue = '';
  value: string = '';

  addArticle(value: string) {
    this.articleValue += value;
  }

  Evaluate() {
    try {
      this.totalValue = eval(this.articleValue);
    } catch (error) {
      console.error("Erreur :", error);
    }
  }

  clearInput() {
    this.articleString = '';
    this.articleValue = '';
    this.totalValue = '';
  }
}
