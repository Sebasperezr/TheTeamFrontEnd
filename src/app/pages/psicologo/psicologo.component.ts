import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-psicologo',
    templateUrl: './psicologo.component.html',
    styleUrls: ['./psicologo.component.scss']
})
export class PsicologoComponent implements OnInit {

    datosEmpleados = [
        {
            titulo: 'Pedro Sanchez',
            descripcion: 'Este joven presenta un apego emocional hacia su ex pareja y debe recibir tratamiento',
            id: 1
        },
        {
            titulo: 'Simmone Simons',
            descripcion: 'Esta muchacha necesita vacaciones',
            id: 2
        },
    ];

    estadosDeAnimo = [
        'Distímia',
        'Hipertímia',
        'Eutímia'
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
