import {Component, OnInit} from '@angular/core';
import Tracker from '@openreplay/tracker';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    const tracker = new Tracker({
      projectKey: 'aEQbM7n8xayv1WkVDLpx',
      __DISABLE_SECURE_MODE:true
    });
    tracker.start();
    console.log("tracker started")
  }
}
