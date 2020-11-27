import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;  

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }
    get f() { return this.registerForm.controls; }  
    onSubmit() {
      this.submitted = true;
      
      if (this.registerForm.invalid) {
        return;
      }
      else{
        var myFormData = new FormData();
        const headers = new HttpHeaders();
        
        myFormData.append('name', this.registerForm.value.name);
        myFormData.append('email', this.registerForm.value.email);
        myFormData.append('phone', this.registerForm.value.phone);
        return this.http.post('http://localhost/comun/mypage.php/', myFormData).subscribe((res: Response) => {
          this.router.navigateByUrl('users');
        });        
      }
    }    

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email:['', Validators.required, Validators.email]
    });
  }

}
