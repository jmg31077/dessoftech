import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desoftech';
  data = [];
  constructor (private http: HttpClient) {
    this.http.get('http://localhost/comun/mypage.php').subscribe(data =>{
      this.data.push(data);
      console.log(this.data);
    }, error => console.error(error));
  }
}
