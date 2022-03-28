import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethod = [
    { id: 1, name: "Email" },
    { id: 2, name: "phone" }
  ]

  log(firstname: any) {
    console.log(firstname);
  }

  submit(f: any) {
    console.log(f.value.comment);
    console.log(f);
  }

}
