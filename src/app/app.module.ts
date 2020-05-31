import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PsicologoComponent } from './pages/psicologo/psicologo.component';
import { GerenteComponent } from './pages/gerente/gerente.component';
import { RespuestasComponent } from './pages/respuestas/respuestas.component';
import { GrabadoraAudioService } from './providers/grabadora-audio.service';
import { MatIconModule } from '@angular/material/icon';
import { PasoAPasoComponent } from './compartido/paso-a-paso/paso-a-paso.component';
import { RespuestasService } from './providers/respuestas.service';
import { HttpClientModule } from '@angular/common/http';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';

@NgModule({
    declarations: [
        AppComponent,
        EmpleadoComponent,
        InicioComponent,
        PsicologoComponent,
        GerenteComponent,
        RespuestasComponent,
        PasoAPasoComponent,
        PresentacionComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ChartsModule
    ],
    providers: [ GrabadoraAudioService, RespuestasService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
