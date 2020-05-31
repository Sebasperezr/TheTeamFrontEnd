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
                    primerControl: [{ value: respuestas.pregunta, disabled: true }, Validators.required]
                });
                this.segundoFormulario = this.constructorFormulario.group({
                    pregunta1: [{ value: respuestas.pregunta1, disabled: true }, Validators.required],
                    pregunta2: [{ value: respuestas.pregunta2, disabled: true }, Validators.required],
                    pregunta3: [{ value: respuestas.pregunta3, disabled: true }, Validators.required],
                    pregunta4: [{ value: respuestas.pregunta4, disabled: true }, Validators.required],
                    pregunta5: [{ value: respuestas.pregunta5, disabled: true }, Validators.required],
                    pregunta6: [{ value: respuestas.pregunta6, disabled: true }, Validators.required],
                    pregunta7: [{ value: respuestas.pregunta7, disabled: true }, Validators.required],
                    pregunta8: [{ value: respuestas.pregunta8, disabled: true }, Validators.required],
                    pregunta9: [{ value: respuestas.pregunta9, disabled: true }, Validators.required]
                });
            });
    }
}
