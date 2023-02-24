import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ExampleData } from '../typeDefs';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnDestroy ,OnInit{

  data: ExampleData[] = [];
  unsubscribe = new Subscription()
  constructor(private testService: TestService, private apiService: ApiService){}

  ngOnInit(): void {

    this.unsubscribe.add(
      this.apiService.getDataFromApi().subscribe((data: ExampleData[])=> {
        console.log('data===>>>', data);
        this.data = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

  passData(){
    this.testService.setData("Hrushikesh Jadhav");
  }

}
