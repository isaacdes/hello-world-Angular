import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  category = [
    { id: 1, name: "Theory" },
    { id: 2, name: "Practical" }
  ]

}
