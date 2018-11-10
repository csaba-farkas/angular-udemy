import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    genders = ['male', 'female'];
    signupForm: FormGroup;

    ngOnInit(): void {
        this.signupForm = new FormGroup({
            'username': new FormControl(null, Validators.required), // be careful not executing the validator methods with parentheses
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'gender': new FormControl('male')
        });
    }

    onSubmit() {
        console.log(this.signupForm);
        console.log(this.signupForm.value.username);
        console.log(this.signupForm.value.email);
        console.log(this.signupForm.value.gender);
    }
}
