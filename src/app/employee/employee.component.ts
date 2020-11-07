import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public employeeList: any;
  public displayedColumns: string[] = ['firstName', 'lastName'];
  public tempEmployee: any;
  rowIndex;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employeeList;
    this.empService.getEmployees().subscribe((data) => {
      this.employeeList = data;
      console.log(this.employeeList);
    })
  }
  addEmployee(empFormData) {
    let empData = empFormData.value;
    console.log(empData.firstName);
    let empFirstName = empData.firstName;
    let empLastName = empData.lastName;
    if (empFirstName != null && empFirstName != "" && empLastName != "" && empLastName != null) {
      this.empService.addNewEmployee(empData).subscribe((data) => {
        let firstName = data.firstName;
        let lastName = data.lastName
        let employee = {
          firstName,
          lastName
        }
        this.employeeList.push(data);
      })
    }
    empFormData.form.reset();
  }
  editEmployee(i) {
    this.tempEmployee = Object.assign({}, this.employeeList[i])
    this.rowIndex = i;
  }
  confirmEmployee(i) {
    let employeeObject = {
      id: this.employeeList[i]._id,
      firstName: this.employeeList[i].firstName,
      lastName: this.employeeList[i].lastName
    }
    this.empService.updateEmployee(employeeObject).subscribe((data) => {
      this.rowIndex = -1;
    })
  }
  cancelEmployee(i) {
    this.employeeList.splice(i, 1,this.tempEmployee)
    this.rowIndex = -1;
  }
  deleteEmployee(i) {
    let id = this.employeeList[i]._id;
    this.empService.deleteEmployee(id).subscribe((data) => {
      this.employeeList.splice(i, 1);
    })
  }
}
