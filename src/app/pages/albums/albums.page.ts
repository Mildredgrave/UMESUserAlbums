import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonSpinner, IonTitle, IonToolbar, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { alertCircleOutline, arrowBackOutline, imagesOutline } from 'ionicons/icons';
import { Album } from '../../../models/album.model';
import { AlbumsService } from '../../services/albums-service';
import { DetailalbumsComponent } from '../../components/detailalbums/detailalbums.component';
import { DetailphotosComponent } from '../../components/detailphotos/detailphotos.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
  imports: [CommonModule, DetailalbumsComponent, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonSpinner, IonTitle, IonToolbar]
})
export class AlbumsPage implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = false;
  userId = 0;

  constructor(private readonly route: ActivatedRoute, private readonly albumsService: AlbumsService, private readonly modalController: ModalController) {
    addIcons({ alertCircleOutline, arrowBackOutline, imagesOutline });
  }

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.albumsService.getAlbumsByUser(this.userId).subscribe({
      next: (albums) => { this.albums = albums; this.loading = false; },
      error: () => { this.error = true; this.loading = false; },
    });
  }

  async openPhotos(album: Album): Promise<void> {
    const modal = await this.modalController.create({
      component: DetailphotosComponent,
      componentProps: { album },
      breakpoints: [0, 0.7, 0.95],
      initialBreakpoint: 0.7,
    });
    await modal.present();
  }

}
