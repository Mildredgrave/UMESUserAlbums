import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { businessOutline, mailOutline } from 'ionicons/icons';
import { User } from '../../../models/users.model';

@Component({
  selector: 'app-detailusers',
  templateUrl: './detailusers.component.html',
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText],
})
export class DetailusersComponent {
  @Input({ required: true }) user!: User;
  @Output() albumsSelected = new EventEmitter<User>();

  constructor() {
    addIcons({ businessOutline, mailOutline });
  }

}
