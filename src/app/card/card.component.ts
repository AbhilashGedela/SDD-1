import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardMember: any ={}

  @Output() removeEmployeeData = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  removeData(employeeData:any){
    this.removeEmployeeData.emit(employeeData.employeeId)
  }



}
