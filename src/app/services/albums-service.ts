import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { Photo } from '../../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
	private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

	constructor(private readonly http: HttpClient) {}

	getAlbumsByUser(userId: number): Observable<Album[]> {
		return this.http.get<Album[]>(`${this.apiUrl}/albums`, { params: { userId } });
	}

	getPhotosByAlbum(albumId: number): Observable<Photo[]> {
		return this.http.get<Photo[]>(`${this.apiUrl}/photos`, { params: { albumId } });
	}
}
