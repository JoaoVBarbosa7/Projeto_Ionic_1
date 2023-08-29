import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Lista } from '../model/Lista.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  meusProdutos: Lista[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Lista[]>('http://localhost:3000/Lista').subscribe(results => this.meusProdutos = results);
  }

  deletar(id:any){
    this.http.delete('http://localhost:3000/Lista/' + id).subscribe();
    setTimeout(this.refresh, 200) 
  }

refresh(){
  location.reload();
}

}
