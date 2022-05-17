import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Driver} from './driver';
import { DriverService } from './driver.service';
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
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  driverForm = new FormGroup({
    codigo : new FormControl('', [Validators.required]),
    descripcion : new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['codigo', 'descripcion'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Driver>;

  constructor(private driverService: DriverService, private notification: MatSnackBar) {
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.driverService.getAll().subscribe(respuesta => {
      this.dataSource = respuesta;
      this.table.renderRows();
    });
  }

  onClickCrear() : void {
    this.driverService.add(this.driverForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
      this.driverForm.reset();

    });
  }


}
