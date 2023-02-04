import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { resolve } from 'dns';
import{ Api } from './../../services/api';

@Component({
  selector: 'app-add-animais',
  templateUrl: './add-animais.page.html',
  styleUrls: ['./add-animais.page.scss'],
})
export class AddAnimaisPage implements OnInit {

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
    private toastController: ToastController
    
    ) { }

  ngOnInit() {
    console.log('teste');
   // this.mensagemsucesso();
    this.actRouter.params.subscribe((data:any)=>{

    });
  }

  async mensagem (mensagem: string, cor:any) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      color: cor
    });
    await toast.present();
  }

  mensagemerro(){

  }


  Animais(){
    this.router.navigate(['animais']);
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        nome: this.nome,
        data_nascimento: this.data_nascimento,
        sexo: this.sexo,
        raca: this.raca,
        especie: this.especie,
        tipo_exploracao: this.tipo_exploracao,
        local_de_nascimento: this.local_de_nascimento,
        categoria: this.categoria,
        anomalia: this.anomalia,
        quilos_do_nascimento: this.quilos_do_nascimento,
        numero_brinco: this.numero_brinco
      }
      this.provider.dadosApi(dados, '/animais/inserir.php').subscribe(
        data =>{
          
          if(data['ok']== true){
            this.router.navigate(['animais']);
            this.mensagem(data['mensagem'], 'success');
            this.limparCampos();
         }else{
          this.mensagem(data['mensagem'], 'danger');
         }

        }
      )
    });

  }

  editar(){
    
  }

  limparCampos(){
    this.nome = "";
    this.data_nascimento = "";
    this.sexo = "";
    this.raca = "";
    this.especie = "";
    this.tipo_exploracao = "";
    this.local_de_nascimento = "";
    this.categoria = "";
    this.anomalia = "";
    this.quilos_do_nascimento = "";
    this.numero_brinco = "";

  }
}
