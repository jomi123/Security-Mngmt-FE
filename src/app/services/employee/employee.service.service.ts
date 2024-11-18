/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, UpdateAdmin } from 'src/app/models/user-manage-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) {}

  getUsers(employeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.serverConfig.baseUrl}/api/Admins/GetAllAdmins/${employeeId}`);
  }
  createUser(data: any): Observable<Admin> {
    return this.http.post<Admin>(`${environment.serverConfig.baseUrl}/api/Admins/AddAdmin`, data);
  }

  updateUser(id: number, user: UpdateAdmin): Observable<UpdateAdmin> {
    return this.http.put<UpdateAdmin>(`${environment.serverConfig.baseUrl}/api/Admins/UpdateAdmin/${id}`, user);
  }
}
