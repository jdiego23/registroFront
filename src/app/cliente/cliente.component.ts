import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cliente} from './cliente';
import { ClienteService } from './cliente.service';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clienteForm = new FormGroup({
    nit : new FormControl('', [Validators.required]),
    nombre : new FormControl('', [Validators.required]),
    direccion : new FormControl('', [Validators.required]),
    pais : new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nit' ,'nombre', 'direccion', 'pais' ];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Cliente>;

  constructor(private clienteService: ClienteService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.clienteService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.clienteService.add(this.clienteForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
      this.clienteForm.reset();

    });
  }

}
