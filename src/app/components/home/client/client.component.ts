import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import {Client} from "./client";
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    // private _snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['name', 'email', 'actions'];

  clients: Array<Client> = []

  deleteClient(clientId: string): void {
    this.clientService.deleteClient(clientId).subscribe(() => {
      this.openSnackBar('Cliente eliminado exitosamente')
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

  openSnackBar(message: string) {
    // this._snackBar.open(
    //   message, '', {
    //     duration: 4000,
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top'
    //   }
    // );
  }
}
