import { SortPipe } from './../pipes/sort.pipe';
import { Student, StudentResult } from './../interfaces/student';
import { Component, OnInit } from '@angular/core';
import { StudentMarksService } from '../services/student-marks.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css'],
  providers: [ SortPipe ]
})
export class StudentMarksComponent implements OnInit {

  /* initializations */
  isDataLoaded: boolean;
  studentsList: StudentResult[] = [];
  toperMarks : number =0;
 
  constructor(
    private _studentService: StudentMarksService
  ) { }

  ngOnInit() {
    this.getStudentsMarks();
  }

  /* to fetch the data from the students list */
  getStudentsMarks() {
    this._studentService.getData().subscribe(
      (res) => {
        res.forEach((e) => {
          let student: StudentResult = {
            status: "pass",
            name: e.name,
            rollNumber: e.rollNumber,
            totalMarks: 0
          };
          Object.values(e.marks).forEach((subject) => {
            student.totalMarks += parseInt(subject);
            if (subject < 20)
              student.status = "fail";
          })
          if(student.status === 'pass' && student.totalMarks > this.toperMarks)
            this.toperMarks = student.totalMarks;
          this.studentsList.push(student);
        })
        this.isDataLoaded = true;
      }, (err) => {
        this.isDataLoaded = false
        console.log("Error Occured While Loading The Data");
      }
    )
  }

}
