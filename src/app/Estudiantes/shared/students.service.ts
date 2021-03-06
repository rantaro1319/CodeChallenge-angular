import { Injectable } from '@angular/core';
import { Estudents } from './estudents.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

formData = new Estudents();
readonly rootURL = 'https://localhost:44389/api';
constructor(private http : HttpClient) { }
list : Estudents[];


postNuevoEstudiante()
{
   return this.http.post(this.rootURL+'/estudiantes',this.formData);
}

updateestudiante()
{
   return this.http.put(this.rootURL+'/estudiantes/'+ this.formData.Id,this.formData);
}

refreshList()
{
  this.http.get(this.rootURL+'/estudiantes').toPromise().then(res => this.list = res as Estudents[]);
}

Deletestudiante(id)
{
   return this.http.delete(this.rootURL+'/estudiantes/'+ id);
}

}
