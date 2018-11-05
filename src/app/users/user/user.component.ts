import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
      this.user = {
          id: this.activeRoute.snapshot.params['id'],
          name: this.activeRoute.snapshot.params['name']
      };
      this.paramSubscription = this.activeRoute.params.subscribe(
          (params: Params) => {
              this.user.id = params['id'];
              this.user.name = params['name'];
          }
      )
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

        // we don't need to do this because it is happening automatically - it's for demonstration purposes only
        this.paramSubscription.unsubscribe();   
    }


}
