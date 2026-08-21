import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonRow, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { alertCircleOutline, businessOutline, mailOutline, peopleOutline } from 'ionicons/icons';
import { User } from '../../../models/users.model';
import { UsersService } from '../../services/users-service';
import { DetailusersComponent } from '../../components/detailusers/detailusers.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  imports: [CommonModule, DetailusersComponent, FormsModule, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonRow, IonSpinner, IonText, IonTitle, IonToolbar],
})
export class UsersPage implements OnInit {
  users: User[] = [];
  searchTerm = '';
  loading = true;
  error = false;

  constructor(private readonly usersService: UsersService, private readonly router: Router) {
    addIcons({ alertCircleOutline, businessOutline, mailOutline, peopleOutline });
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe({
      next: (users) => { this.users = users; this.loading = false; },
      error: () => { this.error = true; this.loading = false; },
    });
  }

  get filteredUsers(): User[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.users;
    return this.users.filter((user) => [user.name, user.username, user.email].some((value) => value.toLowerCase().includes(term)));
  }

  viewAlbums(user: User): void {
    this.router.navigate(['/albums', user.id]);
  }

}


