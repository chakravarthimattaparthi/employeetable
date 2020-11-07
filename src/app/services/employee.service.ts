import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs"
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(environment.baseUrl+"employee/getEmployees")
  }

  addNewEmployee(empData): Observable<any>{
    return this.http.post(environment.baseUrl+"employee/addEmployee", empData);
  }

  updateEmployee(updateData): Observable<any>{
    return this.http.post(environment.baseUrl+"employee/updateEmployee",updateData)
  }

  deleteEmployee(empId): Observable<any> {
    return this.http.get(environment.baseUrl+"employee/deleteEmployee?empId="+empId);
  }

}
