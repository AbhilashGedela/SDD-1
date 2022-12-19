import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counter:any
  @Output() deleted= new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  // counter:any=0

  increaseButton(){
    this.counter.value=this.counter.value+1
  }
  decreaseButton(){
    if(this.counter.value>0)
    this.counter.value=this.counter.value-1
  }
  resetButton(){
    this.counter.value=0
  }
  delete(){
    this.deleted.emit(this.counter.id);
  }

}
