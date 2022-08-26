import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class NameServices{
    Name$:any=new Subject();


}