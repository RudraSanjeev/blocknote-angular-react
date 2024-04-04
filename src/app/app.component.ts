import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
} from '@angular/core';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
// import * ReactDOM from 'react-dom'
// import * as ReactDOM from 'react-dom';
import Component1 from './react/components/Component1';
// import DatePickerComponent from './react/components/DatePicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  root: any = null;
  rootId: string = 'rootId';

  ngOnInit(): void {
    setTimeout(() => {
      this.render();
    });
  }

  ngAfterViewInit(): void {
    // Your code here
    this.render();
  }

  // Implementing ngOnChanges method
  // changes: SimpleChange
  ngOnChanges(): void {
    // Your code here
    this.render();
  }

  ngOnDestroy(): void {}

  private render() {
    if (!this.root) {
      this.root = ReactDOM.createRoot(document.getElementById(this.rootId)!);
    }
    this.root.render(
      React.createElement(Component1, {
        data: [
          {
            id: '10de53ef-27f5-4cc3-aec7-a008a124ca7c',
            type: 'paragraph',
            props: {
              textColor: 'default',
              backgroundColor: 'default',
              textAlignment: 'center',
            },
            content: [
              {
                type: 'text',
                text: 'lflsdajfskladjfsal sdklfjkl;sdjfsadj fldsajflk;asdjflksaj',
                styles: {},
              },
            ],
            children: [],
          },
          {
            id: '60af72f8-5c07-427e-9387-e4ef2ab93ea8',
            type: 'paragraph',
            props: {
              textColor: 'default',
              backgroundColor: 'default',
              textAlignment: 'left',
            },
            content: [
              {
                type: 'text',
                text: 'fksdhfsdhak ',
                styles: {},
              },
              {
                type: 'text',
                text: 'fdskhfksdafksjda',
                styles: {
                  bold: true,
                },
              },
              {
                type: 'text',
                text: ' fsdfjklsdafksadkfh ',
                styles: {},
              },
            ],
            children: [],
          },
          {
            id: '5ccd5b0f-9d57-486c-83be-50dc8fcbcebe',
            type: 'paragraph',
            props: {
              textColor: 'default',
              backgroundColor: 'default',
              textAlignment: 'left',
            },
            content: [
              {
                type: 'text',
                text: 'fksdfkldsha ',
                styles: {},
              },
              {
                type: 'text',
                text: 'fjlskdafdsahf',
                styles: {
                  textColor: 'red',
                },
              },
            ],
            children: [],
          },
          {
            id: '79c7c5c2-343d-4b9a-869d-7e5879065988',
            type: 'paragraph',
            props: {
              textColor: 'default',
              backgroundColor: 'default',
              textAlignment: 'left',
            },
            content: [],
            children: [],
          },
          {
            id: '90b589e9-9789-44fc-bb74-29e056b4589f',
            type: 'paragraph',
            props: {
              textColor: 'default',
              backgroundColor: 'default',
              textAlignment: 'left',
            },
            content: [],
            children: [],
          },
        ],
      })
    );
  }
}
