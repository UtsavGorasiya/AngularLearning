import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SecondComponentComponent } from '../second-component/second-component.component';

@Component({
  selector: 'app-first-component',
    templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements AfterViewInit {


  constructor() { }
  public update = new FormControl('');
  public name = new FormControl('');    

  @ViewChild('inc') nameElementRef!: ElementRef;
  @ViewChild(SecondComponentComponent) child!: SecondComponentComponent;
  @ViewChild(SecondComponentComponent) child2!: SecondComponentComponent;
  
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    //  console.log(this.child)
    // console.log(this.child2)
    console.log(this.nameElementRef)
  }
  onClickI() {
    this.child.count++;
  }
  onClickD() {
    this.child.count--;
  }
  clickme() {
    var i = this.update.value;
    this.child2.name.setValue(i);
  }
}