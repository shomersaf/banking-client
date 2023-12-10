import { Component, Input } from '@angular/core';
import { IAccount, ICar } from 'src/app/models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() car:ICar | undefined;
 @Input() account:IAccount | undefined;
  formatDate(date: String){
    return new Date(date.toString()).toLocaleDateString()
  }
}
