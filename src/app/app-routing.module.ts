import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { FixedComponent } from './fixed/fixed.component';

const routes: Routes = [
  { path: 'users', component: TestComponent },
  { path: 'input-example', component: InputExampleComponent },
  { path: 'fixed', component: FixedComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public name = 'Jen';//test
}
