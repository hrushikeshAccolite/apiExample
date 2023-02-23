import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{
  name: string = "";

  constructor(private testService: TestService){}

  ngOnInit(): void {
    this.testService.commonData$.subscribe((data:any) => {
      this.name = data;
    })

    this.testService.commonDataBS$.subscribe((data: any) => {
      this.name = data;
    })
  }

}
