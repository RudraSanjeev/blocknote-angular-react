import { Component, OnInit } from '@angular/core';
import { CombineDataService } from '../combine.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  receivedData: string = ""
  constructor(private combineDataService: CombineDataService) { 

  }


  ngOnInit(): void {
  this.combineDataService.getData().subscribe(res => {
    this.receivedData = res;
  })

  }

}
