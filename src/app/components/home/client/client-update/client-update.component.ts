import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ClientService } from "../client.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Client } from "../client";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent implements OnInit {

  @Input() clientId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) { }

  updateClientForm!: FormGroup
  client: any
  clientSave: any

  emitConfirmUpdate(wasUpdated: boolean) {
    this.confirmUpdate.emit(wasUpdated)
  }

  ngOnInit(): void {
    this.getClient(this.clientId)
    this.updateClientForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  getClient(id: string): void {
    this.clientService.getClient(id).subscribe(client => {
      this.clientSave = client
      this.updateClientForm = this.formBuilder.group({
        name: [this.clientSave.name, Validators.required],
        email: [this.clientSave.email, Validators.required],
        password: ["", Validators.required]
      })
    })
  }

  updateClient(client: Client) {
    this.clientService.updateClient(this.clientId, client).subscribe(client => {
      this.updateClientForm.reset()
      this.emitConfirmUpdate(false)
    })
  }
}
