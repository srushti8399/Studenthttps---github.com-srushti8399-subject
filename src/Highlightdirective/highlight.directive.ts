import{Directive, HostBinding, Input} from '@angular/core'


@Directive({
    selector:'[HighLight]'
})
export class HighLightDirective {

    @Input() 
    backgroundColor:string="";

    @Input()
    textcolor:string="";

    @HostBinding('style.backgroundColor') bgColor:string='';
    @HostBinding('style.textcolor') txcolor:string='';

    
    

  ngOnInit() {
    

    this.bgColor=this.backgroundColor;
    this.txcolor=this.textcolor;

  }
}