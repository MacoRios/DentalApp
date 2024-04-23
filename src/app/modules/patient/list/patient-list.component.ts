import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { PatientService } from "../patient.service";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { PatientModel } from "../models/PatientModel";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
    templateUrl: "./patient-list.component.html",
    standalone: true,
    imports: [
        CommonModule,
        NgxSpinnerModule,
        MatTableModule,
        MatPaginatorModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonToggleModule,
    ],
    providers: [
        PatientService,
        NgxSpinnerService,
    ]
})

export class PatientListComponent implements AfterViewInit {
    patients: PatientModel[];
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private readonly _patientService: PatientService,
        private readonly _spinnerService: NgxSpinnerService
    ){
        // this.getPatients();
    }

    // Métodos de acción
    editarPaciente(paciente: PatientModel) {
        console.log('funciona paciente')
    }

    eliminarPaciente(paciente: PatientModel) {
        console.log('funciona paciente delete')
    }

    verDetalle(paciente: PatientModel) {
        console.log('funciona paciente ver')
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
        this.dataSource.filter = filterValue;
    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
    {position: 1, name: 'Ana Daniela Chavéz Camey', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Marco Antonio Ríos Garcia', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Sergio Arturo Ríos Garcia', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Palido', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Luis Cotoc', weight: 10.811, symbol: 'B'},
  ];
  

  

