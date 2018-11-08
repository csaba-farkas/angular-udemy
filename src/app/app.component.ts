import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    userOneActivated = false;
    userTwoActivated = false;

    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.usersService.userActivated.subscribe(
            (id: number) => {
                if (id === 1) {
                    this.userOneActivated = true;
                } else if (id === 2) {
                    this.userTwoActivated = true;
                }
            }
        )    
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.usersService.userActivated.unsubscribe();
    }
}
