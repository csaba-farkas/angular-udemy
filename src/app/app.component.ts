import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    genders = ['male', 'female'];
    signupForm: FormGroup;
    forbiddenUsernames = ['Satan', 'Hitler'];

    ngOnInit(): void {
        this.signupForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),  // be careful not executing the validator methods with parentheses
                'email': new FormControl(null, [Validators.required, Validators.email])
            }),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([])
        });
    }

    onAddHobby() {
        (<FormArray>this.signupForm.get('hobbies')).push(
            new FormControl(null, Validators.required)
        )
    }

    onSubmit() {
        console.log(this.signupForm);
        console.log(this.signupForm.value.username);
        console.log(this.signupForm.value.email);
        console.log(this.signupForm.value.gender);
    }

    // pay attention to the return type: key -value pairs
    forbiddenNames(control: FormControl): {[s: string]: boolean} {
        if (this.forbiddenUsernames.indexOf(control.value) > -1) {
            // is username contains control.value => return an object with a key value pair
            return {'nameIsForbidden': true};
        }
        // if valid => return null or don't return anything 
        return null;
    }
}
