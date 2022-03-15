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

}
