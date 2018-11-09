import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') form: NgForm;
    answer: string;
    defaultQuestion = 'pet';
    genders = ['male', 'female'];

    suggestUserName() {
        const suggestedName = 'Superuser';

        // this is one approach to set a value in the form but it's long and may reset all other changes
        // this.form.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: ''
        //     },
        //     secret: 'pet',
        //     questionAnswer: '',
        //     gender: 'male'
        // }
        // )

        // the better approach is to use patchValue because it overrides only parts of the form
        this.form.form.patchValue({
            userData: {
                username: suggestedName
            }
        })
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }

    // alternative option is using the local reference grabbed by ViewChild
    // onSubmit() {
    //     console.log(this.form);
    // }
}
