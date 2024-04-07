import {
  Component,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CombineDataService } from '../combine.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements AfterViewInit {
  name: string = '';
  constructor(private combineDataService: CombineDataService) {}
  @ViewChild('nameInput') nameInput: ElementRef | undefined;

  ngAfterViewInit(): void {
    $(this.nameInput?.nativeElement).on('keypress', (e: any) => {
      console.log('invoked');
      if (e.keyCode === 47) {
        this.showName();
      }
    });
  }

  showName() {
    this.combineDataService.sendData(this.name);
  }
  sendNameEvent: EventEmitter<string> = new EventEmitter();
}
