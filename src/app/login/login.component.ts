import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit(): void {
  }
  constructor(private router:Router,private myservice:MyserviceService){}
  title = 'ppp';
  id: any;
  password: any;
  user: any;
  
  t:any[]=[];

  m1() {
    this.t=this.myservice.getdata().slice();
    this.user = this.t.find(x => (x.id == this.id) && (x.password==this.password));
    if (this.user != null) {
      
      this.myservice.data=this.user;
      this.router.navigateByUrl("success");

      // this.router.navigate(["success"]);

// alert("yes");

    } else {
      
      this.router.navigateByUrl("fail");

      // alert("No");
    }

  }

}
