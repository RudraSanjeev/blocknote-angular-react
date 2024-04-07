// data-sharing.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private dataSubject = new Subject<any>();
  sharedData = this.dataSubject.asObservable();

  sendData(data: any) {
    this.dataSubject.next(data);
  }
}
