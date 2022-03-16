import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-compoenent',
  templateUrl: './like-compoenent.component.html',
  styleUrls: ['./like-compoenent.component.css']
})
export class LikeCompoenentComponent  {

  isSelected: boolean = false;


  @Input('likesCount')
  likesCount!: number;
  @Input('isActive') isActive : boolean | undefined;

  onClick(){
    this.isSelected = !this.isSelected;
  }


  onclick(){
    this.isActive = !this.isActive;

    if(this.isActive) {
      this.likesCount ++;
      
    }
  }

 

}
