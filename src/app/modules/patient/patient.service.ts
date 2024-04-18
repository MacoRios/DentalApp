import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable()
export class PatientService {

    async getPatients(){
        try {
            const response = await axios.get('http://localhost:3000/patient', {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiZWR2aW5jNTk3IiwiaWF0IjoxNzEzNDEwMjk0LCJleHAiOjE3MTM0MjEwOTR9.qgGQVMAykyNoAqYRgdmgGs3pdnCU2CBu69cDWkWf5Yc'
                }
            });
            if(response && response?.data?.patients){
                return response.data.patients
            }
            return null;
        } catch(error){
            return null;
        }
    }
}