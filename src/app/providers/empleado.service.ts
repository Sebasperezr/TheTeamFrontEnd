import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {

    /**
     * Url de consulta del servicio
     */
    url = 'https://theteamdes.herokuapp.com/Aplicaciones.encuesta/';

    constructor(
        private httpC: HttpClient
    ) { }

    /**
     * Envia el formulario con las preguntas diligenciadas
     * @param respuestaFormulario respuesta marcada
     * @param key pregunta
     */
    enviarFormulario(respuestaFormulario: any, key: any) {
        const futuro = new Date();
        const body = {
            fecha: new Date(),
            idUsuario: Math.round(Math.random() * 50),
            fecha_Baja: new Date(futuro.setDate(futuro.getDate() + 30)).toString(),
            idActividad: key,
            idRespuesta: respuestaFormulario,
            idResultado: ''
        };
        return this.httpC.post(this.url, body);
    }

    consultarFormulario() {
        return this.httpC.get(this.url);
    }
}
