import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit {

  post: Array<any> = [];

  constructor() { }
  userForm = new FormGroup({

    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),

  });
  @ViewChildren(ChildrenComponent) children!: QueryList<ChildrenComponent>
  ngAfterViewInit(): void {
    console.log(this.children)
    this.children.toArray();
    this.children.length;
    // this.children.forEach(x => x.data === this.userForm.value)
  }
  submitForm() {

   var i= this.post.push(this.userForm.value)
        this.userForm.reset();
  }
}
