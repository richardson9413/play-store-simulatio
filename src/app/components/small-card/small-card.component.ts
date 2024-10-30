import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
 @Input()
 smallGame:any = ""
 @Output()
  gameSelected = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {

  }
  ActionSmall(){
    this.gameSelected.emit(this.smallGame)
  }
}
