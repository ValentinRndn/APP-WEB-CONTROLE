import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  
})
export class AppComponent {
  title = 'app-web-controle';

  articleString: any = '';
  articleValue = '';
  totalValue = '';
  unite = '';
  value: string = '';
  tab: any[] = [];
  csvContent = 'data:text/csv;charset=utf-8,';


  
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

  sendToInventory() {
    let objet = {
      nom : this.articleString,
      unite: this.unite,
      quantite: this.totalValue,
    }
    this.tab.push(objet);
    localStorage.setItem('inventaire', JSON.stringify(this.tab));
  }

  deleteFromInventory(index: number) {
    this.tab.splice(index, 1);
    localStorage.setItem('inventaire', JSON.stringify(this.tab));
  }

  ngOnInit() {
    const storedInventory = localStorage.getItem("inventaire");
    if (storedInventory) {
      this.tab = JSON.parse(storedInventory);
    } else {
      this.tab = []; 
    }
  }

  
  exportCSV() {
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Inventaire des articles',
      useBom: true,
      noDownload: false,
      headers: ["Nom", "Quantités", "Unité"],
      eol: '\n'
    };
  
    new ngxCsv(this.tab, 'inventaire', options);
  }


}
