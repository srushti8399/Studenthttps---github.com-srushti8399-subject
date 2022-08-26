import { Component } from '@angular/core';

@Component({
  selector: 'stud-list',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']

})
export class StudentListComponent {
    students:any[]=[
        {RollNo:'10',name:'TOM',gender:'Male',English:32,Hindi:33,SocialScience:30,Maths:35},
        {RollNo:'11',name:'LOKO',gender:'Female',English:80,Hindi:87,SocialScience:98,Maths:90},
        {RollNo:'12',name:'POKO',gender:'Female',English:86,Hindi:93,SocialScience:99,Maths:99},
        {RollNo:'13',name:'JERRY',gender:'Male',English:30,Hindi:20,SocialScience:32,Maths:33},
        {RollNo:'14',name:'ANDREW',gender:'Male',English:45,Hindi:45,SocialScience:45,Maths:45},
        {RollNo:'15',name:'SHIZUKA',gender:'Female',English:78,Hindi:88,SocialScience:99,Maths:96},
        {RollNo:'16',name:'NOBITA',gender:'Male',English:30,Hindi:20,SocialScience:50,Maths:12},
        {RollNo:'17',name:'CHUTKI',gender:'Female',English:32,Hindi:32,SocialScience:32,Maths:32}
        
      ];
}