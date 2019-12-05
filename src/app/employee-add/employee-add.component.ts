import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../shared/employee-service.service';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  emp: Employee=new Employee();
  constructor(private toastr: ToastrService, private service: EmployeeServiceService,
    private authservice: AuthService, private formBuilder: FormBuilder,
    private router: Router) { }
employeeForm:FormGroup;
  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.compose([Validators.required])],
      basicSalary: ['', Validators.compose([Validators.required])],
      hra: ['', Validators.compose([Validators.required])],
      travelallowance: ['', Validators.compose([Validators.required])]
    });
   
  }

  addemp() {
    this.emp.empname = this.employeeForm.controls.employeeName.value;
    this.emp.basicsal = this.employeeForm.controls.basicSalary.value;
    this.emp.hrasal = this.employeeForm.controls.hra.value;
    this.emp.travelallowance = this.employeeForm.controls.travelallowance.value;

    this.service.addEmp(this.emp).subscribe(data => { 

        this.toastr.success('Employee Added Succesfully');
      //  this.router.navigateByUrl('/list');
      
      
    });

}
}
