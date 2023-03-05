import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ClientService } from "../client.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Client } from "../client";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html'
})
export class ClientCreateComponent implements OnInit {

  @Output() confirmCreation = new EventEmitter<boolean>()

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) { }

  createClientForm!: FormGroup

  emitConfirmCreation(wasCreated: boolean) {
    this.confirmCreation.emit(wasCreated)
  }

  ngOnInit(): void {
    this.createClientForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      login: ["", Validators.required],
      clave: ["", Validators.required]
    })
  }

  createClient(client: Client) {
    this.clientService.createClient(client).subscribe(client => {
      this.createClientForm.reset()
      this.emitConfirmCreation(true)
    })
  }
}
