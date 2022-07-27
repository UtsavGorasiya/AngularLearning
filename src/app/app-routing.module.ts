import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{
  path:'',
  component:FirstComponentComponent
},
{
  path:'test',
  component:TestComponent
},
{
  path:'children',
  component:ChildrenComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
