import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) { 
    userService.userObservable.subscribe((newUser) =>{
      this.user = newUser;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return !!this.user.token; // Check if token exists
  }
}
