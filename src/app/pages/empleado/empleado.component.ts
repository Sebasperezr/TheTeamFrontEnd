import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    numerosArbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

    imagenEmociones = './assets/images/arbol.png';
    imagenMente = './assets/images/mente.png';
    imagenMente1 = './assets/images/mente1.png';
    imagenMente2 = './assets/images/mente2.png';
    imagenMente3 = './assets/images/mente3.png';
    imagenMente4 = './assets/images/mente4.png';
    imagenMente5 = './assets/images/mente5.png';
    imagenMente6 = './assets/images/mente6.png';
    imagenMente7 = './assets/images/mente7.png';
    imagenMente8 = './assets/images/mente8.png';

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
