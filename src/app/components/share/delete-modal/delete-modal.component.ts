import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html'
})
export class DeleteModalComponent implements OnInit {

  @Input() modalTitle: string = ''
  @Output() confirmDeletion = new EventEmitter<boolean>()

  constructor() { }

  emitConfirmDeletion(value: boolean) {
    this.confirmDeletion.emit(value)
  }

  ngOnInit(): void {
  }
}
