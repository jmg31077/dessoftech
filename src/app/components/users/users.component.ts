import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { error } from 'protractor';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  data = [];

  constructor(private http: HttpClient) {
      this.http.get('http://localhost/comun/mypage.php').subscribe(data => {
        
        this.data.push(data);
        console.log(this.data);        
      },error => console.error(error));
     }
  
      refresh()
      {
        this.data.length=0;
        this.http.get('http://localhost/comun/mypage.php').subscribe(data => {
          this.data.push(data);
          
          console.log(this.data);
        }, error => console.error(error));
      }
      deleteuser(id)
      {
        var myFormData = new FormData();
          myFormData.append('Id', id);
          return this.http.post('http://localhost/comun/mypage.php', myFormData).subscribe((res: Response) => {
            alert("User has been delete successfully.");
            this.refresh();
          });
      }

  ngOnInit(): void {
  }

}
