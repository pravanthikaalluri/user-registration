import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { User } from '../models/users';
=======
import { User } from '../models/user-model';
>>>>>>> aeeb075339d2d157feabb957b1e58acfadef7d97
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile: User | undefined;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProfileList();
  }

  getProfileList() {
    this.apiService.getUserProfileList().subscribe(res => {
      this.userProfile = res as User;
    })
  }

}
