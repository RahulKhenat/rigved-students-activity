import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private _service:UserService) { }

  ngOnInit(): void {
  }
  data: any | undefined=undefined

  _id=new FormControl('')
  handleGet(id:number){
    console.log(id)
    this._service.deleteUser(id).subscribe((da)=>{
      this.data=da;
    })
  }

}
