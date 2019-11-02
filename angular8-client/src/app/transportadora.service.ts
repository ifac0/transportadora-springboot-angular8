import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  private baseUrl = 'http://localhost:8080/api/v1/transportadoras';


  //Para upload da imagem
  files = [];

  constructor(private http: HttpClient) { }

  getTransportadora(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTransportadora(transportadora: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, transportadora);
  }

  updateTransportadora(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTransportadora(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTransportadoraLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  onFileChanged(event: any) {
    this.files = event.target.files;
  }
  
  onUpload() {
    const formData = new FormData();
    for (const file of this.files) {
        formData.append(name, file, file.name);
    }
    this.http.post('url', formData).subscribe(x => null);
  }

}