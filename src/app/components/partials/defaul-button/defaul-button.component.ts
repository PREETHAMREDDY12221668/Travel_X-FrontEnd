import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './defaul-button.component.html',
  styleUrls: ['./defaul-button.component.css']
})
export class DefaulButtonComponent implements OnInit {
  @Input()
  type:'submit' |'button'='submit';
  @Input()
  text:string='Submit';
  @Input()
  bgcolor:string='#080710';
  @Input()
  color:string='#EFEFEF';
  @Input()
  fontSizeinpx:number=18;
  @Input()
  widthinpercentage:number=100;
  @Output()
  onClick=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
