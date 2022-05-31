
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Modulo } from './modulo';
import { ModuloService } from './modulo.service';

describe('Modulo', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let moduloService: ModuloService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          ModuloService
        ]
      });
  
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      moduloService = TestBed.inject(ModuloService);
    });
  
    afterEach(() => {
      httpTestingController.verify(); 
    });
  
    describe('obtiene los Modulo', () => {
      let modulobase: Modulo[];
  
      beforeEach(() => {
        modulobase = [
          { codigo: 1, descripcion: 'Modulo 1' },
          { codigo: 2, descripcion: 'Modulo 2' },
        ] as Modulo[];
      });
      
      it('retorna un ok al encontrar apesar de que no hay ningún modulo', () => {
        moduloService.getAll().subscribe(
          modulos => expect(modulos.descripcion.length).toEqual(0),
          fail
        );
  
        const req = httpTestingController.expectOne(moduloService.empUrl);
        req.flush([]); 
      });

    });
  });