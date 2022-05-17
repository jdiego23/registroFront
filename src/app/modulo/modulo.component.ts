import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Modulo} from './modulo';
import { ModuloService } from './modulo.service';
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
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {
  ModuloForm = new FormGroup({
    codigo : new FormControl('', [Validators.required]),
    descripcion : new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['codigo', 'descripcion'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Modulo>;

  constructor(private moduloService: ModuloService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.moduloService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.moduloService.add(this.ModuloForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
      this.ModuloForm.reset();

    });
  }
}
