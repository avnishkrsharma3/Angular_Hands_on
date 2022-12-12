import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
    
    val:number=0;
    decreaseVal(event:Event){
      this.val -= 1;
    }
    increaseVal(event:Event){
      this.val += 1;
    }

}
