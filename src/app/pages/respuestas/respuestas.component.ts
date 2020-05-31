import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespuestasService } from 'src/app/providers/respuestas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-respuestas',
    templateUrl: './respuestas.component.html',
    styleUrls: ['./respuestas.component.scss']
})
export class RespuestasComponent implements OnInit {

    /**
     * Primer grupo de formularios
     */
    primerFormulario: FormGroup;

    /**
     * Segundo grupo de formularios
     */
    segundoFormulario: FormGroup;

    constructor(
        private rutaActivada: ActivatedRoute,
        public respuestasService: RespuestasService,
        public constructorFormulario: FormBuilder
    ) { }

    ngOnInit(): void {
        console.log(this.rutaActivada.snapshot.params.id);
        this.respuestasService.obtenerRespuestas()
            .subscribe(respuestas => {
                this.primerFormulario = this.constructorFormulario.group({
                    primerControl: [respuestas.pregunta, Validators.required]
                });
                this.segundoFormulario = this.constructorFormulario.group({
                    pregunta1: [respuestas.pregunta1, Validators.required],
                    pregunta2: [respuestas.pregunta2, Validators.required],
                    pregunta3: [respuestas.pregunta3, Validators.required],
                    pregunta4: [respuestas.pregunta4, Validators.required],
                    pregunta5: [respuestas.pregunta5, Validators.required],
                    pregunta6: [respuestas.pregunta6, Validators.required],
                    pregunta7: [respuestas.pregunta7, Validators.required],
                    pregunta8: [respuestas.pregunta8, Validators.required],
                    pregunta9: [respuestas.pregunta9, Validators.required]
                });
            });
    }
}
