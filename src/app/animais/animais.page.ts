import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/services/api';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.page.html',
  styleUrls: ['./animais.page.scss'],
})
export class AnimaisPage implements OnInit {

  itens : any = [];
  limit : number = 10;
  start : number = 0;
  nome : string = "";


  constructor(
    private router:Router,
    private provider: Api,
    private actRouter: ActivatedRoute,
    private toastController: ToastController

    ) { }

  ngOnInit() {
  }

  addAnimais(){
    this.router.navigate(['add-animais']);
  }

  ionViewWillEnter(){ //Chama o metodo toda vez que a tela é carregada
    this.itens = [];
    this.start = 0;
    this.carregar(); 
  }


  async mensagem (mensagem: string, cor:any) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      color: cor
    });
    await toast.present();
  }


  carregar(){
    return new Promise(resolve => {
      this.itens = [];
      let dados = {
        nome : this.nome,
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, '/animais/listar.php').subscribe(data => {

        if(data['itens'] == '0') {
          this.ionViewWillEnter();
        }else{
          this.itens = [];
          for(let item of data['itens']){
            this.itens.push(item);
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }



  editar(idanimal:any, nome:any, data_nascimento:any, sexo:any, raca:any, especie:any, tipo_exploracao:any, local_de_nascimento:any, categoria:any, anomalia:any, quilos_do_nascimento:any, fk_idanimal_pai:any, fk_idanimal_mae:any, fk_funcionario_resp_parto:any, numero_brinco:any){
    this.router.navigate(['add-animais/' + idanimal + '/' + nome + '/' + data_nascimento + '/' + sexo + '/' + raca + '/' + especie + '/' + tipo_exploracao + '/' + local_de_nascimento + '/' + categoria + '/' + anomalia + '/' + quilos_do_nascimento + '/' + fk_idanimal_pai + '/' + fk_idanimal_mae + '/' + fk_funcionario_resp_parto + '/' + numero_brinco + '/'])

  }
  
  excluir(idanimal:any){
    return new Promise(resolve => {
      let dados = {
        idanimal: idanimal,

      }
      this.provider.dadosApi(dados, '/animais/excluir.php').subscribe(
        data =>{
          
          if(data['ok']== true){
            this.carregar();
            this.mensagem(data['mensagem'], 'success');
         }else{
          this.mensagem(data['mensagem'], 'danger');
         }

        }
      )
    });
  
  }

  mostrar(idanimal:any, nome:any, data_nascimento:any, sexo:any, raca:any, especie:any, tipo_exploracao:any, local_de_nascimento:any, categoria:any, anomalia:any, quilos_do_nascimento:any, fk_idanimal_pai:any, fk_idanimal_mae:any, fk_funcionario_resp_parto:any, numero_brinco:any){
    this.router.navigate(['mostrar-animais/'  + idanimal + '/' + nome + '/' + data_nascimento + '/' + sexo + '/' + raca + '/' + especie + '/' + tipo_exploracao + '/' + local_de_nascimento + '/' + categoria + '/' + anomalia + '/' + quilos_do_nascimento + '/' + fk_idanimal_pai + '/' + fk_idanimal_mae + '/' + fk_funcionario_resp_parto + '/' + numero_brinco + '/'])
  
  }
  





   //atualizar o list view

 doRefresh(event:any) {
    
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
}


//barra de rolagem
loadData(event:any) {

  this.start += this.limit;

  setTimeout(() => {
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}


}
