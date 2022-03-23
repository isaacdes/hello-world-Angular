import { Component } from '@angular/core';
import { StarCahngedEventArgs } from './star/star.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title ",
    isStar: false
  }

  onStarChanged(eventArgs: StarCahngedEventArgs) {
    console.log("Star has been changed: ", eventArgs);
    // Star has been changed:  true (output)
  }

  tweet = {
    body: "Tweet Like",
    isLiked: false,
    likesCount: 0
  }

  // courses =["Physics","Maths","Computer Science"];
  courses =[
    { id: 1, name: 'Physics'},
    { id: 2, name: 'Maths'},
    { id: 3, name: 'Computer Science'},
  ];

  viewMode ='map'

  onAdd(){
    this.courses.push({id: 4, name: 'Chemistry'});
  }

  onRemove(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  course2: any;

  loadCourses(){
    this.course2 =[
      { id: 1, name: 'Physics'},
      { id: 2, name: 'Maths'},
      { id: 3, name: 'Computer Science'},
    ];
  }

  trackCourse(index:any, course:any){
    return course ? course.id: undefined;
  }

  canSave = true;
  onClickBtn(){
    this.canSave = !this.canSave;
  }

  task = {
    title: 'Review Applications',
    assignee: null
  }
}
