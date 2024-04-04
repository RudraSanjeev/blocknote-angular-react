import { Component, EventEmitter, OnInit } from '@angular/core';
import { CombineDataService } from '../combine.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  name: string = "";
  constructor(private combineDataService: CombineDataService) { }

  ngOnInit(): void {
  }

  showName(){
    this.combineDataService.sendData(this.name);
  }
  sendNameEvent: EventEmitter<string> = new EventEmitter()

}
