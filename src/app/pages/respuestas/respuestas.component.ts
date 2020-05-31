import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-respuestas',
    templateUrl: './respuestas.component.html',
    styleUrls: ['./respuestas.component.scss']
})
export class RespuestasComponent implements OnInit {

    constructor(
        private rutaActivada: ActivatedRoute
    ) { }

    ngOnInit(): void {
        console.log(this.rutaActivada.snapshot.params.id);
    }

}
