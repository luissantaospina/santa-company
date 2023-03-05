import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import {Client} from "./client";
import {Order} from "../order/order";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  constructor(
    private clientService: ClientService
  ) { }

  clients: Array<Client> = []
  deleteModalActive: boolean = false
  createModalActive: boolean = false
  updateModalActive: boolean = false
  selectedClient: any

  confirmDeletion(value: boolean) {
    if (value) this.deleteClient(this.selectedClient)
    this.deleteModalActive = false
  }

  confirmCreation() {
    this.getClientsList()
    this.createModalActive = false
  }

  confirmUpdate() {
    this.getClientsList()
    this.updateModalActive = false
  }

  deleteClient(clientId: string): void {
    this.clientService.deleteClient(clientId).subscribe(() => {
      this.getClientsList()
    })
  }

  getClientsList(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients
    })
  }

  ngOnInit(): void {
    this.getClientsList()
  }
}
