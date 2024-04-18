import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PatientService } from "../patient.service";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { PatientModel } from "../models/PatientModel";

@Component({
    templateUrl: "./patient-list.component.html",
    standalone: true,
    imports: [
        CommonModule,
        NgxSpinnerModule
    ],
    providers: [
        PatientService,
        NgxSpinnerService
    ]
})
export class PatientListComponent {
    patients: PatientModel[];

    constructor(
        private readonly _patientService: PatientService,
        private readonly _spinnerService: NgxSpinnerService
    ){
        this.getPatients();
    }

    private async getPatients(){
        const patients = await this._patientService.getPatients();
        if(patients){
            this.patients = patients;
        } else {
            alert("Error. No se ha podido obtener el listado de pacientes");
        }
    }
}