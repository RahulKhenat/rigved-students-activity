import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rfm',
  templateUrl: './rfm.component.html',
  styleUrls: ['./rfm.component.css']
})
export class RfmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname = new FormControl('');
  lastname = new FormControl('');

}
