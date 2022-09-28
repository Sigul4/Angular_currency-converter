import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() card: [string, number];
  @Input() index: number;
}
