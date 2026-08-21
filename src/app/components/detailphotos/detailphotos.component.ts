import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonSpinner, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { alertCircleOutline, closeOutline } from 'ionicons/icons';
import { Album } from '../../../models/album.model';
import { Photo } from '../../../models/photo.model';
import { AlbumsService } from '../../services/albums-service';

@Component({
  selector: 'app-detailphotos',
  templateUrl: './detailphotos.component.html',
  styleUrls: ['./detailphotos.component.scss'],
  imports: [CommonModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonSpinner, IonTitle, IonToolbar],
})
export class DetailphotosComponent implements OnInit {
  @Input({ required: true }) album!: Album;
  photos: Photo[] = [];
  loading = true;
  error = false;

  constructor(private readonly albumsService: AlbumsService, private readonly modalController: ModalController) {
    addIcons({ alertCircleOutline, closeOutline });
  }

  ngOnInit(): void {
    this.albumsService.getPhotosByAlbum(this.album.id).subscribe({
      next: (photos) => { this.photos = photos; this.loading = false; },
      error: () => { this.error = true; this.loading = false; },
    });
  }

  close(): void {
    this.modalController.dismiss();
  }
}