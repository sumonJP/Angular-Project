import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
xyz:any;

  constructor(private myservice:MyserviceService) { this.xyz=this.myservice.data;}

  ngOnInit(): void {
  }

}
