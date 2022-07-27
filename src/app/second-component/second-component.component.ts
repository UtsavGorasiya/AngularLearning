import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Temp } from '../model/temp';


@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

 
   public update =new FormControl('');
  public name=new FormControl('');
 
  constructor() { }

  public count:number = 0;
  ngOnInit(): void {

  }
  
}
