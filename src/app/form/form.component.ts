import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface MyForm {
  name : string;
  email : string;
  state : Number;
  city : Number;
  contact: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent implements OnInit {
  
  formValues: MyForm;

  myForm: FormGroup;
  
  isSubmitted: boolean = false;

 

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.formValues.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(this.formValues.email, [
        Validators.email,
        Validators.required,
      ]),
      state: new FormControl(this.formValues.state, [
        Validators.required,
      ]),
      city: new FormControl(this.formValues.city, [
        Validators.required,
      ]),
      contact: new FormControl(this.formValues.contact, [
        Validators.required,
        Validators.minLength(10),
      ])
    });
  
  }
  
  get name() { return this.myForm.get('name'); }
  
  get power() { return this.myForm.get('power'); }
}

  

 
  

