import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent {
  msg=''
  total= 0;
  status=true;
  // clickMethod(){
  //     this.msg = "Click me button clicked!";
  //     console.log('clicked')
  // }

 incrementTotal(evnet : Event){
  this.total += 1;
 }

  showEvent(event:Event){

  }
}
