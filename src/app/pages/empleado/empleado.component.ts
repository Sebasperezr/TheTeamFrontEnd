import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/providers/empleado.service';
import { Router } from '@angular/router';

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
        private constructorFormulario: FormBuilder,
        private empleadoService: EmpleadoService,
        private router: Router
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

    enviarFormulario(evento: any) {
        for (const key in evento) {
            if (evento.hasOwnProperty(key)) {
                if (key === 'audio') {
                    // this.empleadoService.enviarFormulario()
                } else {
                    const respuestaFormulario = evento[key];
                    this.empleadoService.enviarFormulario(respuestaFormulario, key)
                        .subscribe(respuesta => {
                            console.log(respuesta);
                        });
                }

            }
        }
        this.router.navigate(['/inicio']);
    }
}
