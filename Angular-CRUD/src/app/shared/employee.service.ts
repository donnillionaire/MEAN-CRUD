import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

/*import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Variables inside the service class
selectedEmployee: Employee;
employees: Employee[]; // An array of employees
readonly baseURL = 'http://localhost:3000/employees' // because we need to make the POST  request in this URL

  constructor(private http: HttpClient ) { }
  postEmployee(emp: Employee) {
    /* in order to make the post request, we have to make an
   http request to the NodeJs project (HttpClient) But first we need to
   inject the  HttpClient client in the constructor
   */
/*return this.http.post(this.baseURL, emp) // now we can call this function inside the employees component
}




getEmployeeList(){
	return this.http.get(this.baseURL)
}

putEmployee(emp: Employee){
	return this.http.put(this.baseURL + `/${emp._id}`, emp)
}

deleteEmployee(_id: string){
	return this.http.delete(this.baseURL + `/${_id}`)
}

}


*/