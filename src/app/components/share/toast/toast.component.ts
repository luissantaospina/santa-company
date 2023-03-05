import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {

  @Input() toastTitle: string = ''
  @Input() type: string = ''

  openToast: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
}
