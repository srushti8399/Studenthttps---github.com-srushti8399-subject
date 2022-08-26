import { Component, OnInit } from '@angular/core';
import { NameServices } from '../Services/service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  name3:string='';

  constructor(private nameser:NameServices) { }

  ngOnInit(): void {
    this.nameser.Name$.subscribe((name:string)=>{
      this.name3=name})
  }

}
