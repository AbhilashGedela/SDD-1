import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDD-1';

  inputMobilePrice: any = "";

  mobileList = [
    {
      "brand": "oneplus",
      "model": "9r.jpg",
      "price": 19500,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "samsung",
      "model": "a20s.jpg",
      "price": "20200",
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "vivo",
      "model": "f22.jpg",
      "price": 25000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "vivo",
      "model": "f42.jpg",
      "price": 24000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "samsung",
      "model": "galaxys22.jpg",
      "price": 32500,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone11.jpg",
      "price": 59000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone12.jpg",
      "price": 64000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone12mini.jpg",
      "price": 56000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone12pro.jpg",
      "price": 110000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone13.jpg",
      "price": 78000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone13pro.jpg",
      "price": 119000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone14.jpg",
      "price": 100000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone14max.jpg",
      "price": 130000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "iphone",
      "model": "iphone14pro.jpg",
      "price": 119000,
      "storege": "128GB",
      "ram": "8GB",
    },
    {
      "brand": "samsung",
      "model": "m50.jpg",
      "price": 28000,
      "storege": "128GB",
      "ram": "8GB"
    },

  ]
  mobileSelection: any = [];
  constructor(private httpClient: HttpClient) {
    // this.mobileSelection = this.mobileList
    this.employeeeData = this.employeeDetails
  }

  onClickOutput(event: any) {
    this.mobileSelection = this.mobileList.filter(mobi => mobi.price >= this.inputMobilePrice);
  }

  inputData: any = "";
  secondInputData: any = 120.5;
  outPut: any = "";
  onCalculate(event: any) {
    this.outPut = this.inputData * this.secondInputData
  }
  addDetails: any = [];

  onClickAdd(event: any) {
    let Add = {
      "Nolitres": this.inputData,
      "CostperLitre": this.secondInputData,
      "TotalCost": this.outPut
    }
    this.addDetails.push(Add);
  }

  inputFirstName: any = ""
  inputLastName: any = ""
  inputMobileNumber: any = ""
  inputAddress1: any = ""
  inputAddress2: any = ""
  inputPin: any = ""
  inputState: any = ""
  inputArea: any = ""

  submittedDetails: any = []
  onSubmit(event: any) {
    let formDetails = {
      "inputFirstName": this.inputFirstName,
      "inputLastName": this.inputLastName,
      "inputMobileNumber": this.inputMobileNumber,
      "inputAddress1": this.inputAddress1,
      "inputAddress2": this.inputAddress2,
      "inputPin": this.inputPin,
      "inputState": this.inputState,
      "inputArea": this.inputArea
    }

    this.submittedDetails.push(formDetails);
    this.inputFirstName = ""
    this.inputLastName = ""
    this.inputMobileNumber = ""
    this.inputAddress1 = ""
    this.inputAddress2 = ""
    this.inputPin = ""
    this.inputState = ""
    this.inputArea = ""
  }
  removeCard(form: any) {
    this.submittedDetails = this.submittedDetails.filter((x: any) => x !== form);
  }

  //11/12/2022---create array of employee details

  employeeDetails: any = []
  employeeeData: any

  recieveData(obj: any) {
    this.employeeDetails.push(obj);
  }

  ngOnInit() {
    this.httpClient.get('https://reqres.in/api/users?page=1').subscribe(
      (response: any) => {
        this.employeeeData = response.data
      },
      (error: any) => {
        return Error
      }
    )
  }
  nextPage() {
    this.httpClient.get('https://reqres.in/api/users?page=2').subscribe(
      (response: any) => {
        this.employeeeData = response.data
      },
      (error: any) => {
        return Error
      }
    )
  }

  removeData(employeeId: any) {
    this.employeeeData = this.employeeeData.filter((x: any) => x.employeeId !== employeeId)
  }


  // removeData(obj: any) {
  //   this.employeeDetails = this.employeeDetails.filter((remove: any) => remove.employeeId !== obj.employeeId)
  // }

  // filterWithLetter() {
  //   this.employeeDetails = this.employeeDetails.filter((employee: any) => employee.employeeName.toLowerCase().startsWith("a"))
  //   console.log(this.employeeDetails)
  // }

  // editDetails(person: any) {
  //   this.employeeName = person.employeeName,
  //   this.employeeId = person.employeeId,
  //   this.salary = person.salary,
  //   this.designation = person.designation
  // }

  //counter
  counters: any = []
  i = 1

  addedCounter() {
    this.counters.push({ "id": this.i++, value: 0 })
  }

  deleteItem(id: any) {
    this.counters = this.counters.filter((xx: any) => xx.id != id)
  }
//timer

watchTimer:any=[]
addedTimer(){
  this.watchTimer.push({})
}
  

}
