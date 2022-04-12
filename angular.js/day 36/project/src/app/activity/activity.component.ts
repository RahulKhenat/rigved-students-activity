import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  myform! : FormGroup
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      firstName: ['',Validators.required ],
      lastName: ['',Validators.required],
      address: this.fb.group({
        street:['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  };
onSubmit(){
  console.log(this.myform.value)
}

}
