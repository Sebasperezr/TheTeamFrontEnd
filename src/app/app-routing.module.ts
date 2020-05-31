import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { GerenteComponent } from './pages/gerente/gerente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PsicologoComponent } from './pages/psicologo/psicologo.component';
import { RespuestasComponent } from './pages/respuestas/respuestas.component';

const routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'empleado',
        component: EmpleadoComponent
    },
    {
        path: 'psicologo',
        component: PsicologoComponent
    },
    {
        path: 'respuestas/:id',
        component: RespuestasComponent
    },
    {
        path: 'gerente',
        component: GerenteComponent
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
