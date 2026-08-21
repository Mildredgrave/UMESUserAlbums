import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/users.model';


@Injectable({ providedIn: 'root' })
export class UsersService {
	private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

	constructor(private readonly http: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${this.apiUrl}/users`);
	}
}
