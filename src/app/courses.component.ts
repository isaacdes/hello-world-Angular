import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms'

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
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue':'white'">Save [Style binding]</button>

        <div (click)="onDivClicked()">
        <button class="onclick" (click)="onSave($event)">Save (Onclick)</button>
        </div>

        <!-- Event filtering -->
        <input (keyup.enter)="onKeyUp()" />

        <!-- Template Variables -->
        <input #name (keyup.enter)="onKeyUpTemplate(name.value)" />

        <!-- Two-Way Binding -->
        <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUpTwo()" /> -->
        <!-- not working -->

        <input [(ngModel)]="email" (keyup.enter)="onKeyUpTwo()" />
       
        <br>
        <!-- Pipes -->
        {{course.title | uppercase}} <br>
        {{course.students | number}} <br>
        {{course.rating | number:'1.2-2'}} <br>
        {{course.price | currency:'INR':true:'3.2-2'}} <br>
        {{course.releaseDate | date:'shortDate'}}

        <br>
        <!-- Custom pipes -->
        {{text | summary:10}}

        <br>
        <i class="bi bi-alarm"></i>
        <i class="bi bi-star"></i>
        <span class="bi bi-star"></span>
        <span class="glyphicon glyphicon-star"></span>

       


        `
})

export class CoursesComponent {
    title ="List of ";
    courses = ["Course1", "Course2","Course3"];
    courses2: any;

    imageUrl ="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg";
    colSpan = 2;
    isActive = true;

    email ="me@example.com";

    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    onSave($event: any){
        $event.stopPropagation(); //to stop event bubling
        console.log("OnSave is clicked!", $event);
    }

    onDivClicked(){
        console.log("Div was clikced");
    }

    onKeyUp(){
        console.log("Enter has been pressed")

    }

    onKeyUpTemplate(name: string){
        console.log(name);
    }

    onKeyUpTwo(){
        console.log(this.email);
    }

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses2 = service.getCorses();
    }

    course ={
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30213,
        price: 190.95,
        releaseDate: new Date(2022,3,1)
    }
}