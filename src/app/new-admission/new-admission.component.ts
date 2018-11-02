import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent implements OnInit {

  /*  creating the form */
  newStudentForm : FormGroup
  isSubmitForm : boolean = false;

  constructor(
    private _fb : FormBuilder
  ) { }

  ngOnInit() {
    this.newStudentForm = this._fb.group({
      firstname : new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      lastname : new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      class : new FormControl(null, [Validators.required,Validators.pattern('^[0-9][A-Z]$')]),
      yearofpassing : new FormControl(null, [Validators.required,Validators.min(1980),Validators.max(2017)]),
      percentage : new FormControl(null, [Validators.required,Validators.max(100),Validators.min(0)]),
    })
  } 

  /* submit the form */
  submitForm(){
    this.isSubmitForm = true;
  }

}
