import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    submitted = false;
    
    defaultSubscription = 'advanced';
    subscribedUser = {
        email: '',
        subsciptionType: '',
        password: ''
    }
    onSubmitForm(form: NgForm) {
        this.submitted = true;
        this.subscribedUser.email = form.value.mail;
        this.subscribedUser.subsciptionType = form.value.subscriptionType;
        this.subscribedUser.password = form.value.password;

        form.reset();
        form.form.controls['subscriptionType'].setValue('advanced');
    }
}
