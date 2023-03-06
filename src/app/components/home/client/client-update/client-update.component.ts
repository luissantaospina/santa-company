import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ClientService } from "../client.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Client } from "../client";
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent implements OnInit {

  @Input() clientId: string = ''
  @Output() confirmUpdate = new EventEmitter<boolean>()

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
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
      nombre: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
  }

  getClient(id: string): void {
    this.clientService.getClient(id).subscribe(client => {
      this.clientSave = client
      this.updateClientForm = this.formBuilder.group({
        nombre: [this.clientSave.nombre, Validators.required],
        login: [this.clientSave.login, Validators.required],
        clave: ["", Validators.required]
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
