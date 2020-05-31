import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

    /**
     * Primer grupo de formularios
     */
    primerFormulario: FormGroup;

    /**
     * Segundo grupo de formularios
     */
    segundoFormulario: FormGroup;

    constructor(
        private constructorFormulario: FormBuilder
    ) {
    }

    ngOnInit() {
        this.primerFormulario = this.constructorFormulario.group({
            primerControl: ['', Validators.required]
        });
        this.segundoFormulario = this.constructorFormulario.group({
            pregunta1: ['', Validators.required],
            pregunta2: ['', Validators.required],
            pregunta3: ['', Validators.required],
            pregunta4: ['', Validators.required],
            pregunta5: ['', Validators.required],
            pregunta6: ['', Validators.required],
            pregunta7: ['', Validators.required],
            pregunta8: ['', Validators.required],
            pregunta9: ['', Validators.required]
        });

    }

    enviarFormulario() {
        console.log(this.primerFormulario, this.segundoFormulario);
    }
}
