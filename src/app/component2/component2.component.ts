import { Component, OnInit } from '@angular/core';
import { NameServices } from '../Services/service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  name2:string='';

  constructor(private nameser:NameServices) { }

  ngOnInit(): void {
    this.nameser.Name$.subscribe((name:string)=>{
      this.name2=name})
  }

}
