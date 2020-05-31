import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RespuestasService {

    constructor(private httpC: HttpClient) { }

    obtenerRespuestas() {
        // this.httpC
        return of({
            pregunta: 20,
            pregunta1: 'a',
            pregunta2: 'b',
            pregunta3: 'c',
            pregunta4: 'a',
            pregunta5: 'c',
            pregunta6: 'b',
            pregunta7: 'a',
            pregunta8: 'b',
            pregunta9: 'a'
        });
    }
}
