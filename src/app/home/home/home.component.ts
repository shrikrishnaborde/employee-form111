import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required]
      }),
      lastName: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required,Validators.email]
      }),
      gender: new FormControl('', {
        validators: [Validators.required]
      }),
      address1: new FormControl('', {
        validators: [Validators.required]
      }),
      address2: new FormControl(''),
      city: new FormControl('', {
        validators: [Validators.required]
      }),
      state: new FormControl('', {
        validators: [Validators.required]
      }),
      zip: new FormControl('', {
        validators: [Validators.required]
      }),
      country: new FormControl('', {
        validators: [Validators.required]
      })
    });

  }

  submitForm(){
    this.http.post('sduw23d',this.form.value).subscribe(() => {
      console.log('success')
    },(error) => {
      console.log(error,this.form.value)
    })
  }
}
