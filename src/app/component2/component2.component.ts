import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ExampleData } from '../typeDefs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit{

  data: ExampleData[] = [];

  constructor(private testService: TestService, private apiService: ApiService){}

  ngOnInit(): void {
    console.log('ng on in it');

    this.apiService.getDataFromApi().subscribe((data: ExampleData[])=> {
      console.log('data===>>>', data);
      this.data = data;
    })
    

  }

  passData(){
    this.testService.setData("Hrushikesh Jadhav");
  }

}
