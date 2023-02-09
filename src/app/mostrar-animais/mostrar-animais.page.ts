import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ Api } from './../../services/api';


@Component({
  selector: 'app-mostrar-animais',
  templateUrl: './mostrar-animais.page.html',
  styleUrls: ['./mostrar-animais.page.scss'],
})
export class MostrarAnimaisPage implements OnInit {

  nome: string = ""; 
  data_nascimento: string = "";
  sexo: string = "";
  raca: string = "";
  especie: string = "";
  tipo_exploracao: string = "";
  local_de_nascimento: string = "";
  categoria: string = "";
  anomalia: string = "";
  quilos_do_nascimento: string = "";
  numero_brinco: string = "";
  idanimal: string = "";

  constructor(
    private router:Router, 
    private provider: Api,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{

      this.idanimal = data.idanimal;
      this.nome = data.nome;
      this.data_nascimento = data.data_nascimento;
      this.sexo = data.sexo;
      this.raca = data.raca;
      this.especie = data.especie;
      this.tipo_exploracao = data.tipo_exploracao;
      this.local_de_nascimento = data.local_de_nascimento;
      this.categoria = data.categoria;
      this.anomalia = data.anomalia;
      this.quilos_do_nascimento = data.quilos_do_nascimento;
      this.numero_brinco = data.numero_brinco;

    });
  }

  Animais(){
    this.router.navigate(['animais']);
  }

}
