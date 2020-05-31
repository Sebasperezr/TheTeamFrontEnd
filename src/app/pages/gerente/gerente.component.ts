import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-gerente',
    templateUrl: './gerente.component.html',
    styleUrls: ['./gerente.component.scss']
})
export class GerenteComponent implements OnInit {

    public lineChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sujeto A' },
    ];
    public lineChartLabels: Label[] = ['Distímia', 'Hipertímia', 'Eutímia'];
    public lineChartOptions: ChartOptions = {
        responsive: true,
    };
    public lineChartColors: Color[] = [
        {
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [];

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

    constructor() { }

    ngOnInit(): void {
    }

}
