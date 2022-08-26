import { Component, OnInit } from '@angular/core';
import { NameServices } from '../Services/service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  name4:string='';

  constructor(private nameser:NameServices) { }

  ngOnInit(): void {
    this.nameser.Name$.subscribe((name:string)=>{
      this.name4=name})
  }

}
