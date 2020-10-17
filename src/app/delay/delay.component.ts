import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {

  constructor() { }

  arr: Number[] = [1,2,3,4,5,6,7,8,9,10]
  currentIndex: number = 0;
  displayArray: Number[] = [];
  interval:any;
  
  ngOnInit() {
  }

  print() {
    this.displayArray.push(this.arr[this.currentIndex])
    this.interval = setInterval(() => {
      this.currentIndex+=1;
      if (this.currentIndex === this.arr.length) {
        clearInterval(this.interval)
        return;
      }
      this.displayArray.push(this.arr[this.currentIndex])
    },3000)
  }


}
