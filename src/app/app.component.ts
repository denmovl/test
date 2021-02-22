import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'test';
  stars = new FormControl(2);
  count = [ 1, 2, 3, 4, 5, 6 ];

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.stars.setValue(5);
    // }, 3000)
  }
}
