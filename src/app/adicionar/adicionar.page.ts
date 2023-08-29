import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  additem = "Adicionar";
  dados ={
    id: "",
    item: "",
    quantia: ""
  }

  httpOptions ={
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  adicionar(form:any){
    this.http.post('http://localhost:3000/Lista', form.value, this.httpOptions).subscribe();
    setTimeout(this.refresh, 200);
  }
  refresh(){
    location.reload();
  }

}
