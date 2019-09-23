
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

// getting employee list
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[]; // casting the response as employee array
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

/*import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // injecting the service class
  providers: [EmployeeService]

})
export class EmployeeComponent implements OnInit {

 // adding a constructor parameter
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() { // this ngOnInit lifecycle hook will fully be invoked when the component is fully loaded
    this. resetForm();
  }

resetForm(form?: NgForm) { // we cannot pass values into this parameter so we make it nullable (form?)
  if (form) {
    form.reset();
    this.employeeService.selectedEmployee = {
      //  Here we have set the selectedEmployee property with and object containing empty or null values for the following properties
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null

      }
  }


  onSubmit (form: NgForm) {
  // insert a new employee to the mongo DB
  // the parameter is the object of the employee containing details of the new employee
  this.employeeService.postEmployee(form.value).subscribe((res) => { this.resetForm(form);
   // toast request
   M.toast({ html: 'Saved successfully', classes: 'rounded'})

  })

  }





}

}
*/