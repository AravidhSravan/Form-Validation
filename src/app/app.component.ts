import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{
  valForm: FormGroup;
  showAge=false;
  ngOnInit() {
  this.valForm = new FormGroup({
    'name' : new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    'gender':  new FormControl(null,Validators.required),
    'country' : new FormControl(null, Validators.required),
    'city' : new FormControl(null, Validators.required),    
    'age' : new FormControl(null, Validators.required),
  });
  }
  clickSubmit() {
    console.log(this.valForm.value);
    this.valForm.reset();
  }
  get name() {
    return this.valForm.get('name');
  }
  get country() {
    console.log("country",this.valForm.get('country').value)
    if(this.valForm.get('country').value =='USA' || this.valForm.get('country').value =='India'|| this.valForm.get('country').value =='Canada'){
      this.showAge = true;
    }
    return this.valForm.get('country');
  }
  get city() {
    return this.valForm.get('city');
  }
  get age() {
    return this.valForm.get('age');
  }
  get gender() {
    return this.valForm.get('gender');
  }
}