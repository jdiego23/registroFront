import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Producto} from './producto';
import { ProductoService } from './producto.service';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';

import { ModuloService } from '../modulo/modulo.service';

import { DriverService } from '../driver/driver.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  modulos: any;
  driver: any;
  producto!: Producto;

  productoForm = new FormGroup({
    codigo : new FormControl('', [Validators.required]),
    nombre : new FormControl('', [Validators.required]),
    descripcion : new FormControl('', [Validators.required]),
    modulo : new FormControl('', [Validators.required]),

  });

  matcher = new MyErrorStateMatcher();

 // displayedColumns: string[] = ['codigo', 'nombre', 'descripcion'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Producto>;

  constructor(private productoService: ProductoService, private notification: MatSnackBar, private moduloService: ModuloService, private driverService: DriverService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.moduloService.getAll().subscribe(respuesta =>{
      this.modulos = respuesta;
    })
    this.driverService.getAll().subscribe(respuesta =>{
      this.driver = respuesta;
    })
  }
 
  private listar() {
    this.productoService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.producto.codigo = this.productoForm.get('codigo')?.value;
    this.producto.nombre = this.productoForm.get('nombre')?.value
    this.producto.descripcion = this.productoForm.get('descripcion')?.value;
    this.producto.modulo.descripcion = this.productoForm.get('modulo')?.value;
    this.producto.driver.descripcion = this.productoForm.get('modulo')?.value;

    
    /*this.productoService.add(this.productoForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      console.log(this.producto);
      this.listar();
      this.productoForm.reset();
    });*/
  }

}
