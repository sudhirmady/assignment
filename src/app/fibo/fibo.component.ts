import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibo',
  templateUrl: './fibo.component.html',
  styleUrls: ['./fibo.component.css']
})
export class FiboComponent implements OnInit {

  upto=10;
  fibonacciSeries: Number[] = [];
  constructor() { }

  ngOnInit() {
  }

  FibonacciSeries(upto: Number) {
    for (let i = 0; i<upto; i++) {
      const nextElem = this.fibonacci(i)
      this.fibonacciSeries.push(nextElem)
    }
  }

  fibonacci(num: Number) {
    {
      let num1 = 0;
      let num2 = 1;
      let sum;
      for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
      }
      return num2;
    }
  }


}
