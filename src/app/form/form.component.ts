import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() passEmployeeData = new EventEmitter<any>();

  first_name: any = ""
  last_name: any = ""
  email: any = ""
  id: any = ""

  employeeSubmit() {
    let employee = {
      "first_name": this.first_name,
      "last_name": this.last_name,
      "email": this.email,
      "id": this.id
    }
    this.passEmployeeData.emit(employee);
    this.first_name = ""
    this.last_name = ""
    this.email = ""
    this.id = ""
  }



  constructor() { }

  ngOnInit(): void {
  }

}
