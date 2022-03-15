// import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  // inputs: [isStar] //not working


  // encapsulation: ViewEncapsulation.Emulated 
})
export class StarComponent  {

  @Input('is-isStar') isSelected : boolean | undefined;
  @Output('change') click = new EventEmitter();

  
  onClick() {
    this.isSelected = !this.isSelected;
    // this.click.emit(this.isSelected);

    this.click.emit({newValue: this.isSelected});
  }

  
}

export interface StarCahngedEventArgs {
  newValue : boolean
}
