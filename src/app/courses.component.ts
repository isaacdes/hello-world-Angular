import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}Courses</h2>
        <ul>
            <li *ngFor="let course of courses2">
                {{course}}
            </li>
        </ul>
        
        <img src="{{ imageUrl}}" alt="image">

        <table>
            <tr>
            <!-- <td [colSpan]="colSpan"]></td> --> 
            <td ></td>
            </tr>
        </table>
        `
})

export class CoursesComponent {
    title ="List of ";
    courses = ["Course1", "Course2","Course3"];
    courses2: any;

    imageUrl ="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg";
    colSpan = 2;
    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses2 = service.getCorses();
    }
}