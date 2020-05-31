import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GrabadoraAudioService } from 'src/app/providers/grabadora-audio.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-paso-a-paso',
    templateUrl: './paso-a-paso.component.html',
    styleUrls: ['./paso-a-paso.component.scss']
})
export class PasoAPasoComponent implements OnInit {

    /**
     * Parametro del stepper
     */
    esLineal = false;

    /**
     * Primer grupo de formularios
     */
    @Input() primerFormulario: FormGroup;

    /**
     * Segundo grupo de formularios
     */
    @Input() segundoFormulario: FormGroup;

    /**
     * Estado para saber si son respuestas o para rellenar el formualrio
     */
    @Input() esRespuestas: boolean;

    /**
     * Datos del formulario
     */
    @Output() private formularioAEnviar = new EventEmitter<any>();

    /**
     * Numeros para seleccionar en la pregunta del arbol (primera pregunta)
     */
    numerosArbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

    /**
     * Ruta con la imagen de emociones
     */
    imagenEmociones = './assets/images/arbol.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente = './assets/images/mente.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente1 = './assets/images/mente1.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente2 = './assets/images/mente2.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente3 = './assets/images/mente3.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente4 = './assets/images/mente4.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente5 = './assets/images/mente5.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente6 = './assets/images/mente6.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente7 = './assets/images/mente7.png';

    /**
     * Ruta con la imagen de mentes
     */
    imagenMente8 = './assets/images/mente8.png';

    /**
     * Estado para saber si está grabando o no
     */
    estaGrabando = false;

    /**
     * Tiempo de grabacion
     */
    tiempoGrabacion: string;

    /**
     * Url de la grabacion
     */
    blobUrl: SafeUrl;

    constructor(
        private constructorFormulario: FormBuilder,
        private grabadoraAudioService: GrabadoraAudioService,
        private sanitizer: DomSanitizer
    ) {
        this.grabadoraAudioService.recordingFailed().subscribe(() => {
            this.estaGrabando = false;
        });
        this.grabadoraAudioService.getRecordedTime().subscribe((time) => {
            this.tiempoGrabacion = time;
        });
        this.grabadoraAudioService.getRecordedBlob().subscribe((data) => {
            this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
        });
    }

    ngOnInit() {
        if (!this.esRespuestas) {
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
    }

    /**
     * Metodo para envio de formulario con los datos adquiridos de la encuesta y el archivo de audio
     */
    enviarFormulario() {
        console.log(this.primerFormulario, this.segundoFormulario);
        const controls = {
            pregunta: this.primerFormulario.controls.primerControl.value,
            pregunta1: this.primerFormulario.controls.pregunta1.value,
            pregunta2: this.primerFormulario.controls.pregunta2.value,
            pregunta3: this.primerFormulario.controls.pregunta3.value,
            pregunta4: this.primerFormulario.controls.pregunta4.value,
            pregunta5: this.primerFormulario.controls.pregunta5.value,
            pregunta6: this.primerFormulario.controls.pregunta6.value,
            pregunta7: this.primerFormulario.controls.pregunta7.value,
            pregunta8: this.primerFormulario.controls.pregunta8.value,
            pregunta9: this.primerFormulario.controls.pregunta9.value
        };
        this.formularioAEnviar.emit(controls);
    }

    /**
     * Metodo para envio de formulario con los datos adquiridos de la encuesta y el archivo de audio
     */
    iniciarGrabacion() {
        if (!this.estaGrabando) {
            this.estaGrabando = true;
            this.grabadoraAudioService.startRecording();
            let n = 0;
            const that = this;
            window.setInterval(() => {
                if (n === 10) {
                    that.grabadoraAudioService.stopRecording();
                    that.estaGrabando = false;
                }
                n++;
            },
                1000);
        }
    }

    /**
     * Aborta la grabacion de audio
     */
    abortarGrabacion() {
        if (this.estaGrabando) {
            this.estaGrabando = false;
            this.grabadoraAudioService.abortRecording();
        }
    }

    /**
     * Detiene la grabacion de audio
     */
    detenerGrabacion() {
        if (this.estaGrabando) {
            this.grabadoraAudioService.stopRecording();
            this.estaGrabando = false;
        }
    }

    /**
     * Limpia o reinicia los datos grabados
     */
    limpiarDatosGrabados() {
        this.blobUrl = null;
    }

}
