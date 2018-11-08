import { Observable, Observer, Subscription, interval } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    myNumbers: Subscription;
    customSubscription: Subscription;

    constructor() { }

    ngOnInit() {
        const myNumbers = interval(1000)
            .pipe(
                map(
                    (data: number) => {
                        return data * 2;
                    } 
            )
            );
        this.myNumbers = myNumbers.subscribe(
            (number: number) => {
                console.log(`Number: ${number}`);
            }
        )

        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('first package');
            } ,2000);

            setTimeout(() => {
                observer.next('second package');
            } ,4000);

            setTimeout(() => {
                observer.complete();
            }, 4500);

            setTimeout(() => {
                observer.error('This failed baby!!');
            } ,5000);

            
        });

        this.customSubscription = myObservable.subscribe(
            (data: string) => {
                console.log(`Success: ${data}`);
            },
            (error: string) => {
                console.log(`Error: ${error}`);
            },
            () => {
                console.log('Complete!');
            }
        )
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.myNumbers.unsubscribe();
        this.customSubscription.unsubscribe();
    }

}
