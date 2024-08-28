import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent  implements OnInit {

  @Input() mss: string = '';
  @Input() inf: boolean = false;
  constructor() { }

  ngOnInit() {}

}
