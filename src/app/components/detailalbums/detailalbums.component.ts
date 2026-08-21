import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { imagesOutline } from 'ionicons/icons';
import { Album } from '../../../models/album.model';

@Component({
  selector: 'app-detailalbums',
  templateUrl: './detailalbums.component.html',
  styleUrls: ['./detailalbums.component.scss'],
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon],
})
export class DetailalbumsComponent {
  @Input({ required: true }) album!: Album;
  @Output() albumSelected = new EventEmitter<Album>();

  constructor() {
    addIcons({ imagesOutline });
  }

}
