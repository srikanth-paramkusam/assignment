import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home', component: StudentMarksComponent },
  { path:'new', component: NewAdmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
