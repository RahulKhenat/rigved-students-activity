import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: UserService, private _router: Router) { }

  ngOnInit(): void {
  }


  profileForm: FormGroup = this.builder.group({
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phoneNo: ['', Validators.required],
    emailId: ['', Validators.required],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required]
    })
  })

  saveForm() {
    this.service.save(this.profileForm.value);
    this._router.navigate(['success', this.profileForm.value.name])
  }



}