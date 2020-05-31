import { Injectable } from '@angular/core';
//import { Injectable, NgZone } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import { isNullOrUndefined } from 'util';

interface SalidaGrabadoraDeAudio {
  blob: Blob;
  title: string;
} 

@Injectable({
  providedIn: 'root'
})
export class GrabadoraAudioService {

  private escuchar;
  private grabar;
  private intervalo;
  private tiempoDeInicio;
  private _grabado = new Subject<SalidaGrabadoraDeAudio>();
  private _tiempoGrabacion = new Subject<string>();
  private _grabacionFallida = new Subject<string>();

  constructor() { }

  getRecordedBlob(): Observable<SalidaGrabadoraDeAudio> {
    return this._grabado.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._tiempoGrabacion.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._grabacionFallida.asObservable();
  }


  startRecording() {

    if (this.grabar) {
      // It means recording is already started or it is already recording something
      return;
    }

    this._tiempoGrabacion.next('00:00');
    navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
      this.escuchar = s;
      this.record();
    }).catch(error => {
      this._grabacionFallida.next();
    });

  }

  abortRecording() {
    this.stopMedia();
  }

  private record() {

    this.grabar = new RecordRTC.StereoAudioRecorder(this.escuchar, {
      type: 'audio',
      mimeType: 'audio/webm',
      timeSlice: 50
    });

    this.grabar.record();
    this.tiempoDeInicio = moment();
    this.intervalo = setInterval(
      () => {
        const currentTime = moment();
        const diffTime = moment.duration(currentTime.diff(this.tiempoDeInicio));
        const time = this.toString(diffTime.minutes()) + ':' + this.toString(diffTime.seconds());
        this._tiempoGrabacion.next(time);
      },
      1000
    );
  }

  private toString(value) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  stopRecording() {

    if (this.grabar) {
      this.grabar.stop((blob) => {
        if (this.tiempoDeInicio) {
          const mp3Name = encodeURIComponent('audio_' + new Date().getTime() + '.mp3');
          this.stopMedia();
          this._grabado.next({ blob: blob, title: mp3Name });
        }
      }, () => {
        this.stopMedia();
        this._grabacionFallida.next();
      });
    }
  }

  private stopMedia() {
    if (this.grabar) {
      this.grabar = null;
      clearInterval(this.intervalo);
      this.tiempoDeInicio = null;
      if (this.escuchar) {
        this.escuchar.getAudioTracks().forEach(track => track.stop());
        this.escuchar = null;
      }
    }
  }

}
