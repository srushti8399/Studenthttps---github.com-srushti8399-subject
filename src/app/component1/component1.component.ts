import { Component, OnInit } from '@angular/core';
import { NameServices } from '../Services/service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  name:string=''

  constructor(private nameser:NameServices) { }

  ngOnInit(): void {
  }
  submit(){
    this.nameser.Name$.next(this.name)

  }

}
